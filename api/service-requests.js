import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const EMAIL_TO = process.env.SERVICE_REQUEST_EMAIL_TO || "john.mbiddulph@gmail.com";
const EMAIL_FROM = process.env.SERVICE_REQUEST_EMAIL_FROM || "Oldskoolvibe <forms@oldskoolvibe.dev>";
const VALID_CONTACT_METHODS = new Set(["email", "phone", "video_call"]);
const RESEND_ENV_NAMES = ["RESEND_API_KEY"];

const cleanText = (value, maxLength) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
};

const cleanOptional = (value, maxLength) => {
  const cleaned = cleanText(value, maxLength);
  return cleaned.length > 0 ? cleaned : null;
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatLine = (label, value) => {
  if (!value) {
    return "";
  }

  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
};

const getResendApiKey = () => {
  for (const name of RESEND_ENV_NAMES) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  return "";
};

const getEnvDiagnostics = () => ({
  vercelEnv: process.env.VERCEL_ENV || null,
  branch: process.env.VERCEL_GIT_COMMIT_REF || null,
  deploymentUrl: process.env.VERCEL_URL || null,
  expectedEmailEnvVars: RESEND_ENV_NAMES.map((name) => ({
    name,
    present: Boolean(process.env[name]?.trim()),
  })),
});

const getSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
  });
};

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST, OPTIONS");
    return response.status(405).json({ error: "Method not allowed" });
  }

  let payload = request.body ?? {};

  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return response.status(400).json({ error: "Invalid JSON body." });
    }
  }

  if (cleanText(payload?.website, 200)) {
    return response.status(202).json({ ok: true });
  }

  const resendApiKey = getResendApiKey();

  if (!resendApiKey) {
    return response.status(500).json({
      error: "Email delivery is not configured in this deployment.",
      diagnostics: getEnvDiagnostics(),
    });
  }

  const name = cleanText(payload?.name, 120);
  const email = cleanText(payload?.email, 180).toLowerCase();
  const phone = cleanOptional(payload?.phone, 80);
  const company = cleanOptional(payload?.company, 160);
  const projectType = cleanOptional(payload?.projectType, 160);
  const budgetRange = cleanOptional(payload?.budgetRange, 120);
  const message = cleanText(payload?.message, 4000);
  const advertSlug = cleanOptional(payload?.advertSlug, 120);
  const advertRole = cleanOptional(payload?.advertRole, 160);
  const sourcePath = cleanOptional(payload?.sourcePath, 300);
  const requestedContact = cleanText(payload?.preferredContact, 40) || "email";
  const preferredContact = VALID_CONTACT_METHODS.has(requestedContact) ? requestedContact : "email";

  if (!name || !isEmail(email) || !message) {
    return response.status(400).json({
      error: "Please provide your name, a valid email address, and a message.",
    });
  }

  try {
    const supabase = getSupabaseClient();
    let advert = null;

    if (advertSlug) {
      const { data, error } = await supabase
        .from("oldskoolvibe_developer_adverts")
        .select("id, role")
        .eq("slug", advertSlug)
        .eq("is_published", true)
        .maybeSingle();

      if (error) {
        throw error;
      }

      advert = data;
    }

    const enquiry = {
      advert_id: advert?.id ?? null,
      name,
      email,
      phone,
      company,
      project_type: projectType || advertRole || advert?.role || null,
      budget_range: budgetRange,
      preferred_contact: preferredContact,
      message,
      source_path: sourcePath,
      status: "new",
    };

    const { error: insertError } = await supabase
      .from("oldskoolvibe_service_enquiries")
      .insert(enquiry);

    if (insertError) {
      throw insertError;
    }

    const resend = new Resend(resendApiKey);
    const serviceLabel = enquiry.project_type || "General service request";
    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/London",
    });

    const { error: emailError } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Oldskoolvibe service request: ${serviceLabel}`,
      html: `
        <h1>New Oldskoolvibe service request</h1>
        ${formatLine("Submitted", submittedAt)}
        ${formatLine("Service", serviceLabel)}
        ${formatLine("Name", name)}
        ${formatLine("Email", email)}
        ${formatLine("Phone", phone)}
        ${formatLine("Company", company)}
        ${formatLine("Budget", budgetRange)}
        ${formatLine("Preferred contact", preferredContact.replace("_", " "))}
        ${formatLine("Source", sourcePath)}
        <h2>Message</h2>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
      text: [
        "New Oldskoolvibe service request",
        `Submitted: ${submittedAt}`,
        `Service: ${serviceLabel}`,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        company ? `Company: ${company}` : null,
        budgetRange ? `Budget: ${budgetRange}` : null,
        `Preferred contact: ${preferredContact.replace("_", " ")}`,
        sourcePath ? `Source: ${sourcePath}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (emailError) {
      return response.status(502).json({
        error: "Your request was saved, but the notification email could not be sent.",
      });
    }

    return response.status(201).json({ ok: true });
  } catch (error) {
    console.error("Service request submission failed", error);

    return response.status(500).json({
      error: "Sorry, your request could not be submitted right now.",
    });
  }
}

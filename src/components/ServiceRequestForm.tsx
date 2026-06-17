import { FormEvent, useState } from "react";
import type { Advert } from "../content/adverts";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  preferredContact: "email" | "phone" | "video_call";
  message: string;
  website: string;
};

type ServiceRequestFormProps = {
  advert?: Advert;
  title?: string;
  intro?: string;
};

const initialState = (advert?: Advert): FormState => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: advert?.role ?? "",
  budgetRange: "",
  preferredContact: "email",
  message: "",
  website: "",
});

export function ServiceRequestForm({ advert, title, intro }: ServiceRequestFormProps) {
  const [form, setForm] = useState<FormState>(() => initialState(advert));
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = <Field extends keyof FormState>(field: Field, value: FormState[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          advertSlug: advert?.slug,
          advertRole: advert?.role,
          sourcePath: window.location.pathname,
        }),
      });

      const body = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(body.error || "Your request could not be submitted.");
      }

      setStatus("success");
      setStatusMessage("Thanks, your request has been sent. John will reply as soon as possible.");
      setForm(initialState(advert));
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Your request could not be submitted.");
    }
  };

  return (
    <section className="section request-section" id="service-request">
      <div className="section-heading">
        <p className="eyebrow">Service request</p>
        <h2>{title ?? "Tell Oldskoolvibe what you want built."}</h2>
        <p>
          {intro ??
            "Share the basics and the request will be stored securely in Supabase and emailed to John for follow-up."}
        </p>
      </div>

      <form className="request-form" onSubmit={handleSubmit}>
        <label className="request-field">
          <span>Name</span>
          <input
            autoComplete="name"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            required
            type="text"
            value={form.name}
          />
        </label>

        <label className="request-field">
          <span>Email</span>
          <input
            autoComplete="email"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>

        <label className="request-field">
          <span>Phone</span>
          <input
            autoComplete="tel"
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            type="tel"
            value={form.phone}
          />
        </label>

        <label className="request-field">
          <span>Company or project name</span>
          <input
            autoComplete="organization"
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            type="text"
            value={form.company}
          />
        </label>

        <label className="request-field">
          <span>What do you need?</span>
          <input
            name="projectType"
            onChange={(event) => updateField("projectType", event.target.value)}
            placeholder="Website, app, API, database, SEO, UI/UX..."
            type="text"
            value={form.projectType}
          />
        </label>

        <label className="request-field">
          <span>Budget range</span>
          <select
            name="budgetRange"
            onChange={(event) => updateField("budgetRange", event.target.value)}
            value={form.budgetRange}
          >
            <option value="">Not sure yet</option>
            <option value="Under GBP 1,000">Under GBP 1,000</option>
            <option value="GBP 1,000 - GBP 3,000">GBP 1,000 - GBP 3,000</option>
            <option value="GBP 3,000 - GBP 7,500">GBP 3,000 - GBP 7,500</option>
            <option value="GBP 7,500+">GBP 7,500+</option>
          </select>
        </label>

        <label className="request-field">
          <span>Preferred contact</span>
          <select
            name="preferredContact"
            onChange={(event) =>
              updateField("preferredContact", event.target.value as FormState["preferredContact"])
            }
            value={form.preferredContact}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="video_call">Video call</option>
          </select>
        </label>

        <label className="request-field request-field-full">
          <span>Message</span>
          <textarea
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell me what you want, where you are starting from, and any useful links or deadlines."
            required
            rows={7}
            value={form.message}
          />
        </label>

        <label className="request-honeypot">
          <span>Website</span>
          <input
            autoComplete="off"
            name="website"
            onChange={(event) => updateField("website", event.target.value)}
            tabIndex={-1}
            type="text"
            value={form.website}
          />
        </label>

        <div className="request-submit">
          <button className="button button-primary" disabled={status === "submitting"} type="submit">
            {status === "submitting" ? "Sending request..." : "Send service request"}
          </button>
          {statusMessage ? (
            <p className={`request-status request-status-${status}`}>{statusMessage}</p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

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
  /** Autofill-resistant honeypot; bots may still fill it. */
  company_url_confirm: string;
};

type ServiceRequestFormProps = {
  advert?: Advert;
  title?: string;
  intro?: string;
  projectTypeHint?: string;
};

const initialState = (advert?: Advert, projectTypeHint?: string): FormState => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: advert?.role ?? projectTypeHint ?? "",
  budgetRange: "",
  preferredContact: "email",
  message: "",
  company_url_confirm: "",
});

export function ServiceRequestForm({
  advert,
  title,
  intro,
  projectTypeHint,
}: ServiceRequestFormProps) {
  const [form, setForm] = useState<FormState>(() => initialState(advert, projectTypeHint));
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
      setStatusMessage("Thanks — your request has been sent. We will reply as soon as possible.");
      setForm(initialState(advert, projectTypeHint));
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Your request could not be submitted.");
    }
  };

  return (
    <section className="section request-section" id="service-request">
      <div className="section-heading">
        <p className="eyebrow">Project enquiry</p>
        <h2>{title ?? "Tell us what you want built."}</h2>
        <p>
          {intro ??
            "Share the basics and we will follow up by email from info@oldskoolvibe.dev."}
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
            placeholder="Tell us what you want, where you are starting from, and any useful links or deadlines."
            required
            rows={7}
            value={form.message}
          />
        </label>

        <label className="request-honeypot" aria-hidden="true">
          <span>Company website</span>
          <input
            autoComplete="off"
            name="company_url_confirm"
            onChange={(event) => updateField("company_url_confirm", event.target.value)}
            tabIndex={-1}
            type="text"
            value={form.company_url_confirm}
          />
        </label>

        <div className="request-submit">
          <button className="button button-primary" disabled={status === "submitting"} type="submit">
            {status === "submitting" ? "Sending request..." : "Send project enquiry"}
          </button>
          {statusMessage ? (
            <p className={`request-status request-status-${status}`}>{statusMessage}</p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

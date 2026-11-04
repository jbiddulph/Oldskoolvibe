import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import { articles } from "../content/articles";

const frameworkPairs = [
  {
    title: "Nuxt or Next",
    summary:
      "Choose the meta-framework that fits your content, SEO, and shipping goals.",
    body: "Need server-rendered marketing pages, strong search visibility, and clean routing? We build with Nuxt when you want a Vue-first stack, or Next when you prefer React and the broader Next.js ecosystem. Both give you fast first loads, flexible data fetching, and production-ready foundations for blogs, product sites, dashboards, and lead-gen funnels.",
    points: [
      "SSR and static generation for discoverable pages",
      "App-ready layouts for product, content, and conversion flows",
      "API routes, middleware, and integrations when the project needs them",
    ],
    accent: "emerald",
  },
  {
    title: "Vue or React",
    summary:
      "Modern component UIs for marketing sites, portals, and interactive products.",
    body: "Whether your team already ships Vue or React, or you are starting fresh, we design and implement interfaces that feel clear, responsive, and maintainable. From landing pages and booking flows to admin tools and customer portals, we match the framework to your product roadmap rather than forcing a one-size stack.",
    points: [
      "Reusable component systems and design-consistent UI",
      "Accessible, mobile-first layouts that convert",
      "Clean handoff so your team can keep iterating",
    ],
    accent: "cyan",
  },
  {
    title: "Python or Laravel",
    summary:
      "Reliable backends, APIs, and business systems behind the frontend.",
    body: "When the work needs more than a brochure site, we deliver backends that hold up. Laravel is a strong fit for structured web apps, admin panels, auth, and PHP ecosystems. Python (Django or FastAPI) shines for APIs, automation, data workflows, and integrations. Either way, we wire PostgreSQL-backed data, forms, and business logic so the frontend has something solid to talk to.",
    points: [
      "APIs, authentication, forms, and third-party integrations",
      "PostgreSQL schemas, migrations, and reporting-friendly data",
      "Admin tools and automations that reduce manual work",
    ],
    accent: "red",
  },
];

const buildAnything = [
  {
    title: "Marketing websites & landing pages",
    detail:
      "Brand-led sites, service pages, campaign landers, and SEO-ready content structures that help people find and trust you.",
  },
  {
    title: "Web apps & customer portals",
    detail:
      "Dashboards, bookings, membership areas, and account experiences with clear UX and dependable data models.",
  },
  {
    title: "E-commerce & lead systems",
    detail:
      "Catalogue flows, checkout support, CRM-friendly enquiry forms, and integrations that turn visitors into conversations.",
  },
  {
    title: "Rebuilds, redesigns & handovers",
    detail:
      "Modernise an ageing stack, improve UI/UX, tighten performance, or take a half-finished idea and ship it properly.",
  },
];

export function WhatWeBuildPage() {
  useEffect(() => {
    document.title = "What We Build | OldSkoolVibe.dev";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "OldSkoolVibe.dev builds websites and web apps with Nuxt or Next, Vue or React, and Python or Laravel — at an affordable price.",
      );
    }
  }, []);

  return (
    <>
      <section className="hero agency-hero">
        <div className="hero-copy">
          <p className="eyebrow">Website development agency</p>
          <h1>We can build anything you require — at an affordable price.</h1>
          <p className="hero-intro">
            OldSkoolVibe.dev is a website development agency for businesses that
            need modern sites, apps, and digital products without agency bloat.
            Tell us what you want. We choose the right stack, shape the
            experience, and ship work that is practical, polished, and priced to
            make sense.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#service-request">
              Request a quote
            </a>
            <a className="button button-secondary" href="#frameworks">
              See our stack
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Affordable delivery promise">
          <span className="panel-kicker">Clear, affordable delivery</span>
          <p className="panel-copy">
            From a single landing page to a full product build, we scope around
            what you actually need — not a catalogue of extras. You get senior
            craft, modern frameworks, and honest pricing.
          </p>
          <div className="pill-grid">
            <span>Fixed-scope quotes</span>
            <span>Flexible retainers</span>
            <span>MVP to production</span>
            <span>Ongoing support</span>
          </div>
        </aside>
      </section>

      <section className="section" id="frameworks">
        <div className="section-heading">
          <p className="eyebrow">Latest frontend & full-stack frameworks</p>
          <h2>Nuxt or Next. Vue or React. Python or Laravel.</h2>
          <p className="section-intro">
            We work with the frameworks teams actually ship on today. Bring a
            preference, a legacy codebase, or a blank brief — we can build
            whatever our clients are looking for and explain the trade-offs in
            plain language.
          </p>
        </div>

        <div className="framework-grid">
          {frameworkPairs.map((pair) => (
            <article className={`framework-card accent-${pair.accent}`} key={pair.title}>
              <p className="eyebrow">{pair.title}</p>
              <h3>{pair.summary}</h3>
              <p>{pair.body}</p>
              <ul>
                {pair.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Whatever the brief</p>
          <h2>If a client can describe it, we can help build it.</h2>
          <p className="section-intro">
            Websites, web apps, backends, databases, UI/UX polish, technical SEO,
            integrations, and AI-assisted delivery — OldSkoolVibe.dev covers the
            full path from idea to launch.
          </p>
        </div>
        <div className="build-grid">
          {buildAnything.map((item) => (
            <article className="build-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="inline-actions">
          <Link className="button button-secondary" to="/">
            Back to the agency home
          </Link>
          <a className="button button-primary" href="#service-request">
            Start a project
          </a>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Affordable without cutting corners</p>
          <h2>Serious craft. Sensible budgets.</h2>
        </div>
        <div className="experience-list">
          <p>
            Many clients need a partner who can move quickly, choose the right
            tools, and keep costs proportional to the outcome. We keep proposals
            lean: clear milestones, transparent scope, and stacks that are
            maintainable after launch — whether that is Nuxt, Next, Vue, React,
            Python, Laravel, or a mix that fits the job.
          </p>
          <p>
            Share your goals, timeline, and budget range. We will recommend an
            approach that gets you live without unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Learn before you buy</p>
          <h2>Guides on AI, vibe coding, agents, MCPs, PRDs, skills, and loops.</h2>
        </div>
        <div className="related-grid">
          {articles.slice(0, 6).map((article) => (
            <Link
              className={`related-card accent-${article.accent}`}
              key={article.slug}
              to={`/articles/${article.slug}`}
            >
              <span>{article.eyebrow}</span>
              <strong>{article.title}</strong>
            </Link>
          ))}
        </div>
        <div className="inline-actions">
          <Link className="button button-secondary" to="/articles">
            Browse all articles
          </Link>
        </div>
      </section>

      <ServiceRequestForm
        title="Tell us what you need built."
        intro="Send a short brief and we will reply with next steps. Your message is emailed to our team from info@oldskoolvibe.dev."
      />
    </>
  );
}

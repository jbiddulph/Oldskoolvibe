import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import { adverts } from "../content/adverts";

const capabilityPillars = [
  "Frontend development",
  "Backend APIs",
  "PostgreSQL databases",
  "Supabase-ready schema design",
  "UI / UX refinement",
  "Technical SEO",
  "AI-assisted delivery",
];

export function HomePage() {
  useEffect(() => {
    document.title = "Oldskoolvibe | Developer Service Adverts";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Developer adverts for practical web delivery</p>
          <h1>
            Frontend, backend, PostgreSQL, UI/UX, SEO, and AI coding experience
            for modern web projects.
          </h1>
          <p className="hero-intro">
            Oldskoolvibe offers focused developer services across React, Vue,
            Nuxt, Laravel, Python, and AI-assisted vibe coding. Each advert page
            is shaped for customers who need clean interfaces, dependable
            backend logic, database fluency, and pages that can be found.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#service-request">
              Start a project
            </a>
            <a className="button button-secondary" href="#services">
              View services
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Core capabilities">
          <span className="panel-kicker">Oldskoolvibe stack</span>
          <div className="pill-grid">
            {capabilityPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Multiple advert pages</p>
          <h2>Choose the developer profile that matches your project.</h2>
        </div>
        <div className="advert-grid">
          {adverts.map((advert) => (
            <article className={`advert-card accent-${advert.accent}`} key={advert.slug}>
              <p className="eyebrow">{advert.eyebrow}</p>
              <h3>{advert.role}</h3>
              <p>{advert.metaDescription}</p>
              <ul>
                {advert.stack.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/services/${advert.slug}`}>
                Open {advert.role} advert
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Common experience across all adverts</p>
          <h2>Every service is positioned as more than code.</h2>
        </div>
        <div className="experience-list">
          <p>
            Each developer advert includes frontend and backend capability,
            PostgreSQL-first database experience, UI/UX awareness, and SEO
            fundamentals. The goal is to advertise delivery that can take a
            business idea from content and interface through to data-backed
            workflows.
          </p>
          <a className="button button-primary" href="#service-request">
            Discuss the right stack
          </a>
        </div>
      </section>

      <ServiceRequestForm />
    </>
  );
}

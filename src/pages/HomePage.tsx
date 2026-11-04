import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import { articles } from "../content/articles";
import { adverts } from "../content/adverts";
import { trendCategories } from "../content/trendCategories";

const agencyPillars = [
  "Website design & development",
  "Nuxt · Next · Vue · React",
  "Python · Laravel backends",
  "PostgreSQL & Supabase",
  "UI / UX & conversion",
  "Technical SEO",
  "Affordable project pricing",
];

export function HomePage() {
  useEffect(() => {
    document.title = "OldSkoolVibe.dev | Website Development Agency";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "OldSkoolVibe.dev is a website development agency building modern sites and apps with Nuxt, Next, Vue, React, Python, and Laravel at an affordable price.",
      );
    }
  }, []);

  return (
    <>
      <section className="hero agency-hero">
        <div className="hero-copy">
          <p className="eyebrow">OldSkoolVibe.dev</p>
          <h1>A website development agency for modern brands and products.</h1>
          <p className="hero-intro">
            We plan, design, and build websites and web applications that look
            sharp, load fast, and support real business goals. From marketing
            sites to full-stack products, we work with the latest frameworks —
            Nuxt or Next, Vue or React, Python or Laravel — and keep pricing
            affordable.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/what-we-build">
              What we can build
            </Link>
            <a className="button button-secondary" href="#service-request">
              Get a quote
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Agency capabilities">
          <span className="panel-kicker">Agency capabilities</span>
          <div className="pill-grid">
            {agencyPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Built around your brief</p>
          <h2>We can build whatever our clients are looking for.</h2>
          <p className="section-intro">
            Need a conversion-focused marketing site, a customer portal, an API,
            or a rebuild of something that has outgrown its current stack? Our
            team delivers frontend, backend, database, UI/UX, and SEO work as one
            coherent agency service.
          </p>
        </div>
        <div className="advert-grid">
          {adverts.map((advert) => (
            <article className={`advert-card accent-${advert.accent}`} key={advert.slug}>
              <p className="eyebrow">{advert.eyebrow}</p>
              <h3>{advert.role.replace(" Developer", "").replace(" with AI Experience", "")}</h3>
              <p>{advert.metaDescription.replace("advert", "capability").replace("Advert", "Capability")}</p>
              <ul>
                {advert.stack.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/services/${advert.slug}`}>
                Explore {advert.role.replace(" Developer", "")} work
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Why OldSkoolVibe.dev</p>
          <h2>Agency delivery without the inflated price tag.</h2>
        </div>
        <div className="experience-list">
          <p>
            Clients come to us when they want modern craft — clear interfaces,
            dependable backends, PostgreSQL-backed data, and pages that can be
            found — without a long enterprise process. We recommend the stack
            that fits the job, scope honestly, and ship at a price that respects
            your budget.
          </p>
          <Link className="button button-primary" to="/what-we-build">
            See frameworks & pricing approach
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Latest trends</p>
          <h2>Frontend, backend, and UI/UX trend hubs with multiple detailed pages.</h2>
          <p className="section-intro">
            Stay current with practical guides on interface engineering, APIs and
            data systems, and experience design — written to rank and to help
            buyers make clearer decisions.
          </p>
        </div>
        <div className="related-grid">
          {trendCategories.map((category) => (
            <Link
              className={`related-card accent-${category.accent}`}
              key={category.id}
              to={`/trends/${category.slug}`}
            >
              <span>{category.eyebrow}</span>
              <strong>{category.headline}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Guides for buyers and builders</p>
          <h2>SEO articles on AI, vibe coding, agents, MCPs, PRDs, skills, and loops.</h2>
          <p className="section-intro">
            Detailed pages designed to educate clients and earn search visibility —
            covering how modern agencies actually ship with AI-assisted workflows.
          </p>
        </div>
        <div className="article-index-grid home-article-grid">
          {articles.slice(0, 6).map((article) => (
            <article className={`article-index-card accent-${article.accent}`} key={article.slug}>
              <p className="eyebrow">{article.eyebrow}</p>
              <h3>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.description}</p>
              <Link className="text-link" to={`/articles/${article.slug}`}>
                Read article
              </Link>
            </article>
          ))}
        </div>
        <div className="inline-actions">
          <Link className="button button-secondary" to="/trends">
            Browse all trends
          </Link>
          <Link className="button button-secondary" to="/articles">
            Browse all articles
          </Link>
        </div>
      </section>

      <ServiceRequestForm
        title="Start a conversation with OldSkoolVibe.dev."
        intro="Share what you need built. We will follow up from info@oldskoolvibe.dev."
      />
    </>
  );
}

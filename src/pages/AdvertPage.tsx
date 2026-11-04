import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import { adverts, getAdvertBySlug } from "../content/adverts";

function updateMetaDescription(content: string) {
  const selector = 'meta[name="description"]';
  const meta = document.querySelector<HTMLMetaElement>(selector);

  if (meta) {
    meta.content = content;
    return;
  }

  const newMeta = document.createElement("meta");
  newMeta.name = "description";
  newMeta.content = content;
  document.head.appendChild(newMeta);
}

export function AdvertPage() {
  const { slug } = useParams();
  const advert = getAdvertBySlug(slug);

  useEffect(() => {
    if (!advert) {
      document.title = "Capability not found | OldSkoolVibe.dev";
      return;
    }

    document.title = `${advert.role} | OldSkoolVibe.dev`;
    updateMetaDescription(advert.metaDescription);
  }, [advert]);

  if (!advert) {
    return (
      <section className="section not-found">
        <p className="eyebrow">Capability not found</p>
        <h1>That service page is not available.</h1>
        <Link className="button button-primary" to="/what-we-build">
          See what we build
        </Link>
      </section>
    );
  }

  const relatedAdverts = adverts.filter((item) => item.slug !== advert.slug).slice(0, 3);
  const shortRole = advert.role.replace(" Developer", "").replace(" with AI Experience", "");

  return (
    <>
      <section className={`advert-hero accent-${advert.accent}`}>
        <div>
          <p className="eyebrow">{advert.eyebrow}</p>
          <h1>{advert.headline}</h1>
          <p className="hero-intro">{advert.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#service-request">
              Enquire about {shortRole}
            </a>
            <a className="button button-secondary" href="#deliverables">
              View deliverables
            </a>
          </div>
        </div>
        <aside className="stack-card" aria-label={`${advert.role} technology stack`}>
          <span className="panel-kicker">Core stack</span>
          <div className="stack-list">
            {advert.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="section two-column">
        <div>
          <p className="eyebrow">Agency capability</p>
          <h2>Full-stack delivery with PostgreSQL, UI/UX, and SEO included.</h2>
        </div>
        <div className="proof-list">
          {advert.proofPoints.map((point) => (
            <div className="proof-item" key={point}>
              <span aria-hidden="true">+</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="deliverables">
        <div className="section-heading">
          <p className="eyebrow">Service details</p>
          <h2>What our {shortRole.toLowerCase()} work typically includes.</h2>
        </div>
        <div className="detail-grid">
          <article className="detail-card">
            <h3>Highlights</h3>
            <ul>
              {advert.serviceHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <h3>Deliverables</h3>
            <ul>
              {advert.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <h3>Outcomes</h3>
            <ul>
              {advert.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section seo-panel">
        <div>
          <p className="eyebrow">SEO themes</p>
          <h2>Search phrases this capability supports.</h2>
        </div>
        <div className="pill-grid">
          {advert.seoKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <ServiceRequestForm
        advert={advert}
        key={advert.slug}
        title={`Request ${shortRole.toLowerCase()} help from OldSkoolVibe.dev.`}
        intro="Tell us about your project. We will email follow-up from info@oldskoolvibe.dev."
      />

      <section className="section related-section">
        <div className="section-heading">
          <p className="eyebrow">Related capabilities</p>
          <h2>Explore more of what the agency can build.</h2>
        </div>
        <div className="related-grid">
          {relatedAdverts.map((related) => (
            <Link
              className={`related-card accent-${related.accent}`}
              key={related.slug}
              to={`/services/${related.slug}`}
            >
              <span>{related.role.replace(" Developer", "").replace(" with AI Experience", "")}</span>
              <strong>{related.eyebrow}</strong>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

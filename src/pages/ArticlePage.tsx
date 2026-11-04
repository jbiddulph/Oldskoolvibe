import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "../content/articles";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(new Date(`${value}T12:00:00Z`));
}

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

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (!article) {
      document.title = "Article not found | OldSkoolVibe.dev";
      return;
    }

    document.title = `${article.title} | OldSkoolVibe.dev`;
    updateMetaDescription(article.metaDescription);

    upsertJsonLd("osv-article-jsonld", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        "@type": "Organization",
        name: "OldSkoolVibe.dev",
        url: "https://www.oldskoolvibe.dev",
      },
      publisher: {
        "@type": "Organization",
        name: "OldSkoolVibe.dev",
        url: "https://www.oldskoolvibe.dev",
      },
      mainEntityOfPage: `https://www.oldskoolvibe.dev/articles/${article.slug}`,
      keywords: article.keywords.join(", "),
    });

    return () => {
      document.getElementById("osv-article-jsonld")?.remove();
    };
  }, [article]);

  if (!article) {
    return (
      <section className="section not-found">
        <p className="eyebrow">Article not found</p>
        <h1>That article is not available.</h1>
        <Link className="button button-primary" to="/articles">
          Browse all articles
        </Link>
      </section>
    );
  }

  const related = getRelatedArticles(article.slug);

  return (
    <>
      <article>
        <header className={`advert-hero accent-${article.accent}`}>
          <div>
            <p className="eyebrow">{article.eyebrow}</p>
            <h1>{article.title}</h1>
            <p className="hero-intro">{article.heroIntro}</p>
            <div className="article-meta hero-meta">
              <span>Updated {formatDate(article.updatedAt)}</span>
              <span>{article.readingMinutes} min read</span>
              {article.category === "frontend" ||
              article.category === "backend" ||
              article.category === "ui-ux" ? (
                <Link to={`/trends/${article.category}`}>
                  {article.category === "ui-ux" ? "UI/UX" : article.category} trends hub
                </Link>
              ) : null}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#service-request">
                {article.ctaLabel}
              </a>
              <Link className="button button-secondary" to="/articles">
                All articles
              </Link>
            </div>
          </div>
          <aside className="stack-card" aria-label="Article keywords">
            <span className="panel-kicker">SEO themes</span>
            <div className="stack-list">
              {article.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </aside>
        </header>

        <section className="section article-body">
          {article.sections.map((section) => (
            <section className="article-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions about this topic.</h2>
          </div>
          <div className="faq-list">
            {article.faqs.map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="section related-section">
        <div className="section-heading">
          <p className="eyebrow">Keep reading</p>
          <h2>Related OldSkoolVibe.dev articles.</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link
              className={`related-card accent-${item.accent}`}
              key={item.slug}
              to={`/articles/${item.slug}`}
            >
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <ServiceRequestForm
        title={article.ctaLabel}
        intro="Tell us what you need built. We reply from info@oldskoolvibe.dev."
        projectTypeHint={article.eyebrow}
      />
    </>
  );
}

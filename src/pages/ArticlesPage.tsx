import { useEffect } from "react";
import { Link } from "react-router-dom";
import { articles } from "../content/articles";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(new Date(`${value}T12:00:00Z`));
}

export function ArticlesPage() {
  useEffect(() => {
    document.title = "Articles | OldSkoolVibe.dev Website Development Agency";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "SEO articles from OldSkoolVibe.dev on AI website development, vibe coding, agents, MCPs, PRDs, skills, delivery loops, Nuxt, Next, Vue, React, Python, and Laravel.",
      );
    }
  }, []);

  return (
    <>
      <section className="hero agency-hero">
        <div className="hero-copy">
          <p className="eyebrow">OldSkoolVibe.dev journal</p>
          <h1>Articles on AI-era website development.</h1>
          <p className="hero-intro">
            Practical guides for businesses and teams buying modern web work —
            from vibe coding and AI agents to PRDs, skills, loops, and choosing
            between Nuxt, Next, Vue, React, Python, and Laravel.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/what-we-build#service-request">
              Start a project
            </Link>
            <Link className="button button-secondary" to="/what-we-build">
              What we build
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Article topics">
          <span className="panel-kicker">Indexed topics</span>
          <div className="pill-grid">
            <span>AI web development</span>
            <span>Vibe coding</span>
            <span>Agents &amp; MCPs</span>
            <span>PRDs</span>
            <span>Skills</span>
            <span>Delivery loops</span>
            <span>Framework guides</span>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{articles.length} long-form guides</p>
          <h2>SEO-ready reading for clients who want clarity before they buy.</h2>
        </div>
        <div className="article-index-grid">
          {articles.map((article) => (
            <article className={`article-index-card accent-${article.accent}`} key={article.slug}>
              <p className="eyebrow">{article.eyebrow}</p>
              <h3>
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.description}</p>
              <div className="article-meta">
                <span>{formatDate(article.updatedAt)}</span>
                <span>{article.readingMinutes} min read</span>
              </div>
              <div className="pill-grid compact-pills">
                {article.keywords.slice(0, 3).map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
              <Link className="text-link" to={`/articles/${article.slug}`}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

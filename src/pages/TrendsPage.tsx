import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticlesByCategory } from "../content/articles";
import { trendCategories } from "../content/trendCategories";

export function TrendsPage() {
  useEffect(() => {
    document.title = "Latest Development Trends | OldSkoolVibe.dev";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Latest frontend, backend, and UI/UX development trends from OldSkoolVibe.dev — practical guides for modern website and app teams.",
      );
    }
  }, []);

  return (
    <>
      <section className="hero agency-hero">
        <div className="hero-copy">
          <p className="eyebrow">Trends journal</p>
          <h1>Latest trends in frontend, backend, and UI/UX.</h1>
          <p className="hero-intro">
            Multiple SEO-ready guides covering what is changing in interface
            engineering, server-side systems, and experience design — written for
            businesses choosing a modern website development partner.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/articles">
              All articles
            </Link>
            <Link className="button button-secondary" to="/what-we-build#service-request">
              Start a project
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Trend categories">
          <span className="panel-kicker">Trend hubs</span>
          <div className="pill-grid">
            {trendCategories.map((category) => (
              <span key={category.id}>{category.title}</span>
            ))}
          </div>
        </aside>
      </section>

      {trendCategories.map((category) => {
        const categoryArticles = getArticlesByCategory(category.id);

        return (
          <section className="section" key={category.id} id={category.slug}>
            <div className="section-heading">
              <p className="eyebrow">{category.eyebrow}</p>
              <h2>{category.headline}</h2>
              <p className="section-intro">{category.description}</p>
            </div>
            <div className="pill-grid compact-pills" style={{ marginBottom: 24 }}>
              {category.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
            <div className="article-index-grid">
              {categoryArticles.map((article) => (
                <article
                  className={`article-index-card accent-${article.accent}`}
                  key={article.slug}
                >
                  <p className="eyebrow">{article.eyebrow}</p>
                  <h3>
                    <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.description}</p>
                  <Link className="text-link" to={`/articles/${article.slug}`}>
                    Read trend article
                  </Link>
                </article>
              ))}
            </div>
            <div className="inline-actions">
              <Link className="button button-secondary" to={`/trends/${category.slug}`}>
                Open {category.title.toLowerCase()} hub
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
}

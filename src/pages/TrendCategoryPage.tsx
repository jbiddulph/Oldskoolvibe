import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ServiceRequestForm } from "../components/ServiceRequestForm";
import { getArticlesByCategory } from "../content/articles";
import { getTrendCategoryBySlug, trendCategories } from "../content/trendCategories";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(new Date(`${value}T12:00:00Z`));
}

export function TrendCategoryPage() {
  const { categorySlug } = useParams();
  const category = getTrendCategoryBySlug(categorySlug);

  useEffect(() => {
    if (!category) {
      document.title = "Trend category not found | OldSkoolVibe.dev";
      return;
    }

    document.title = `${category.title} | OldSkoolVibe.dev`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", category.metaDescription);
    }
  }, [category]);

  if (!category) {
    return (
      <section className="section not-found">
        <p className="eyebrow">Trends</p>
        <h1>That trend category is not available.</h1>
        <Link className="button button-primary" to="/trends">
          Browse all trends
        </Link>
      </section>
    );
  }

  const categoryArticles = getArticlesByCategory(category.id);
  const otherCategories = trendCategories.filter((item) => item.id !== category.id);

  return (
    <>
      <section className={`hero agency-hero accent-${category.accent}`}>
        <div className="hero-copy">
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.headline}</h1>
          <p className="hero-intro">{category.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#trend-articles">
              Browse {categoryArticles.length} articles
            </a>
            <Link className="button button-secondary" to="/trends">
              All trend hubs
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label={`${category.title} topics`}>
          <span className="panel-kicker">Covered topics</span>
          <div className="pill-grid">
            {category.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="trend-articles">
        <div className="section-heading">
          <p className="eyebrow">{categoryArticles.length} detailed pages</p>
          <h2>Latest {category.title.toLowerCase()} for teams shipping now.</h2>
        </div>
        <div className="article-index-grid">
          {categoryArticles.map((article) => (
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

      <section className="section related-section">
        <div className="section-heading">
          <p className="eyebrow">More trend hubs</p>
          <h2>Explore related development trend categories.</h2>
        </div>
        <div className="related-grid">
          {otherCategories.map((item) => (
            <Link
              className={`related-card accent-${item.accent}`}
              key={item.id}
              to={`/trends/${item.slug}`}
            >
              <span>{item.eyebrow}</span>
              <strong>{item.headline}</strong>
            </Link>
          ))}
        </div>
      </section>

      <ServiceRequestForm
        title={`Build with current ${category.title.toLowerCase()} in mind.`}
        intro="Tell us what you need. We reply from info@oldskoolvibe.dev."
        projectTypeHint={category.title}
      />
    </>
  );
}

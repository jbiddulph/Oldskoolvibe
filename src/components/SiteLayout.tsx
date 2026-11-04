import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { articles } from "../content/articles";
import { adverts } from "../content/adverts";
import { trendCategories } from "../content/trendCategories";
import { NavDropdown } from "./NavDropdown";

type SiteLayoutProps = {
  children: ReactNode;
};

const primaryNav = [
  { to: "/", label: "Home", end: true },
  { to: "/what-we-build", label: "What we build", end: false },
  { to: "/trends", label: "Trends", end: false },
  { to: "/articles", label: "Articles", end: false },
];

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="OldSkoolVibe.dev home">
          <span className="brand-mark">OSV</span>
          <span>
            <strong>OldSkoolVibe.dev</strong>
            <small>Website development agency</small>
          </span>
        </NavLink>
        <nav className="site-nav" aria-label="Agency navigation">
          {primaryNav.map((item) => (
            <div key={item.to} className="site-nav-item">
              <NavLink end={item.end} to={item.to}>
                {item.label}
              </NavLink>
            </div>
          ))}
          <div className="site-nav-item">
            <NavLink to="/what-we-build#service-request">Contact</NavLink>
          </div>
          <NavDropdown ariaLabel="Capability pages" label="Capabilities">
            {adverts.map((advert) => (
              <NavLink key={advert.slug} role="menuitem" to={`/services/${advert.slug}`}>
                {advert.role.replace(" Developer", "").replace(" with AI Experience", "")}
              </NavLink>
            ))}
          </NavDropdown>
          <NavDropdown ariaLabel="Trend categories" label="Trend hubs">
            {trendCategories.map((category) => (
              <NavLink key={category.id} role="menuitem" to={`/trends/${category.slug}`}>
                {category.title}
              </NavLink>
            ))}
            <NavLink role="menuitem" to="/trends">
              All trends
            </NavLink>
          </NavDropdown>
          <NavDropdown ariaLabel="Article guides" label="Guides">
            {articles.slice(0, 6).map((article) => (
              <NavLink key={article.slug} role="menuitem" to={`/articles/${article.slug}`}>
                {article.eyebrow}
              </NavLink>
            ))}
            <NavLink role="menuitem" to="/articles">
              All articles
            </NavLink>
          </NavDropdown>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-copy">
          <p>
            OldSkoolVibe.dev — website development with Nuxt, Next, Vue, React,
            Python, and Laravel at an affordable price.
          </p>
          <div className="footer-links">
            <a href="/what-we-build">What we build</a>
            <a href="/trends">Trends</a>
            <a href="/trends/frontend">Frontend trends</a>
            <a href="/trends/backend">Backend trends</a>
            <a href="/trends/ui-ux">UI/UX trends</a>
            <a href="/articles">Articles</a>
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/what-we-build#service-request">Request a quote</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

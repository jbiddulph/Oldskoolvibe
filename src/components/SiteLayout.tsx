import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { articles } from "../content/articles";
import { adverts } from "../content/adverts";
import { trendCategories } from "../content/trendCategories";
import { NavDropdown } from "./NavDropdown";

type SiteLayoutProps = {
  children: ReactNode;
};

type OpenMenu = "capabilities" | "trends" | "guides" | null;

const primaryNav = [
  { to: "/", label: "Home", end: true },
  { to: "/what-we-build", label: "What we build", end: false },
  { to: "/trends", label: "Trends", end: false },
  { to: "/articles", label: "Articles", end: false },
];

const capabilityItems = adverts.map((advert) => ({
  to: `/services/${advert.slug}`,
  label: advert.role
    .replace(" Developer", "")
    .replace(" with AI Experience", ""),
}));

const trendItems = [
  ...trendCategories.map((category) => ({
    to: `/trends/${category.slug}`,
    label: category.title,
  })),
  { to: "/trends", label: "All trends" },
];

const guideItems = [
  ...articles.slice(0, 6).map((article) => ({
    to: `/articles/${article.slug}`,
    label: article.eyebrow,
  })),
  { to: "/articles", label: "All articles" },
];

export function SiteLayout({ children }: SiteLayoutProps) {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);

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
          <NavDropdown
            label="Capabilities"
            menuLabel="Capability pages"
            items={capabilityItems}
            open={openMenu === "capabilities"}
            onOpenChange={(open) => setOpenMenu(open ? "capabilities" : null)}
          />
          <NavDropdown
            label="Trend hubs"
            menuLabel="Trend categories"
            items={trendItems}
            open={openMenu === "trends"}
            onOpenChange={(open) => setOpenMenu(open ? "trends" : null)}
          />
          <NavDropdown
            label="Guides"
            menuLabel="Article guides"
            items={guideItems}
            open={openMenu === "guides"}
            onOpenChange={(open) => setOpenMenu(open ? "guides" : null)}
          />
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

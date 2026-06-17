import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { adverts } from "../content/adverts";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Oldskoolvibe home">
          <span className="brand-mark">OSV</span>
          <span>
            <strong>Oldskoolvibe</strong>
            <small>Developer services</small>
          </span>
        </NavLink>
        <nav className="site-nav" aria-label="Developer service adverts">
          {adverts.map((advert) => (
            <NavLink key={advert.slug} to={`/services/${advert.slug}`}>
              {advert.role.replace(" Developer", "")}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          React, Vue, Nuxt, Laravel, Python, AI-assisted delivery, PostgreSQL,
          UI/UX, and SEO services.
        </p>
        <a href="/#service-request">Send a service request</a>
      </footer>
    </div>
  );
}

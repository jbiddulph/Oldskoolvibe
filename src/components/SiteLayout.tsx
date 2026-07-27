import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { adverts } from "../content/adverts";
import { resolveSubNavLabel, useUserLocation } from "../hooks/useUserLocation";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const location = useUserLocation();

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
          {adverts.map((advert) => {
            const href = `/services/${advert.slug}`;
            const label = advert.role.replace(" Developer", "");
            const subLabel = resolveSubNavLabel(advert.subNavLabel, location);

            return (
              <div key={advert.slug} className="site-nav-item">
                <NavLink to={href}>{label}</NavLink>
                <div className="site-nav-submenu" role="group" aria-label={`${label} links`}>
                  <NavLink to={href}>{subLabel}</NavLink>
                </div>
              </div>
            );
          })}
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

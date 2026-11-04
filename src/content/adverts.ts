export type Advert = {
  slug: string;
  role: string;
  /** Submenu label; use `{location}` for the visitor's area (defaults to Brighton Sussex). */
  subNavLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  metaDescription: string;
  stack: string[];
  proofPoints: string[];
  serviceHighlights: string[];
  deliverables: string[];
  outcomes: string[];
  seoKeywords: string[];
  accent: string;
};

const sharedFullStackExperience = [
  "Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.",
  "Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.",
  "Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.",
  "UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.",
  "Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.",
];

export const adverts: Advert[] = [
  {
    slug: "react-developer",
    role: "React Developer",
    subNavLabel: "React Websites in {location}",
    eyebrow: "Modern frontend and full-stack React delivery",
    headline: "React and Next.js websites built for speed, polish, and SEO.",
    intro:
      "OldSkoolVibe.dev builds React and Next interfaces that feel sharp, load quickly, and connect cleanly to real business workflows. From landing pages to dashboards, our agency covers frontend craft, backend APIs, PostgreSQL-backed data, UI/UX, and discoverable content.",
    metaDescription:
      "React and Next.js website development from OldSkoolVibe.dev: frontend, backend, PostgreSQL, Supabase, UI/UX, SEO, and conversion-focused web apps.",
    stack: ["React", "Next.js", "TypeScript", "Vite", "Supabase", "PostgreSQL"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Reusable React component libraries and design systems",
      "Single-page apps, dashboards, portals, and landing pages",
      "Supabase and PostgreSQL integrations with secure data access",
      "Performance tuning, Core Web Vitals, and SEO-friendly page structure",
    ],
    deliverables: [
      "React app architecture",
      "Responsive UI implementation",
      "API and database integration",
      "SEO metadata and launch checklist",
    ],
    outcomes: [
      "A modern interface customers can trust",
      "Cleaner developer handover and maintainability",
      "Fast iteration from idea to production-ready pages",
    ],
    seoKeywords: ["React developer", "frontend developer", "React PostgreSQL developer", "React SEO"],
    accent: "cyan",
  },
  {
    slug: "vue-developer",
    role: "Vue Developer",
    subNavLabel: "Vue Websites in {location}",
    eyebrow: "Vue applications with practical full-stack experience",
    headline: "Vue websites and apps with elegant interfaces and dependable data flows.",
    intro:
      "OldSkoolVibe.dev creates Vue experiences that balance clean interaction design with production-ready engineering. Our agency covers frontend builds, backend connections, PostgreSQL data models, UI/UX improvements, and SEO essentials.",
    metaDescription:
      "Vue website development from OldSkoolVibe.dev: Vue UI builds, backend services, PostgreSQL databases, Supabase, UI/UX, and SEO support.",
    stack: ["Vue", "TypeScript", "Pinia", "Supabase", "PostgreSQL", "API integrations"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Vue components, state management, and reusable interface patterns",
      "Customer portals, booking flows, dashboards, and marketing pages",
      "PostgreSQL schemas and Supabase-ready data access",
      "SEO-friendly content layouts and fast-loading UI",
    ],
    deliverables: [
      "Vue page and component builds",
      "Frontend state and routing setup",
      "Backend and database integration",
      "UX and SEO improvement plan",
    ],
    outcomes: [
      "Smooth user journeys across devices",
      "Maintainable Vue code for ongoing growth",
      "Better visibility and clearer conversion paths",
    ],
    seoKeywords: ["Vue developer", "Vue.js developer", "Vue PostgreSQL developer", "Vue UI UX"],
    accent: "green",
  },
  {
    slug: "nuxt-developer",
    role: "Nuxt Developer",
    subNavLabel: "Nuxt Websites in {location}",
    eyebrow: "SEO-led Nuxt sites and applications",
    headline: "Nuxt websites for content-rich, high-performing web experiences.",
    intro:
      "OldSkoolVibe.dev uses Nuxt where SEO, performance, routing, and content structure matter. Our agency delivers SSR-ready pages, API-backed features, PostgreSQL storage, Supabase integrations, UI/UX refinement, and conversion-led service pages.",
    metaDescription:
      "Nuxt website development from OldSkoolVibe.dev for SSR, SEO, PostgreSQL, Supabase, UI/UX, backend integrations, and high-performing web apps.",
    stack: ["Nuxt", "Vue", "TypeScript", "Supabase", "PostgreSQL", "Server routes"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Nuxt landing pages, service pages, and content architectures",
      "Server-rendered routes for stronger SEO and shareability",
      "Database-backed content and lead capture with PostgreSQL",
      "UI/UX audits that improve clarity, trust, and conversion",
    ],
    deliverables: [
      "Nuxt route and layout architecture",
      "SEO-ready page templates",
      "Supabase and PostgreSQL setup guidance",
      "Performance and launch checks",
    ],
    outcomes: [
      "Pages that are easier to crawl and promote",
      "A scalable foundation for content marketing",
      "Integrated lead capture and structured service data",
    ],
    seoKeywords: ["Nuxt developer", "Nuxt SEO developer", "Nuxt PostgreSQL", "Nuxt UI UX"],
    accent: "emerald",
  },
  {
    slug: "laravel-developer",
    role: "Laravel Developer",
    subNavLabel: "Laravel applications in {location}",
    eyebrow: "Laravel backends, admin tools, and full-stack builds",
    headline: "Laravel backends, admin tools, and full-stack business systems.",
    intro:
      "OldSkoolVibe.dev delivers Laravel features with a practical eye for backend reliability and frontend usability. Our agency builds APIs, admin panels, PostgreSQL databases, integrations, UI/UX polish, and technical SEO for public-facing pages.",
    metaDescription:
      "Laravel website and app development from OldSkoolVibe.dev: APIs, backend systems, PostgreSQL databases, frontend UI/UX, SEO, and full-stack delivery.",
    stack: ["Laravel", "PHP", "Blade", "Inertia", "PostgreSQL", "Queues"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Laravel APIs, admin panels, dashboards, and internal tools",
      "Authentication, roles, payments, forms, and third-party integrations",
      "PostgreSQL schema design, migrations, and query optimisation",
      "Frontend polish with SEO-ready landing and service pages",
    ],
    deliverables: [
      "Laravel feature implementation",
      "Database migrations and models",
      "Admin workflows and backend APIs",
      "Frontend templates and SEO metadata",
    ],
    outcomes: [
      "Reliable backend foundations",
      "Clear admin workflows for teams",
      "Better customer journeys from landing page to enquiry",
    ],
    seoKeywords: ["Laravel developer", "PHP developer", "Laravel PostgreSQL", "Laravel backend developer"],
    accent: "red",
  },
  {
    slug: "python-developer",
    role: "Python Developer",
    subNavLabel: "Python web applications and scripts in {location}",
    eyebrow: "Python automation, APIs, and data-backed products",
    headline: "Python APIs, automation, and scalable web features for growing products.",
    intro:
      "OldSkoolVibe.dev builds Python services that remove manual work, integrate systems, and support data-rich products. Our agency delivers backend APIs, PostgreSQL databases, Supabase-aware workflows, frontend collaboration, UI/UX thinking, and SEO for public interfaces.",
    metaDescription:
      "Python website backend development from OldSkoolVibe.dev: automation, APIs, PostgreSQL, Supabase, full-stack support, UI/UX, and SEO-focused web delivery.",
    stack: ["Python", "FastAPI", "Django", "PostgreSQL", "Supabase", "Automation"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Python APIs, automations, scripts, workers, and integrations",
      "Django or FastAPI services connected to PostgreSQL",
      "Data processing, reporting, and operational tooling",
      "Frontend handoff, UI/UX support, and SEO-ready content pages",
    ],
    deliverables: [
      "Python service or automation build",
      "API endpoints and integration logic",
      "PostgreSQL data model and queries",
      "Documentation and launch support",
    ],
    outcomes: [
      "Less repetitive manual work",
      "More reliable data handling",
      "Backend features that connect cleanly to customer-facing UI",
    ],
    seoKeywords: ["Python developer", "Python automation", "Python PostgreSQL", "FastAPI developer"],
    accent: "yellow",
  },
  {
    slug: "vibe-coder-ai-experience",
    role: "Vibe Coder with AI Experience",
    subNavLabel: "Vibe coding with AI in {location}",
    eyebrow: "AI-assisted product builds with senior engineering judgement",
    headline: "AI-assisted vibe coding that turns ideas into shipped websites and apps.",
    intro:
      "OldSkoolVibe.dev combines fast AI-assisted delivery with practical full-stack engineering. Our agency helps shape rough ideas, prototype quickly, connect PostgreSQL-backed data, refine UI/UX, and build SEO-ready pages without losing maintainability.",
    metaDescription:
      "AI vibe coding and agent-assisted website development from OldSkoolVibe.dev across React, Next, Vue, Nuxt, Laravel, Python, PostgreSQL, Supabase, UI/UX, and SEO.",
    stack: ["AI agents", "MCPs", "React", "Next.js", "Vue", "Nuxt", "Laravel", "Python"],
    proofPoints: sharedFullStackExperience,
    serviceHighlights: [
      "Rapid prototyping from notes, voice, sketches, or rough requirements",
      "AI-assisted code generation reviewed through real engineering standards",
      "Full-stack builds across frontend, backend, Supabase, and PostgreSQL",
      "Content, UI/UX, and SEO support for launch-ready adverts and pages",
    ],
    deliverables: [
      "Prototype or MVP implementation",
      "AI-assisted code review and hardening",
      "Database-backed feature setup",
      "SEO-ready launch pages and conversion copy",
    ],
    outcomes: [
      "Faster movement from concept to working software",
      "A practical bridge between creative direction and engineering",
      "Maintainable output instead of throwaway AI experiments",
    ],
    seoKeywords: ["vibe coder", "AI developer", "AI coding experience", "PostgreSQL full-stack developer"],
    accent: "purple",
  },
];

export const getAdvertBySlug = (slug: string | undefined) =>
  adverts.find((advert) => advert.slug === slug);

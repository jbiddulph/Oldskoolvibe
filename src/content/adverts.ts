export type Advert = {
  slug: string;
  role: string;
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
    eyebrow: "Modern frontend and full-stack React delivery",
    headline: "Hire a React developer for fast, polished, SEO-aware web apps.",
    intro:
      "Oldskoolvibe builds React interfaces that feel sharp, load quickly, and connect cleanly to real business workflows. From landing pages to dashboards, the work covers frontend craft, backend APIs, PostgreSQL-backed data, UI/UX, and discoverable content.",
    metaDescription:
      "React developer advert for Oldskoolvibe: frontend, backend, PostgreSQL, Supabase, UI/UX, SEO, and conversion-focused React apps.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "REST APIs"],
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
    eyebrow: "Vue applications with practical full-stack experience",
    headline: "Hire a Vue developer for elegant interfaces and dependable data flows.",
    intro:
      "Oldskoolvibe creates Vue experiences that balance clean interaction design with production-ready engineering. The service covers frontend builds, backend connections, PostgreSQL data models, UI/UX improvements, and SEO essentials.",
    metaDescription:
      "Vue developer advert covering Vue UI builds, backend services, PostgreSQL databases, Supabase, UI/UX, and SEO support.",
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
    eyebrow: "SEO-led Nuxt sites and applications",
    headline: "Hire a Nuxt developer for content-rich, high-performing web experiences.",
    intro:
      "Oldskoolvibe uses Nuxt where SEO, performance, routing, and content structure matter. The work can span SSR-ready pages, API-backed features, PostgreSQL storage, Supabase integrations, UI/UX refinement, and conversion-led advert pages.",
    metaDescription:
      "Nuxt developer advert for SSR, SEO, PostgreSQL, Supabase, UI/UX, backend integrations, and high-performing web apps.",
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
    eyebrow: "Laravel backends, admin tools, and full-stack builds",
    headline: "Hire a Laravel developer for robust web apps and business systems.",
    intro:
      "Oldskoolvibe delivers Laravel features with a practical eye for backend reliability and frontend usability. Services include APIs, admin panels, PostgreSQL databases, integrations, UI/UX polish, and technical SEO for public-facing pages.",
    metaDescription:
      "Laravel developer advert for APIs, backend systems, PostgreSQL databases, frontend UI/UX, SEO, and full-stack delivery.",
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
    eyebrow: "Python automation, APIs, and data-backed products",
    headline: "Hire a Python developer for practical automation and scalable web features.",
    intro:
      "Oldskoolvibe builds Python services that remove manual work, integrate systems, and support data-rich products. The offer includes backend APIs, PostgreSQL databases, Supabase-aware workflows, frontend collaboration, UI/UX thinking, and SEO for public interfaces.",
    metaDescription:
      "Python developer advert for automation, APIs, PostgreSQL, Supabase, full-stack support, UI/UX, and SEO-focused web delivery.",
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
    eyebrow: "AI-assisted product builds with senior engineering judgement",
    headline: "Hire a vibe coder with AI experience to turn ideas into shipped product pages and apps.",
    intro:
      "Oldskoolvibe combines fast AI-assisted delivery with practical full-stack engineering. The service helps shape rough ideas, prototype quickly, connect PostgreSQL-backed data, refine UI/UX, and build SEO-ready pages without losing maintainability.",
    metaDescription:
      "Vibe coder with AI experience advert for AI-assisted development, React, Vue, Laravel, Python, PostgreSQL, Supabase, UI/UX, and SEO.",
    stack: ["AI coding tools", "React", "Vue", "Laravel", "Python", "PostgreSQL"],
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

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  keywords: string[];
  accent: string;
  heroIntro: string;
  sections: ArticleSection[];
  faqs: Array<{ question: string; answer: string }>;
  ctaLabel: string;
};

export const articles: Article[] = [
  {
    slug: "website-development-with-ai",
    title: "Website development with AI: how modern agencies ship faster without cutting quality",
    eyebrow: "AI web development",
    description:
      "How OldSkoolVibe.dev uses AI across discovery, design, code, QA, and launch to build affordable websites and apps.",
    metaDescription:
      "Learn how AI-assisted website development works in practice: faster builds, better briefs, cleaner code reviews, and affordable agency delivery with Nuxt, Next, Vue, React, Python, and Laravel.",
    publishedAt: "2026-10-12",
    updatedAt: "2026-11-04",
    readingMinutes: 11,
    keywords: [
      "AI website development",
      "AI web agency",
      "AI assisted coding",
      "affordable website development",
      "AI Next.js agency",
      "AI Nuxt development",
    ],
    accent: "cyan",
    heroIntro:
      "AI does not replace craft — it compresses the boring parts of website delivery. Used well, it helps an agency turn rough ideas into production-ready sites, apps, and backends at a price clients can actually afford.",
    sections: [
      {
        heading: "What AI changes in website projects",
        paragraphs: [
          "Traditional website projects lose time in translation: notes become wireframes, wireframes become tickets, tickets become first drafts, and first drafts become rewrite cycles. AI shortens that chain when the agency still owns judgement, architecture, and quality.",
          "At OldSkoolVibe.dev we use AI to accelerate research summaries, draft information architecture, scaffold components, propose copy variants, generate test cases, and spot obvious regressions — then we harden everything with real engineering standards.",
        ],
        bullets: [
          "Faster first drafts of pages, components, and API stubs",
          "Quicker exploration of layout and content options",
          "Earlier detection of accessibility and SEO gaps",
          "More budget left for design polish and business logic",
        ],
      },
      {
        heading: "Where AI helps most in an agency workflow",
        paragraphs: [
          "AI is strongest when the problem is bounded: convert a brief into a page outline, turn a Figma direction into React or Vue components, propose Laravel validation rules, or draft SEO metadata for a service page. It is weakest when left unsupervised on architecture, security, or brand-critical UX.",
          "That is why our delivery model pairs AI speed with human review. Clients get the throughput of an assisted team without inheriting throwaway prototypes.",
        ],
      },
      {
        heading: "Stacks that pair well with AI-assisted delivery",
        paragraphs: [
          "We build with the frameworks clients already prefer — Nuxt or Next for SEO-led sites, Vue or React for interactive interfaces, Python or Laravel for backends and business systems. AI scaffolding is especially effective in these ecosystems because patterns, libraries, and conventions are well documented.",
        ],
        bullets: [
          "Next and Nuxt for content sites, SSR, and conversion funnels",
          "React and Vue for portals, dashboards, and design systems",
          "Laravel and Python for APIs, auth, admin tools, and automation",
          "PostgreSQL and Supabase for structured product data",
        ],
      },
      {
        heading: "Affordable pricing without disposable code",
        paragraphs: [
          "AI reduces hours spent on boilerplate, so more of the budget goes into outcomes clients feel: clearer journeys, stronger SEO foundations, and maintainable code. The goal is not the cheapest possible website — it is the best result for a sensible price.",
          "If you need a marketing site, a rebuild, or a full-stack product, AI-assisted agency delivery can get you live faster while keeping ownership of the codebase.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will an AI-built website look generic?",
        answer:
          "Only if nobody directs brand, UX, and content strategy. We use AI for speed, then apply design judgement, custom components, and conversion-focused copy so the result feels specific to your business.",
      },
      {
        question: "Can AI help with SEO as well as coding?",
        answer:
          "Yes. We use it to draft metadata, outline topical pages, check heading structure, and spot thin content — then we refine keywords, internal links, and technical SEO manually.",
      },
    ],
    ctaLabel: "Talk to us about an AI-assisted website build",
  },
  {
    slug: "vibe-coding-for-client-websites",
    title: "Vibe coding for client websites: from rough idea to shipped product",
    eyebrow: "Vibe coding",
    description:
      "A practical guide to vibe coding — rapid, AI-assisted product building with senior engineering oversight.",
    metaDescription:
      "Discover vibe coding for website and app delivery: how agencies turn sketches, notes, and voice briefs into Nuxt, Next, Vue, React, Laravel, and Python products clients can launch.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-04",
    readingMinutes: 10,
    keywords: [
      "vibe coding",
      "vibe coding agency",
      "AI vibe coding websites",
      "rapid website prototyping",
      "AI product development",
      "vibe coder",
    ],
    accent: "purple",
    heroIntro:
      "Vibe coding is the practice of moving from intention to interface quickly — using AI tools, strong taste, and tight feedback loops. For client work, it means less waiting and more working software.",
    sections: [
      {
        heading: "What vibe coding actually means for businesses",
        paragraphs: [
          "Vibe coding is not chaos. It is a delivery style where founders, marketers, and operators describe the outcome they want, and a development partner turns that intent into pages, flows, and features in short cycles.",
          "Instead of waiting weeks for a perfect specification, clients can react to something real: a landing page, a booking flow, a dashboard shell, or an API-connected form. Decisions get better because they are made against working UI.",
        ],
      },
      {
        heading: "How OldSkoolVibe.dev runs vibe coding engagements",
        paragraphs: [
          "We start with a sharp outcome statement, constraints, and must-have user journeys. Then we generate a first vertical slice — often a homepage or core workflow — review it with the client, and expand outward.",
          "Every acceleration step still passes through engineering checks: accessibility, responsive behaviour, naming, data modelling, and launch readiness. Speed is useless if the next developer cannot maintain the project.",
        ],
        bullets: [
          "Outcome-first briefs instead of oversized requirement docs",
          "Rapid prototypes in Nuxt, Next, Vue, or React",
          "Backend and database work in Laravel or Python when needed",
          "Review loops that protect quality while keeping momentum",
        ],
      },
      {
        heading: "When vibe coding is the right fit",
        paragraphs: [
          "It shines for MVPs, campaign sites, redesigns with unclear requirements, and products that need stakeholder alignment. It is less ideal when compliance, complex legacy migrations, or multi-team governance demand heavy process up front — though even those projects can use vibe-coded spikes to de-risk decisions.",
        ],
      },
      {
        heading: "From prototype energy to production discipline",
        paragraphs: [
          "The agency difference is knowing when to stop exploring and start hardening. We promote prototypes into typed components, tested flows, SEO metadata, analytics hooks, and deployable environments so the vibe becomes a durable asset.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is vibe coding only for startups?",
        answer:
          "No. Established businesses use it to refresh service pages, test offers, or modernise internal tools without a six-month waterfall.",
      },
      {
        question: "Do we keep the code?",
        answer:
          "Yes. Client projects are delivered as maintainable repositories with clear structure, not disposable demos.",
      },
    ],
    ctaLabel: "Start a vibe coding website project",
  },
  {
    slug: "ai-agents-and-mcps-in-web-development",
    title: "AI agents and MCPs in web development: practical tooling for modern agencies",
    eyebrow: "Agents & MCPs",
    description:
      "How AI agents and Model Context Protocol (MCP) connections improve research, coding, QA, and operations for website projects.",
    metaDescription:
      "Understand AI agents and MCPs in website development: how connected tools, repos, docs, and workflows help agencies ship Nuxt, Next, Vue, React, Python, and Laravel projects faster.",
    publishedAt: "2026-10-22",
    updatedAt: "2026-11-04",
    readingMinutes: 12,
    keywords: [
      "AI agents web development",
      "MCP Model Context Protocol",
      "MCP coding agents",
      "AI agents for websites",
      "agentic development agency",
      "Cursor MCP development",
    ],
    accent: "emerald",
    heroIntro:
      "AI agents become useful when they can act with context — repositories, docs, tickets, analytics, and deployment systems. MCPs (Model Context Protocol connections) are how those tools get wired in safely.",
    sections: [
      {
        heading: "Agents versus chatboxes",
        paragraphs: [
          "A chat model can suggest code. An agent can plan steps, inspect files, run checks, open diffs, and iterate toward a goal. For website agencies, that difference shows up as fewer stalled tasks and more complete first passes on features.",
          "We use agents for bounded jobs: scaffold a service page, migrate a component, draft a migration, compare SEO metadata across routes, or prepare a PR checklist. Humans still approve architecture and client-facing decisions.",
        ],
      },
      {
        heading: "What MCPs unlock in a delivery stack",
        paragraphs: [
          "MCP connections let agents work with external systems through controlled interfaces — documentation sources, issue trackers, design references, databases, or deployment platforms — instead of guessing from incomplete prompts.",
          "In practice, that means better answers grounded in your project: the real package versions, the real content model, the real brand constraints. Less hallucination. More actionable output.",
        ],
        bullets: [
          "Repo-aware coding and refactoring",
          "Docs and API references pulled into the working context",
          "Ticket and PR workflows that stay attached to the codebase",
          "Safer operational tasks with explicit tool boundaries",
        ],
      },
      {
        heading: "Agency use cases that already pay off",
        paragraphs: [
          "Agents with MCP access help us audit route structures for SEO, generate regression notes after UI changes, draft Laravel or Python endpoints that match existing conventions, and keep project knowledge from living only in one person's head.",
          "Clients benefit because delivery becomes more consistent: the same standards get applied across Nuxt, Next, Vue, React, and backend workstreams.",
        ],
      },
      {
        heading: "Governance still matters",
        paragraphs: [
          "Agentic workflows need guardrails: secrets stay out of prompts, production writes are restricted, and every meaningful change is reviewed. OldSkoolVibe.dev treats agents as junior teammates with excellent memory — not as unsupervised deployers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do clients need their own MCP setup?",
        answer:
          "Not usually. We configure the agency tooling required for your project. If your team wants shared agent workflows later, we can document a lightweight setup.",
      },
      {
        question: "Are agents safe for client codebases?",
        answer:
          "With scoped access, review gates, and no secret exposure, yes. We design agent usage around least privilege and human approval.",
      },
    ],
    ctaLabel: "Ask how agents and MCPs can speed up your build",
  },
  {
    slug: "prd-driven-website-projects",
    title: "PRDs for website projects: lightweight product requirements that keep builds on track",
    eyebrow: "PRDs",
    description:
      "Why short, sharp PRDs still matter in AI-era website development — and how they prevent expensive rework.",
    metaDescription:
      "Learn how PRDs improve website and web app delivery: clearer scope, better AI prompts, fewer revisions, and affordable agency builds across Nuxt, Next, Vue, React, Python, and Laravel.",
    publishedAt: "2026-10-26",
    updatedAt: "2026-11-04",
    readingMinutes: 9,
    keywords: [
      "website PRD",
      "product requirements document web development",
      "PRD for AI coding",
      "website project scope",
      "web app requirements",
      "agency PRD process",
    ],
    accent: "yellow",
    heroIntro:
      "A good PRD is not a novel. It is a shared source of truth for what the website or app must achieve, who it serves, and what done looks like — especially when AI is helping write the first draft of the work.",
    sections: [
      {
        heading: "Why PRDs still matter when AI can generate pages in minutes",
        paragraphs: [
          "AI makes implementation cheap; bad requirements make revisions expensive. Without a product requirements document — even a short one — teams generate impressive demos that miss the business goal.",
          "Our PRDs capture audience, jobs-to-be-done, must-have pages or flows, integrations, SEO targets, constraints, and success metrics. That clarity improves both human and AI output.",
        ],
      },
      {
        heading: "What we put in an OldSkoolVibe.dev PRD",
        paragraphs: [
          "We keep documents lean enough to use weekly, not archive. Typical sections include problem statement, primary users, conversion goals, sitemap or app map, content owners, technical preferences (Nuxt or Next, Vue or React, Python or Laravel), analytics needs, and launch criteria.",
        ],
        bullets: [
          "Outcome and audience before feature lists",
          "Explicit out-of-scope notes to protect budget",
          "Acceptance criteria for each major page or flow",
          "SEO and content dependencies called out early",
        ],
      },
      {
        heading: "PRDs as prompts for agents and developers",
        paragraphs: [
          "A structured PRD becomes high-quality context for coding agents and teammates. Instead of vague requests like \"make a modern site,\" the team works from measurable goals: \"service business site with three packages, enquiry form, local SEO pages, and admin-ready content.\"",
          "That alignment is how affordable projects stay affordable — fewer surprise pivots mid-build.",
        ],
      },
      {
        heading: "Living documents, not frozen paperwork",
        paragraphs: [
          "We update the PRD when discovery unlocks better decisions. The point is controlled change, not rigidity. Clients always know what is in scope for the current milestone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do small brochure sites need a PRD?",
        answer:
          "Yes, but a short one. Even a one-page brief covering audience, offer, pages, and success metrics prevents expensive ambiguity.",
      },
      {
        question: "Can you write the PRD with us?",
        answer:
          "Absolutely. Many clients start with a conversation and leave with a clear requirements outline before build begins.",
      },
    ],
    ctaLabel: "Get help shaping your website PRD",
  },
  {
    slug: "skills-for-ai-assisted-development-teams",
    title: "Skills for AI-assisted development teams: packaging expertise agents can reuse",
    eyebrow: "Skills",
    description:
      "How reusable skills — playbooks agents and humans can follow — raise quality across website builds.",
    metaDescription:
      "Explore development skills for AI-assisted website agencies: reusable playbooks for SEO pages, forms, auth, design systems, and QA that make Nuxt, Next, Vue, React, Python, and Laravel delivery consistent.",
    publishedAt: "2026-10-30",
    updatedAt: "2026-11-04",
    readingMinutes: 10,
    keywords: [
      "AI development skills",
      "coding agent skills",
      "website development playbooks",
      "AI assisted agency workflow",
      "reusable engineering skills",
      "Cursor skills web development",
    ],
    accent: "green",
    heroIntro:
      "Skills are packaged ways of working — checklists, patterns, and instructions that help humans and AI agents repeat high-quality outcomes. In agency work, skills are how standards scale.",
    sections: [
      {
        heading: "From tribal knowledge to reusable skills",
        paragraphs: [
          "Every strong team knows how it likes forms validated, metadata written, Laravel policies structured, or React components named. Skills capture that preference so the next page or feature does not reinvent the process.",
          "For AI-assisted delivery, skills become explicit instructions: how to build a service landing page, how to wire a Resend enquiry form, how to add JSON-LD, how to review accessibility before handoff.",
        ],
      },
      {
        heading: "Skills that matter for website agencies",
        paragraphs: [
          "We maintain skills around conversion pages, technical SEO, component architecture, database migrations, content modelling, QA smoke tests, and launch checklists. Each skill encodes the \"house style\" of OldSkoolVibe.dev.",
        ],
        bullets: [
          "SEO page skill: headings, internal links, metadata, schema",
          "Form skill: validation, spam protection, email routing, CRM hooks",
          "UI skill: spacing, typography, motion, and responsive behaviour",
          "Backend skill: auth patterns, migrations, and environment safety",
        ],
      },
      {
        heading: "Why clients feel the difference",
        paragraphs: [
          "Reusable skills mean fewer inconsistent pages, cleaner handovers, and faster onboarding if your internal team takes over later. AI agents following skills produce drafts that already look like they belong in your product.",
          "That consistency is a quiet SEO advantage too: templates and content patterns stay coherent across dozens of indexable pages.",
        ],
      },
      {
        heading: "Building a skill library without bureaucracy",
        paragraphs: [
          "We only promote a workflow into a skill after it has worked on real client work. Short, concrete, and versioned beats a wiki nobody reads.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are skills the same as design systems?",
        answer:
          "Related but broader. Design systems cover UI components; skills also cover process — SEO checks, PR prep, form delivery, and release habits.",
      },
      {
        question: "Can skills be customised for our brand?",
        answer:
          "Yes. We adapt shared agency skills to your tone, stack preferences, and compliance needs.",
      },
    ],
    ctaLabel: "Build with a skills-led agency workflow",
  },
  {
    slug: "development-loops-that-ship-websites-faster",
    title: "Development loops that ship websites faster: feedback cycles for AI-era delivery",
    eyebrow: "Loops",
    description:
      "The loops behind reliable website shipping — plan, build, review, measure, improve — and how AI tightens each cycle.",
    metaDescription:
      "See how development loops help website agencies ship faster: discovery loops, build loops, review loops, SEO loops, and improvement cycles powered by AI agents and clear PRDs.",
    publishedAt: "2026-11-01",
    updatedAt: "2026-11-04",
    readingMinutes: 9,
    keywords: [
      "development loops",
      "build review loop",
      "AI delivery loops",
      "website feedback cycles",
      "agile website agency",
      "continuous improvement web development",
    ],
    accent: "red",
    heroIntro:
      "Great websites are rarely one big reveal. They are the product of tight loops: clarify, implement, review, measure, and refine. AI makes each loop shorter; discipline makes each loop count.",
    sections: [
      {
        heading: "The core delivery loop",
        paragraphs: [
          "Our default loop is simple: agree the next outcome, implement a vertical slice, review with the client, fix what matters, then expand. Loops keep risk small and learning frequent.",
          "AI helps draft the slice faster. PRDs and skills keep the slice aligned. Agents and MCPs reduce context-switching when checking docs, code, and tickets.",
        ],
        bullets: [
          "Discovery loop: audience, offer, and constraints",
          "Build loop: page or feature vertical slices",
          "Review loop: UX, SEO, accessibility, and code quality",
          "Growth loop: analytics, content expansion, and iteration",
        ],
      },
      {
        heading: "SEO loops for indexable growth",
        paragraphs: [
          "SEO is itself a loop. We publish foundational pages, monitor queries and crawl behaviour, expand topical coverage with articles and service pages, then strengthen internal links. That is how an agency site — and a client site — accumulates durable search presence.",
          "Detailed articles on AI development, vibe coding, agents, MCPs, PRDs, skills, and loops are part of that same strategy: useful content that earns indexation and educates buyers.",
        ],
      },
      {
        heading: "Avoiding endless loops",
        paragraphs: [
          "Loops need exit criteria. Every milestone defines what \"good enough to ship\" means. Without that, AI-era speed can turn into infinite polish. We pair momentum with launch gates so clients get live outcomes, not perpetual drafts.",
        ],
      },
      {
        heading: "How clients participate without slowing delivery",
        paragraphs: [
          "We ask for focused feedback at review points: Does this match the offer? Is the journey clear? What must change before the next loop? Async comments on working URLs beat long meetings about abstract mockups.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is a typical loop?",
        answer:
          "Often a few days for a page or feature slice, depending on complexity. Larger systems are sequenced as multiple loops toward a release.",
      },
      {
        question: "Do loops replace a roadmap?",
        answer:
          "No. A roadmap sets direction; loops execute it in learnable increments.",
      },
    ],
    ctaLabel: "Plan your first delivery loop with us",
  },
  {
    slug: "affordable-website-development-agency-guide",
    title: "Affordable website development: what to expect from a modern agency build",
    eyebrow: "Agency buying guide",
    description:
      "A plain-English guide to scoping affordable website projects without sacrificing stack quality or SEO.",
    metaDescription:
      "Guide to affordable website development agency pricing and scope: what affects cost, which frameworks fit, and how AI-assisted delivery helps businesses launch with Nuxt, Next, Vue, React, Python, or Laravel.",
    publishedAt: "2026-11-02",
    updatedAt: "2026-11-04",
    readingMinutes: 8,
    keywords: [
      "affordable website development agency",
      "cheap website development UK",
      "website project cost guide",
      "hire web development agency",
      "affordable Next.js website",
      "affordable Nuxt website",
    ],
    accent: "cyan",
    heroIntro:
      "Affordable does not mean fragile. It means choosing the right scope, the right framework, and a delivery model that wastes less money on delay and rework.",
    sections: [
      {
        heading: "What usually drives website cost",
        paragraphs: [
          "Cost rises with custom design depth, integrations, authenticated areas, content migration, multilingual needs, and ongoing editorial tooling. A brochure site and a customer portal should not share the same quote shape.",
          "OldSkoolVibe.dev prices around outcomes: pages and flows that matter now, with a path to expand later.",
        ],
      },
      {
        heading: "Pick frameworks for fit, not fashion",
        paragraphs: [
          "Nuxt or Next when SEO and content velocity matter. Vue or React when interaction and design systems dominate. Python or Laravel when business rules, admin tools, and APIs are the product. The affordable choice is the maintainable choice.",
        ],
      },
      {
        heading: "How AI keeps quotes realistic",
        paragraphs: [
          "Because we use AI agents, skills, and tight loops, more hours go into design decisions and less into boilerplate. Clients see that as better value: more polished launches for the same budget band.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work to a fixed budget?",
        answer:
          "Yes. We propose a scope that fits the budget and clearly mark later-phase options.",
      },
      {
        question: "Do you only build greenfield sites?",
        answer:
          "No. Rebuilds, redesigns, and rescue projects are common — especially when an old stack is holding the business back.",
      },
    ],
    ctaLabel: "Request an affordable project quote",
  },
  {
    slug: "nuxt-vs-next-for-business-websites",
    title: "Nuxt vs Next for business websites: which meta-framework should you choose?",
    eyebrow: "Framework comparison",
    description:
      "A practical comparison of Nuxt and Next for marketing sites, content platforms, and product-led websites.",
    metaDescription:
      "Compare Nuxt vs Next for business websites: SEO, content modelling, ecosystem fit, hiring, and when an agency should recommend Vue-based Nuxt or React-based Next.",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-04",
    readingMinutes: 9,
    keywords: [
      "Nuxt vs Next",
      "Next.js vs Nuxt for business",
      "Nuxt SEO website",
      "Next.js agency website",
      "choose Nuxt or Next",
      "meta framework comparison",
    ],
    accent: "emerald",
    heroIntro:
      "Both Nuxt and Next can power excellent business websites. The better choice depends on your team's skills, ecosystem, and how you plan to grow content and product features.",
    sections: [
      {
        heading: "Choose Next when React is your centre of gravity",
        paragraphs: [
          "Next is often right when your designers and developers already think in React, when you want broad hiring options, or when you expect a product UI to grow beside marketing pages. It is a strong default for content sites that may become app-like.",
        ],
      },
      {
        heading: "Choose Nuxt when Vue is the happier path",
        paragraphs: [
          "Nuxt shines for teams that prefer Vue's ergonomics, want an opinionated full-stack Vue framework, or already maintain Vue component libraries. For many marketing and content-led businesses, Nuxt delivers outstanding SEO and developer experience.",
        ],
      },
      {
        heading: "What matters more than the logo on the repo",
        paragraphs: [
          "Information architecture, page speed, content workflow, analytics, and conversion design matter more than framework fashion. OldSkoolVibe.dev implements either well — and will say so if a simpler stack is enough for your budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you migrate from one to the other later?",
        answer:
          "Yes, but migrations cost real money. We help you choose deliberately so you are not forced into an early rewrite.",
      },
      {
        question: "What if we are unsure?",
        answer:
          "Share your team skills and roadmap. We recommend Nuxt or Next based on fit, not preference theatre.",
      },
    ],
    ctaLabel: "Get a Nuxt vs Next recommendation",
  },
  {
    slug: "vue-or-react-for-web-apps",
    title: "Vue or React for web apps: picking the frontend your product can live with",
    eyebrow: "Frontend strategy",
    description:
      "How to choose between Vue and React for portals, dashboards, and interactive customer experiences.",
    metaDescription:
      "Vue or React for web apps? Compare maintainability, hiring, design systems, and agency delivery so your portal or product frontend stays affordable to build and evolve.",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-04",
    readingMinutes: 8,
    keywords: [
      "Vue or React",
      "React vs Vue web app",
      "hire React agency",
      "hire Vue agency",
      "frontend framework choice",
      "React Vue business application",
    ],
    accent: "cyan",
    heroIntro:
      "Vue and React can both deliver polished web apps. The durable decision is which ecosystem your team — or your agency partner — can support cleanly for years.",
    sections: [
      {
        heading: "React for broad ecosystems and product complexity",
        paragraphs: [
          "React's ecosystem, hiring pool, and pattern library make it a frequent choice for complex dashboards, design systems, and multi-team products. With Next, it also covers marketing surfaces in one family.",
        ],
      },
      {
        heading: "Vue for clarity and approachable component models",
        paragraphs: [
          "Vue often wins on approachability and cohesive patterns, especially for teams that want readable single-file components and a gentle onboarding curve. With Nuxt, Vue covers both app and site needs elegantly.",
        ],
      },
      {
        heading: "Agency recommendation framework",
        paragraphs: [
          "We look at existing code, internal skills, integration requirements, and whether the UI is mostly content or mostly application state. Then we build — affordably — in the stack that reduces long-term friction.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can backend choice force frontend choice?",
        answer:
          "Not strictly. Laravel and Python APIs can serve Vue or React frontends. We pair them based on product needs.",
      },
    ],
    ctaLabel: "Choose a frontend stack with us",
  },
  {
    slug: "python-or-laravel-backend-for-websites",
    title: "Python or Laravel for website backends: APIs, admin tools, and business logic",
    eyebrow: "Backend strategy",
    description:
      "When to power a website or web app with Laravel versus Python frameworks like Django or FastAPI.",
    metaDescription:
      "Python or Laravel for website backends? Compare APIs, admin panels, automation, PostgreSQL data models, and agency delivery for business-ready web systems.",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    readingMinutes: 8,
    keywords: [
      "Python or Laravel",
      "Laravel website backend",
      "Python web API agency",
      "Django vs Laravel",
      "FastAPI website backend",
      "PostgreSQL Laravel Python",
    ],
    accent: "red",
    heroIntro:
      "Frontends win attention; backends win trust. Laravel and Python are both excellent — the right one depends on your workflows, team, and how operational the product needs to be.",
    sections: [
      {
        heading: "Laravel for structured web applications",
        paragraphs: [
          "Laravel is a strong fit for authenticated apps, admin panels, form-heavy business systems, queues, and conventional web architectures. If your product looks like a serious business application with public pages attached, Laravel is often efficient.",
        ],
      },
      {
        heading: "Python for APIs, automation, and data-heavy work",
        paragraphs: [
          "Python (Django or FastAPI) excels when you need APIs, integrations, automation, machine learning adjacent workflows, or data processing beside the website. It is also a natural partner for analytics-informed products.",
        ],
      },
      {
        heading: "Shared non-negotiables",
        paragraphs: [
          "Either way we design PostgreSQL schemas carefully, keep secrets out of the client, and expose clean APIs to Nuxt, Next, Vue, or React frontends. Backend choice should make your operations calmer, not cleverer for its own sake.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we start without a custom backend?",
        answer:
          "Often yes — with forms, CMS content, and managed services first. We introduce Laravel or Python when business logic demands it.",
      },
    ],
    ctaLabel: "Plan your website backend with OldSkoolVibe.dev",
  },
];

export const getArticleBySlug = (slug: string | undefined) =>
  articles.find((article) => article.slug === slug);

export const getRelatedArticles = (slug: string, limit = 3) =>
  articles.filter((article) => article.slug !== slug).slice(0, limit);

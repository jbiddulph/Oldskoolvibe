create extension if not exists pgcrypto with schema extensions;

create table public.oldskoolvibe_developer_adverts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  role text not null,
  eyebrow text not null,
  headline text not null,
  intro text not null,
  meta_description text not null,
  stack text[] not null default '{}',
  proof_points text[] not null default '{}',
  service_highlights jsonb not null default '[]'::jsonb,
  deliverables text[] not null default '{}',
  outcomes text[] not null default '{}',
  seo_keywords text[] not null default '{}',
  accent text not null default 'cyan',
  is_published boolean not null default false,
  display_order integer not null default 0,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  constraint oldskoolvibe_developer_adverts_slug_format
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint oldskoolvibe_developer_adverts_highlights_array
    check (jsonb_typeof(service_highlights) = 'array')
);

create table public.oldskoolvibe_advert_faqs (
  id uuid primary key default gen_random_uuid(),
  advert_id uuid not null references public.oldskoolvibe_developer_adverts(id) on delete cascade,
  question text not null,
  answer text not null,
  display_order integer not null default 0,
  created_at timestamp with time zone not null default now(),
  unique (advert_id, question)
);

create table public.oldskoolvibe_service_enquiries (
  id uuid primary key default gen_random_uuid(),
  advert_id uuid references public.oldskoolvibe_developer_adverts(id) on delete set null,
  name text not null,
  email text not null,
  company text,
  project_type text,
  budget_range text,
  preferred_contact text not null default 'email',
  message text not null,
  status text not null default 'new',
  created_at timestamp with time zone not null default now(),
  constraint oldskoolvibe_service_enquiries_email_format
    check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  constraint oldskoolvibe_service_enquiries_status
    check (status in ('new', 'contacted', 'qualified', 'archived')),
  constraint oldskoolvibe_service_enquiries_preferred_contact
    check (preferred_contact in ('email', 'phone', 'video_call'))
);

create index oldskoolvibe_developer_adverts_published_order_idx
  on public.oldskoolvibe_developer_adverts (is_published, display_order, role);

create index oldskoolvibe_advert_faqs_advert_order_idx
  on public.oldskoolvibe_advert_faqs (advert_id, display_order);

create index oldskoolvibe_service_enquiries_created_idx
  on public.oldskoolvibe_service_enquiries (created_at desc);

create or replace function public.oldskoolvibe_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger oldskoolvibe_developer_adverts_set_updated_at
before update on public.oldskoolvibe_developer_adverts
for each row execute function public.oldskoolvibe_set_updated_at();

revoke execute on function public.oldskoolvibe_set_updated_at() from public;
revoke execute on function public.oldskoolvibe_set_updated_at() from anon, authenticated;

alter table public.oldskoolvibe_developer_adverts enable row level security;
alter table public.oldskoolvibe_advert_faqs enable row level security;
alter table public.oldskoolvibe_service_enquiries enable row level security;

revoke all on table public.oldskoolvibe_developer_adverts from anon, authenticated;
revoke all on table public.oldskoolvibe_advert_faqs from anon, authenticated;
revoke all on table public.oldskoolvibe_service_enquiries from anon, authenticated;

grant select on table public.oldskoolvibe_developer_adverts to anon, authenticated;
grant select on table public.oldskoolvibe_advert_faqs to anon, authenticated;
grant insert on table public.oldskoolvibe_service_enquiries to anon, authenticated;
grant select, insert, update, delete on table public.oldskoolvibe_developer_adverts to service_role;
grant select, insert, update, delete on table public.oldskoolvibe_advert_faqs to service_role;
grant select, insert, update, delete on table public.oldskoolvibe_service_enquiries to service_role;

create policy "Published developer adverts are publicly readable"
on public.oldskoolvibe_developer_adverts
for select
to anon, authenticated
using (is_published);

create policy "Published advert FAQs are publicly readable"
on public.oldskoolvibe_advert_faqs
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.oldskoolvibe_developer_adverts adverts
    where adverts.id = oldskoolvibe_advert_faqs.advert_id
      and adverts.is_published
  )
);

create policy "Visitors can create new service enquiries"
on public.oldskoolvibe_service_enquiries
for insert
to anon, authenticated
with check (status = 'new');

insert into public.oldskoolvibe_developer_adverts (
  slug,
  role,
  eyebrow,
  headline,
  intro,
  meta_description,
  stack,
  proof_points,
  service_highlights,
  deliverables,
  outcomes,
  seo_keywords,
  accent,
  is_published,
  display_order
) values
(
  'react-developer',
  'React Developer',
  'Modern frontend and full-stack React delivery',
  'Hire a React developer for fast, polished, SEO-aware web apps.',
  'Oldskoolvibe builds React interfaces that feel sharp, load quickly, and connect cleanly to real business workflows. From landing pages to dashboards, the work covers frontend craft, backend APIs, PostgreSQL-backed data, UI/UX, and discoverable content.',
  'React developer advert for Oldskoolvibe: frontend, backend, PostgreSQL, Supabase, UI/UX, SEO, and conversion-focused React apps.',
  array['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'REST APIs'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Reusable React component libraries and design systems",
    "Single-page apps, dashboards, portals, and landing pages",
    "Supabase and PostgreSQL integrations with secure data access",
    "Performance tuning, Core Web Vitals, and SEO-friendly page structure"
  ]'::jsonb,
  array['React app architecture', 'Responsive UI implementation', 'API and database integration', 'SEO metadata and launch checklist'],
  array['A modern interface customers can trust', 'Cleaner developer handover and maintainability', 'Fast iteration from idea to production-ready pages'],
  array['React developer', 'frontend developer', 'React PostgreSQL developer', 'React SEO'],
  'cyan',
  true,
  10
),
(
  'vue-developer',
  'Vue Developer',
  'Vue applications with practical full-stack experience',
  'Hire a Vue developer for elegant interfaces and dependable data flows.',
  'Oldskoolvibe creates Vue experiences that balance clean interaction design with production-ready engineering. The service covers frontend builds, backend connections, PostgreSQL data models, UI/UX improvements, and SEO essentials.',
  'Vue developer advert covering Vue UI builds, backend services, PostgreSQL databases, Supabase, UI/UX, and SEO support.',
  array['Vue', 'TypeScript', 'Pinia', 'Supabase', 'PostgreSQL', 'API integrations'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Vue components, state management, and reusable interface patterns",
    "Customer portals, booking flows, dashboards, and marketing pages",
    "PostgreSQL schemas and Supabase-ready data access",
    "SEO-friendly content layouts and fast-loading UI"
  ]'::jsonb,
  array['Vue page and component builds', 'Frontend state and routing setup', 'Backend and database integration', 'UX and SEO improvement plan'],
  array['Smooth user journeys across devices', 'Maintainable Vue code for ongoing growth', 'Better visibility and clearer conversion paths'],
  array['Vue developer', 'Vue.js developer', 'Vue PostgreSQL developer', 'Vue UI UX'],
  'green',
  true,
  20
),
(
  'nuxt-developer',
  'Nuxt Developer',
  'SEO-led Nuxt sites and applications',
  'Hire a Nuxt developer for content-rich, high-performing web experiences.',
  'Oldskoolvibe uses Nuxt where SEO, performance, routing, and content structure matter. The work can span SSR-ready pages, API-backed features, PostgreSQL storage, Supabase integrations, UI/UX refinement, and conversion-led advert pages.',
  'Nuxt developer advert for SSR, SEO, PostgreSQL, Supabase, UI/UX, backend integrations, and high-performing web apps.',
  array['Nuxt', 'Vue', 'TypeScript', 'Supabase', 'PostgreSQL', 'Server routes'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Nuxt landing pages, service pages, and content architectures",
    "Server-rendered routes for stronger SEO and shareability",
    "Database-backed content and lead capture with PostgreSQL",
    "UI/UX audits that improve clarity, trust, and conversion"
  ]'::jsonb,
  array['Nuxt route and layout architecture', 'SEO-ready page templates', 'Supabase and PostgreSQL setup guidance', 'Performance and launch checks'],
  array['Pages that are easier to crawl and promote', 'A scalable foundation for content marketing', 'Integrated lead capture and structured service data'],
  array['Nuxt developer', 'Nuxt SEO developer', 'Nuxt PostgreSQL', 'Nuxt UI UX'],
  'emerald',
  true,
  30
),
(
  'laravel-developer',
  'Laravel Developer',
  'Laravel backends, admin tools, and full-stack builds',
  'Hire a Laravel developer for robust web apps and business systems.',
  'Oldskoolvibe delivers Laravel features with a practical eye for backend reliability and frontend usability. Services include APIs, admin panels, PostgreSQL databases, integrations, UI/UX polish, and technical SEO for public-facing pages.',
  'Laravel developer advert for APIs, backend systems, PostgreSQL databases, frontend UI/UX, SEO, and full-stack delivery.',
  array['Laravel', 'PHP', 'Blade', 'Inertia', 'PostgreSQL', 'Queues'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Laravel APIs, admin panels, dashboards, and internal tools",
    "Authentication, roles, payments, forms, and third-party integrations",
    "PostgreSQL schema design, migrations, and query optimisation",
    "Frontend polish with SEO-ready landing and service pages"
  ]'::jsonb,
  array['Laravel feature implementation', 'Database migrations and models', 'Admin workflows and backend APIs', 'Frontend templates and SEO metadata'],
  array['Reliable backend foundations', 'Clear admin workflows for teams', 'Better customer journeys from landing page to enquiry'],
  array['Laravel developer', 'PHP developer', 'Laravel PostgreSQL', 'Laravel backend developer'],
  'red',
  true,
  40
),
(
  'python-developer',
  'Python Developer',
  'Python automation, APIs, and data-backed products',
  'Hire a Python developer for practical automation and scalable web features.',
  'Oldskoolvibe builds Python services that remove manual work, integrate systems, and support data-rich products. The offer includes backend APIs, PostgreSQL databases, Supabase-aware workflows, frontend collaboration, UI/UX thinking, and SEO for public interfaces.',
  'Python developer advert for automation, APIs, PostgreSQL, Supabase, full-stack support, UI/UX, and SEO-focused web delivery.',
  array['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Supabase', 'Automation'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Python APIs, automations, scripts, workers, and integrations",
    "Django or FastAPI services connected to PostgreSQL",
    "Data processing, reporting, and operational tooling",
    "Frontend handoff, UI/UX support, and SEO-ready content pages"
  ]'::jsonb,
  array['Python service or automation build', 'API endpoints and integration logic', 'PostgreSQL data model and queries', 'Documentation and launch support'],
  array['Less repetitive manual work', 'More reliable data handling', 'Backend features that connect cleanly to customer-facing UI'],
  array['Python developer', 'Python automation', 'Python PostgreSQL', 'FastAPI developer'],
  'yellow',
  true,
  50
),
(
  'vibe-coder-ai-experience',
  'Vibe Coder with AI Experience',
  'AI-assisted product builds with senior engineering judgement',
  'Hire a vibe coder with AI experience to turn ideas into shipped product pages and apps.',
  'Oldskoolvibe combines fast AI-assisted delivery with practical full-stack engineering. The service helps shape rough ideas, prototype quickly, connect PostgreSQL-backed data, refine UI/UX, and build SEO-ready pages without losing maintainability.',
  'Vibe coder with AI experience advert for AI-assisted development, React, Vue, Laravel, Python, PostgreSQL, Supabase, UI/UX, and SEO.',
  array['AI coding tools', 'React', 'Vue', 'Laravel', 'Python', 'PostgreSQL'],
  array[
    'Frontend builds with conversion-focused UI, accessibility, responsive layouts, and component systems.',
    'Backend delivery across APIs, authentication, integrations, automation, and maintainable service layers.',
    'Database-first thinking with PostgreSQL, Supabase, schema design, migrations, indexing, and reporting queries.',
    'UI/UX improvements that turn rough ideas into clear user journeys, wireframes, landing pages, and dashboards.',
    'Technical SEO foundations including semantic HTML, metadata, page speed, structured content, and crawlable routes.'
  ],
  '[
    "Rapid prototyping from notes, voice, sketches, or rough requirements",
    "AI-assisted code generation reviewed through real engineering standards",
    "Full-stack builds across frontend, backend, Supabase, and PostgreSQL",
    "Content, UI/UX, and SEO support for launch-ready adverts and pages"
  ]'::jsonb,
  array['Prototype or MVP implementation', 'AI-assisted code review and hardening', 'Database-backed feature setup', 'SEO-ready launch pages and conversion copy'],
  array['Faster movement from concept to working software', 'A practical bridge between creative direction and engineering', 'Maintainable output instead of throwaway AI experiments'],
  array['vibe coder', 'AI developer', 'AI coding experience', 'PostgreSQL full-stack developer'],
  'purple',
  true,
  60
)
on conflict (slug) do update set
  role = excluded.role,
  eyebrow = excluded.eyebrow,
  headline = excluded.headline,
  intro = excluded.intro,
  meta_description = excluded.meta_description,
  stack = excluded.stack,
  proof_points = excluded.proof_points,
  service_highlights = excluded.service_highlights,
  deliverables = excluded.deliverables,
  outcomes = excluded.outcomes,
  seo_keywords = excluded.seo_keywords,
  accent = excluded.accent,
  is_published = excluded.is_published,
  display_order = excluded.display_order;

insert into public.oldskoolvibe_advert_faqs (advert_id, question, answer, display_order)
select adverts.id, faq.question, faq.answer, faq.display_order
from public.oldskoolvibe_developer_adverts adverts
cross join lateral (
  values
    (
      'Does this service include backend and database work?',
      'Yes. Every Oldskoolvibe developer advert includes frontend, backend, PostgreSQL database experience, UI/UX thinking, and SEO foundations.',
      10
    ),
    (
      'Can this be connected to Supabase?',
      'Yes. The service can use Supabase for PostgreSQL data, auth-aware architecture, lead capture, and secure public content access with RLS.',
      20
    ),
    (
      'Is this suitable for a small business advert or landing page?',
      'Yes. The adverts are written for practical commercial pages that explain the service clearly, support search visibility, and encourage enquiries.',
      30
    )
) as faq(question, answer, display_order)
where adverts.slug in (
  'react-developer',
  'vue-developer',
  'nuxt-developer',
  'laravel-developer',
  'python-developer',
  'vibe-coder-ai-experience'
)
on conflict (advert_id, question) do update set
  answer = excluded.answer,
  display_order = excluded.display_order;

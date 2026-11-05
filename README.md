# OldSkoolVibe.dev

OldSkoolVibe.dev is a website development agency site built with React and Vite.

The agency positions affordable website and web app delivery across:

- Nuxt or Next
- Vue or React
- Python or Laravel
- AI-assisted vibe coding, agents, MCPs, PRDs, skills, and delivery loops

## Key routes

- `/` — agency home
- `/what-we-build` — services, frameworks, and project enquiry form
- `/trends` — frontend, backend, and UI/UX trend hubs
- `/trends/:category` — dedicated trend category pages
- `/articles` — SEO article index
- `/articles/:slug` — long-form guides and trend articles
- `/services/:slug` — capability pages (React/Next, Vue, Nuxt, Laravel, Python, vibe coding)

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Supabase

The database migration lives in:

```text
supabase/migrations/20260617172200_create_oldskoolvibe_adverts.sql
```

It creates `oldskoolvibe_`-prefixed tables for publishable developer adverts,
advert FAQs, and service enquiries with row level security enabled.

The active Supabase project used for this setup is:

```text
https://qemafehpoknkbejlbksa.supabase.co
```

## Service request email setup

Service request forms post to `/api/service-requests`. The endpoint stores the
request in `oldskoolvibe_service_enquiries` and emails the details from
`info@oldskoolvibe.dev` to every address in `SERVICE_REQUEST_EMAIL_TO`
(comma-separated). Defaults include both Gmail and the agency inbox:

```text
john.mbiddulph@gmail.com,info@oldskoolvibe.dev
```

Set these Vercel environment variables:

```text
SUPABASE_URL=https://qemafehpoknkbejlbksa.supabase.co
SUPABASE_PUBLISHABLE_KEY=<Supabase publishable or anon key>
RESEND_API_KEY=<Resend API key>
SERVICE_REQUEST_EMAIL_FROM=OldSkoolVibe.dev <info@oldskoolvibe.dev>
SERVICE_REQUEST_EMAIL_TO=john.mbiddulph@gmail.com,info@oldskoolvibe.dev
```

`SERVICE_REQUEST_EMAIL_FROM` can use an address at `oldskoolvibe.dev` without a
mailbox, but the domain must be verified in Resend so it can send.

Where to look for messages in Resend:

- **Emails → Sent** shows outbound notifications the form just sent.
- **Emails → Receiving / Inboxes** only shows mail delivered *to*
  `info@oldskoolvibe.dev` (or another receiving address). That requires the
  domain receiving MX to point at Resend. Sending only to Gmail will not appear
  in the Resend inbox.

DNS checklist for deliverability:

- `resend._domainkey` TXT must be `v=DKIM1; k=rsa; p=...` (not bare `p=...`)
- `send` subdomain SPF/MX for Resend return-path
- `_dmarc` TXT such as `v=DMARC1; p=none; rua=mailto:info@oldskoolvibe.dev`

If `/api/service-requests` returns `Email delivery is not configured in this
deployment`, the running Vercel deployment cannot see `RESEND_API_KEY`. Check
that the variable is assigned to the environment you are testing:

- `https://www.oldskoolvibe.dev` uses Vercel's Production environment.
- Pull request and branch URLs usually use Vercel's Preview environment.

After changing Vercel environment variables, redeploy the affected deployment so
the serverless function receives the new values.

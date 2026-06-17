# Oldskoolvibe

Oldskoolvibe is a React/Vite advert site for developer services across:

- React Developer
- Vue Developer
- Nuxt Developer
- Laravel Developer
- Python Developer
- Vibe Coder with AI Experience

Each advert highlights frontend and backend experience, PostgreSQL database
work, Supabase-ready data design, UI/UX, and SEO.

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
request in `oldskoolvibe_service_enquiries` and emails the details to
`john.mbiddulph@gmail.com`.

Set these Vercel environment variables:

```text
SUPABASE_URL=https://qemafehpoknkbejlbksa.supabase.co
SUPABASE_PUBLISHABLE_KEY=<Supabase publishable or anon key>
RESEND_API_KEY=<Resend API key>
SERVICE_REQUEST_EMAIL_FROM=Oldskoolvibe <forms@oldskoolvibe.dev>
SERVICE_REQUEST_EMAIL_TO=john.mbiddulph@gmail.com
```

`SERVICE_REQUEST_EMAIL_FROM` can use an address at `oldskoolvibe.dev` without a
mailbox, but the domain must be verified in the email provider so it can send.

If `/api/service-requests` returns `Email delivery is not configured in this
deployment`, the running Vercel deployment cannot see `RESEND_API_KEY`. Check
that the variable is assigned to the environment you are testing:

- `https://www.oldskoolvibe.dev` uses Vercel's Production environment.
- Pull request and branch URLs usually use Vercel's Preview environment.

After changing Vercel environment variables, redeploy the affected deployment so
the serverless function receives the new values.

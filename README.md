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

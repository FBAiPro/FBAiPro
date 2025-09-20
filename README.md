# FBAiPro – Foundation

This repo contains a minimal, reliable foundation for your AI-powered Amazon FBA platform using free/low-cost components for development. It’s built to run locally for $0, then scale to hosted services later.

## Stack
- Next.js 14 + TypeScript + App Router
- Tailwind CSS
- NextAuth (Credentials provider: email/password)
- Prisma ORM (SQLite for dev; switch to Postgres later)
- Stub AI endpoints that work without paid providers

## Getting started (Windows, PowerShell)

1) Install prerequisites
- Node.js 20+
- Git

2) Configure env
- Copy `.env.example` to `.env`
- Set a strong value for `NEXTAUTH_SECRET`

3) Install deps
```
npm install
```

4) Setup database
```
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

5) Run dev server
```
npm run dev
```
Open http://localhost:3000

- Sign in with the seeded account: `demo@fbai.pro` / `demo1234`
- Or sign up a new account

## Free-to-paid path
- Database: start with SQLite (default). For production, use Postgres free tiers like Neon/Supabase. Then set `DATABASE_URL` to your Postgres URL and change `provider` in `prisma/schema.prisma` from `sqlite` to `postgresql`, run migrations again.
- AI: endpoints work without paid AI. Optionally set `HUGGINGFACE_API_TOKEN` later for Inference API usage.
- Hosting: Vercel free for the web app; Neon/Supabase free for Postgres; Upstash Redis free if you add queues later.

## API routes (implemented)
- POST `/api/auth/register` – create account (email/password)
- NextAuth `/api/auth/[...nextauth]` – sign in/out via credentials
- Products
  - GET `/api/products` – list current user’s products
  - POST `/api/products` – create product (asin/title/description/price)
  - GET/PUT/DELETE `/api/products/:id`
- AI stubs
  - POST `/api/ai/product-research` – returns opportunity score (0–100)
  - POST `/api/ai/keyword-research` – naive keyword extraction
  - POST `/api/ai/listing-optimize` – creates title/bullets/description
  - POST `/api/ai/competitor-analysis` – simple competition labels

## Deploy to Cloud Run (Dockerfile)

This repo includes a Dockerfile using Next.js standalone output.

1) Build and push (replace YOUR_PROJECT and REGION):
```
$env:PROJECT_ID="YOUR_PROJECT"
$env:REGION="us-central1"  # choose your region
$image="gcr.io/$env:PROJECT_ID/fbai-pro:$(git rev-parse --short HEAD)"

gcloud builds submit --tag $image
```

2) Deploy
```
# Set env via Secret Manager for security (recommended)
# gcloud secrets create NEXTAUTH_SECRET --replication-policy="automatic"
# echo -n "your-secret" | gcloud secrets versions add NEXTAUTH_SECRET --data-file=-

# Deploy (pass non-secret env here, bind secrets separately if you use them)
gcloud run deploy fbai-pro `
  --image=$image `
  --region=$env:REGION `
  --platform=managed `
  --allow-unauthenticated `
  --port=8080 `
  --set-env-vars=NEXTAUTH_URL=https://YOUR_SERVICE_URL

# Example of binding secrets later (optional)
# gcloud run services update fbai-pro --region=$env:REGION `
#   --set-secrets NEXTAUTH_SECRET=NEXTAUTH_SECRET:latest
```

Notes:
- Cloud Run containers are ephemeral. Don’t use SQLite in production. Point `DATABASE_URL` to a managed Postgres (Neon/Supabase/Cloud SQL) and update `prisma/schema.prisma` provider to `postgresql`.
- Ensure `NEXTAUTH_URL` matches the Cloud Run URL after first deploy, then redeploy if needed.
- If using custom domains, configure Cloud Run domain mapping.

## Next steps (suggested)
- Hook Amazon SP-API once your Seller Central account is ready.
- Replace AI stub logic with providers (Hugging Face Inference, OpenRouter, or your own hosted models) guarded by environment flags.
- Add role-based access, usage limits, Stripe (when you’re ready to charge), and background jobs (BullMQ + Upstash for free tier).
- Add logging/metrics: Vercel Analytics, Sentry (free tier), and proper audit logs.

## Security notes
- Never commit your real `.env`.
- Always hash passwords (bcrypt is already used).
- Rotate secrets and use per-environment secrets in hosting.

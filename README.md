# AI Skills Shop

AI Skills Shop is a modern AI skill trading platform that uses a credit-based business model and creator incentive system to provide users with on-demand AI capabilities.

## Project Overview

A dark-themed, modern, professional AI skill trading platform built on the Vibe Stack technology stack, designed to connect AI skill creators and users, enabling value flow through subscription and credit systems.

## Technology Stack

- **Frontend Framework**: Next.js 15 (App Router) + TypeScript
- **Styling Solution**: Tailwind CSS + Shadcn/ui
- **Animation Effects**: Framer Motion
- **Database**: PostgreSQL + Drizzle ORM
- **Authentication**: Clerk
- **Payment System**: Stripe Connect
- **File Storage**: Cloudflare R2 / AWS S3
- **Responsive Design**: Adapted for various devices

## Core Features

### 1. Subscription System

| Plan | Price | Credits | Core Benefits |
|------|-------|---------|---------------|
| **FREE** | $0/FREE | 10 Credits (one-time bonus) | Basic content access, 1 download/call limit per day, personal learning only |
| **GO** | $9.9/month | 100 Credits/month (non-rollover) | Basic + Standard content access, unlimited downloads/calls (credit-based), personal use only |
| **PRO** | $29/month | 600 Credits/month | Full site access (including expert content), personal commercial use, priority support |
| **ULTRA** | $159/month | 1500 Credits/month | Full commercial license, API access, team collaboration tools, dedicated account manager |

### 2. Credit System

- Users receive credits through subscriptions
- Credits are used to purchase AI skills
- Creators earn credit income
- Credit withdrawal is supported

### 3. Creator Incentives

- First 100 creators get permanent 90% revenue share
- Dynamic rating and exposure mechanism
- Real-time earnings dashboard
- Skill version management

### 4. Platform Features

- **Skill Marketplace**: AI skill display, search, filtering
- **Seller Center**: Skill creation, management, earnings analysis
- **Buyer Center**: Skill purchase, usage, management
- **Subscription Management**: Plan upgrade, downgrade, renewal

## Project Structure

```
/app
├── (platform)        # Core business area
│   ├── dashboard     # Buyer center
│   ├── marketplace   # Skill marketplace
│   └── studio        # Seller center
├── pricing           # Subscription pricing page
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx          # Home Landing Page
└── middleware.ts
/components
├── /shared           # Business components
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
└── /ui               # Shadcn base components
/db                   # Drizzle Schema
/lib                  # Utility library
```

## Quick Start

### 1. Environment Requirements

- Node.js 18.17.0 or higher
- npm 9.6.7 or higher
- PostgreSQL 14.0 or higher

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file and add the following content:

```env
# PostgreSQL Database Connection
DATABASE_URL="postgresql://username:password@localhost:5432/ai-skills-shop"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

# Stripe Payment
STRIPE_SECRET_KEY="your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your-stripe-publishable-key"

# Cloudflare R2 / AWS S3
R2_ACCESS_KEY_ID="your-r2-access-key"
R2_SECRET_ACCESS_KEY="your-r2-secret-key"
R2_BUCKET_NAME="your-r2-bucket-name"
R2_ACCOUNT_ID="your-r2-account-id"
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Build Production Version

```bash
npm run build
```

### 6. Start Production Server

```bash
npm start
```

## Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure environment variables (same as `.env.local`)
3. Click "Deploy" button
4. Configure custom domain after deployment (optional)

### Database Configuration

1. Create database in PostgreSQL
2. Run database migrations:
   ```bash
   npx drizzle-kit push:pg
   ```

### Stripe Configuration

1. Create Stripe account
2. Configure Webhook endpoints
3. Get API keys and add to environment variables

## Business Model

### Revenue Sources

1. **Subscription Fees**: Users subscribe to different tier plans
2. **Transaction Fees**: Platform share of skill transactions
3. **Creator Membership**: Premium creator services

### Creator Revenue Share

- FREE plan creators: 50% revenue share
- GO plan creators: 40% revenue share
- PRO plan creators: 20% revenue share + private coaching
- ULTRA plan creators: 10% revenue share + dedicated account manager

## Technical Highlights

1. **Modern Architecture**: Next.js 15 App Router + TypeScript
2. **Performance Optimization**: Static generation, server components, client-side caching
3. **User Experience**: Dark theme, smooth animations, responsive design
4. **Security**: Clerk authentication, Stripe payment, data encryption
5. **Scalability**: Modular design, Serverless-first architecture

## License

MIT License - See [LICENSE](LICENSE) file


**AI Superpowers. On Demand.**
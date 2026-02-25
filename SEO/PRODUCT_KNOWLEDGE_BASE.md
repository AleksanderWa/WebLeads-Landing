# 🧠 WebLeads — Product Knowledge Base

## 1. Overview

**WebLeads** is a B2B lead generation tool that searches Google Maps for businesses based on location and category, then extracts useful contact information (emails, websites, social media links, etc.) to help users find and reach out to leads efficiently.

It’s designed for professionals and small business owners who need a practical, automated way to find qualified leads without relying on third-party workflow builders like Make.com.

---

## 2. Core Functionality

### Business Search
- Users specify a **location** and **business type/category** (e.g., “plumber in New York” or “marketing agency in Austin”).
- WebLeads crawls Google Maps to find all businesses matching the query.

### Data Extraction
For each business found, WebLeads collects:
- Business name  
- Address & location  
- Phone number  
- Website URL  
- Email addresses (via website crawling)  
- Social media links  
- Decision Makers (roles & names)

Playwright is used to navigate websites dynamically and extract data reliably.

### Email Enrichment & Verification *(planned / in development)*
- In-house pipeline using SMTP checks, catch-all detection, and heuristic hints.  
- No external email verification APIs.

---

## 3. Business Categories

There are **no predefined category limits**.  
Users can search for **any category or keyword** supported by Google Maps. This provides maximum flexibility and removes the need to maintain static category lists.

---

## 4. Target Users / Market

- **Lead generation agencies & marketers** who need bulk lead lists.  
- **SaaS founders & consultants** doing targeted cold outreach.  
- **Small business owners** looking for local partners, clients, or competitors.  
- **Anyone** who wants structured business contact data without building their own scraping infrastructure.

---

## 5. Pricing & Business Model

### Quota-Based Balance System
WebLeads uses a **quota-based balance system** with three independent quotas: **searches** (daily limit per plan), **DM unlocks** (monthly included + optional top-ups), and **email verifications** (monthly included + optional top-ups). Each action consumes from the corresponding quota. This replaced the previous credit-based model.

### Discover Plan (Trial)
- **Free**, no credit card required
- **Lifetime limits** (no daily/monthly resets): 2 searches total (max 200 results each), 10 DM unlocks, 20 email verifications
- All features enabled (email discovery, verification, DM unlocks)
- Once limits are exhausted, users must upgrade to a paid plan

### Paid Subscription Plans

| Plan | Price/Month | Results per Search | Daily Searches | DM Unlocks/Mo | Email Verifications/Mo | Notes |
|------|-------------|--------------------|----------------|---------------|------------------------|-------|
| **Starter** | $29 | 800 | 1/day | 50 | 500 | Entry for small agencies |
| **Growth ⭐** | $79 | 1,500 | 3/day | 200 | 2,000 | Best value, bulk operations |
| **Scale** | $149 | 2,500 | 7/day | 600 | 6,000 | White-label, priority support |

Daily search limit and results cap are defined per plan. Included DM unlocks and email verifications reset each billing period.

### Top-Up Packs (One-Time Purchase)
Users can buy one-time top-up packs via Stripe to supplement monthly allowances. **Purchased top-ups are valid 6 months** from purchase; after that, unused balance expires. Monthly included allowances reset each billing period.

**DM Unlock Top-Ups:** 10 ($2), 50 ($10), 100 ($18), 250 ($40)  
**Email Verification Top-Ups:** 50 ($4), 200 ($15), 500 ($35), 1,000 ($65)

Base unit pricing: DM unlock $0.25, Email verification $0.10. Larger packs offer volume discounts.

### How Quotas Work
- **Searches**: Daily limit from plan; resets every 24 hours (rolling window). Each search can return up to the plan’s results cap.
- **DM unlocks**: Monthly included amount from plan + optional purchased top-ups. Consumed when user unlocks a decision-maker’s email.
- **Email verifications**: Monthly included amount from plan + optional purchased top-ups. Consumed when verifying business emails.
- **Resets**: Discover has no resets (lifetime limits). Paid plans: search quota resets daily; DM and verification allowances reset monthly with the subscription period.
- **Top-up validity**: Purchased top-ups expire 6 months after purchase.

### Additional Pricing Notes
- **Decision-Makers**: Names + roles from company pages included in all plans
- **Pay-per-success**: Email verification charges only for valid, verified emails; failed lookups and bounced addresses cost $0
- **Export**: Unlocked results exportable to CSV; CRM integrations (coming soon)

## 6. Tech Stack

- **Backend:** Python + FastAPI
- **Frontend:** Deployed separately (Vercel)
- **Database:** PostgreSQL
- **Email:** Mailgun
- **Templating:** Jinja2
- **Scraping:** Playwright
- **Hosting:** Hetzner (for the app)
- **Payments:** Stripe (subscriptions & one-time top-ups)

---

## 7. Strategic Goals

- Build **free lead-gen tools** (no sign-up) to attract organic traffic and convert to paying users.  
- Offer a **paid version** with:
  - Bulk export  
  - Data enrichment  
  - Email verification  
  - Campaign tools
- Create a **scalable, self-hosted pipeline** for data collection and verification — no reliance on external SaaS tools.

---

## 8. Competitive Landscape & Positioning

### Key Competitors Analysis

#### Google Maps Scraping Tools

**1. Map Lead Scraper**
- **Type**: Chrome extension
- **Pricing**: Free (1,000 leads/month), Pro ($9.9-$19.9/month for 100,000 leads)
- **Features**: Extracts business data, emails, social media, phone numbers, reviews, ratings
- **Strengths**: Easy Chrome extension, unlimited exports, real-time scraping
- **Weaknesses**: Limited to Google Maps only, no API access, basic filtering

**2. Scrap.io**
- **Type**: Web-based SaaS platform
- **Pricing**: 7-day free trial, subscription-based (pricing not publicly available)
- **Features**: Real-time Google Maps scraping, advanced filtering (rating, website presence, etc.), 195 countries, 4,000+ categories
- **Strengths**: GDPR compliant, real-time data, advanced filters, trusted by enterprise (EDF, AXA, Allianz)
- **Weaknesses**: Higher cost, no transparent pricing, limited to Google Maps

**3. Leads Extractor**
- **Type**: Chrome extension
- **Pricing**: Subscription-based (transparent pricing not available)
- **Features**: Unlimited leads from Google Maps & Bing Maps, social media extraction, CRM integration
- **Strengths**: Unlimited leads, works with multiple map sources, 10,000+ customers
- **Weaknesses**: Chrome-only, no clear pricing transparency

#### Major B2B Lead Generation Platforms

**4. Apollo.io**
- **Type**: Comprehensive sales intelligence platform
- **Pricing**: Free tier, paid plans from $49-$99/user/month (with credits system)
- **Features**: 210M+ contacts, 35M+ companies, email/phone finding, CRM enrichment, AI assistants, call recording, workflow automation
- **Strengths**: Massive database, AI-powered features, comprehensive platform, strong integrations
- **Weaknesses**: Expensive for small teams, complex platform, not focused on local business data

**5. ZoomInfo**
- **Type**: Enterprise sales intelligence platform
- **Pricing**: Custom enterprise pricing (typically $10K+/year minimum)
- **Features**: 200M+ contacts, company data, intent signals, advanced filtering, API access
- **Strengths**: Enterprise-grade data quality, comprehensive company intelligence, advanced analytics
- **Weaknesses**: Very expensive, complex setup, not suitable for small businesses

**6. Lusha**
- **Type**: Contact information finder
- **Pricing**: Free tier, paid plans from $29-$99/month
- **Features**: Email/phone finding, LinkedIn integration, CRM enrichment
- **Strengths**: Affordable, easy to use, good for individual prospecting
- **Weaknesses**: Limited data sources, not comprehensive for business directories

### WebLeads Competitive Advantages

**1. Specialized Focus on Local Business Data**
- Unlike Apollo/ZoomInfo which focus on enterprise contacts, WebLeads specializes in local business discovery via Google Maps
- Unique value proposition for finding local service providers, retailers, and SMBs

**2. Transparent Quota-Based Pricing**
- Simple quota model: daily searches, monthly DM unlocks, monthly email verifications — each with clear limits and optional top-ups
- No hidden fees; pay-per-success for email verification (failed lookups cost $0)
- More affordable entry point than enterprise platforms

**3. Developer-First Approach**
- Built by developers for developers
- Self-hosted capabilities, no vendor lock-in
- API-first design for integration flexibility

**4. Google Maps Integration Advantage**
- Direct Google Maps scraping vs database-dependent competitors
- Real-time, fresh data vs potentially stale databases
- No reliance on third-party data providers

**5. Flexible Category Support**
- No predefined category limits vs competitors with fixed categories
- Users can search any Google Maps category

**6. Cost Advantage for Local Lead Generation**
- Significantly cheaper than enterprise platforms for local business prospecting
- Better suited for agencies, consultants, and small businesses targeting local markets

### Market Positioning

WebLeads positions itself as:

- **Practical & developer-built**: lean and focused on core functionality
- **Flexible**: users aren't locked into predefined categories or workflows
- **Affordable** alternative to expensive lead-gen platforms
- **Transparent** and built for people who value control over their data and processes
- **Specialized**: focused on local business discovery vs general B2B contact databases

### Target Market Differentiation

**Ideal for:**
- Lead generation agencies targeting local businesses
- SaaS founders doing local market research
- Small business owners finding local partners/suppliers
- Consultants building local client databases
- Marketing agencies creating hyper-local campaigns

**Not ideal for:**
- Enterprise sales teams (use Apollo/ZoomInfo)
- Companies needing national/international contact databases
- Teams requiring advanced CRM integrations and workflow automation

### Competitive Risks

1. **Platform Consolidation**: Larger players like Apollo could add Google Maps scraping
2. **Pricing Pressure**: Free tools could erode market for paid features
3. **Data Quality Concerns**: Google could restrict scraping access
4. **Competition from New Entrants**: Low barrier to entry for similar tools

### Growth Opportunities

1. **API Partnerships**: Integrate with CRM platforms for seamless workflows
2. **Vertical Specialization**: Create industry-specific templates and categories
3. **Enterprise Features**: Add team management, advanced analytics for larger customers
4. **International Expansion**: Support for non-US markets and local business directories


# 🧠 Ideal Customer Profile (ICP) — WebLeads

## Overview
WebLeads targets small agencies, founders, and SMBs that need **verified, structured, and up-to-date local business leads** — without paying enterprise prices or relying on clunky Chrome extensions.  
Our ICP sits between budget scraping tools (e.g., Scrap.io) and expensive enterprise platforms (e.g., Apollo), focusing on **local B2B data quality**, **automation**, and **ease of use**.

---

## 🎯 Primary Buyer Personas

- **Agency Owners / Lead Gen Professionals**
  - Run small marketing, SEO, or cold email agencies (1–20 people).
  - Need local business data at scale but don’t want to build or maintain scrapers.
  - Care deeply about email accuracy, structured contact info, and easy exporting.

- **SaaS Founders / Indie Hackers / Growth Marketers**
  - Use outbound campaigns to validate ideas, acquire early customers, or prospect niche verticals.
  - Typically technical or semi-technical — appreciate real-time scraping and API access.
  - Want quality data at a fair price, without enterprise lock-in.

- **Small Business Owners / Freelancers**
  - Look for local partners, B2B clients, or competitors.
  - Prefer simple quota systems and clear workflows over complex tools.
  - Value accuracy and simplicity.

---

## 🏢 Company Size
- Solo operators up to **~20-person teams**  
- Often bootstrap-funded agencies or small marketing teams

---

## 🌍 Geography
- **Primary:** US, Canada, UK, EU  
- **Secondary:** Australia, New Zealand, other English-speaking markets with strong SMB sectors

---

## 💼 Industries
- Local marketing & SEO agencies  
- Cold outreach / lead generation agencies  
- SaaS companies targeting SMB verticals  
- Service providers doing B2B partnerships (e.g., roofing → real estate)

---

## 🚀 Use Cases
- Bulk prospecting for cold email campaigns  
- Local market research and niche discovery  
- Competitor mapping  
- Building lead lists for outreach tools (Lemlist, Instantly, etc.)  
- Enriching existing lead lists with verified emails & decision-maker roles  
- White-labeling lead gen for client campaigns

---

## 👤 Buyer Roles
- **Decision makers:** Agency owners, founders  
- **Daily users:** Marketers, lead gen specialists  
- **Technical users:** Developers, growth hackers

---

## 💳 Spending Capacity
- Comfortable paying **$10–$50/month** with **optional quota top-ups** for campaigns  
- Agencies scaling up may spend **$50–$200/month**  
- Expect clear ROI — a small spend should generate meaningful deal flow

---

## 📝 Why This ICP Fits WebLeads

| Attribute | WebLeads Strength |
|----------|-------------------|
| Needs local B2B data | Real-time Google Maps scraping |
| Email accuracy matters | Planned verification pipeline |
| Prefers automation | Queue-based system, no Chrome extensions |
| Price sensitive but quality focused | Transparent pricing, no enterprise bloat |
| Technical or semi-technical | API-friendly, CSV/JSON export |

---

## 🟡 Secondary ICP (Future Potential)
- Mid-sized agencies (20–100 ppl) needing:
  - Faster processing queues
  - Team workspaces / multi-user access
  - Deeper integrations (webhooks, Zapier, Make)

---

## 🧭 Strategic Positioning
> “WebLeads serves agencies, founders, and SMBs who need **verified, structured, and fresh local business contact data**, without the complexity or cost of enterprise platforms. We offer automation, reliability, and actionable data for teams that want to move fast and grow.”



# WebLeads Competitor Analysis

## Overview
This document compares WebLeads with key competitors in the B2B lead generation and Google Maps scraping space. It highlights pricing, features, and unique selling points (USPs).

---

## 1. Pricing Comparison

| Platform        | Price / Month | Price per 1,000 Leads | Email Verification | Notes |
|----------------|---------------|----------------------|-------------------|-------|
| **WebLeads**   | $0 – $149     | Quota-based (see plan limits) | ✅ Pay-per-success | Discover trial + Starter/Growth/Scale; daily searches, DM unlocks & verifications; top-ups 6-month validity |
| Map Lead Scraper | $9.90 – $19.90 | $0.10 – $0.20       | ❌ None | Browser extension, basic Google Maps data, 100k/month limit |
| Scrap.io       | $35 – $499    | $3.45 – $4.95        | ❌ None | Advanced filtering, global coverage, monthly billing expensive |
| Leads Extractor | Subscription | N/A                  | ❌ None | Multi-map sources, social media extraction |
| LeadSwift      | $24.99 – $99.99 | ~$10+             | ❌ None | Multi-source, outreach automation, daily search limits |
| Outscraper     | Pay-per-use   | $2.85 + $5 verify    | $5.00/1k | API-first, technical users, expensive email verification |
| Apollo.io      | $49 – $149/user | $20+                | Included | Enterprise B2B database, AI features, CRM integration |

---

## 2. Feature Comparison

Comparing highest-tier plans across platforms

| Feature | WebLeads<br />(Growth Plan) | LeadSwift<br />(Agency) | Map Lead Scraper | Scrap.io<br />(Agency) | Outscraper | Apify<br />(Business) | Apollo.io |
|---------|---------------------------|------------------------|------------------|----------------------|------------|----------------------|-----------|
| **Monthly Price** | $79<br />(Growth – best for agencies) | $99.99<br />(Agency) | $19.90<br />(Pro Monthly) | $199<br />(Agency) | $2.85/1k<br />(Pay-per-use) | $2.10/1k base<br />+ $5.05/1k add-ons<br />($7.15/1k total) | $49-$149/user/month |
| **Quotas / Limits** | 3 searches/day, 1,500 results/search<br />200 DM unlocks, 2,000 verifications/mo | 20 searches/day<br />(Unlimited leads per search) | 100,000/month<br />(Fixed limit) | 40,000/month<br />(Agency tier) | Pay-per-use<br />(500 free/month) | $39 credits<br />(Then pay-as-you-go) | Plan-limited credits |
| **Cost per 1,000 Leads** | Quota-based; top-ups from $2 (DM) / $4 (verifications) | ~$5.00<br />(Agency plan) | $0.20<br />(100k monthly plan) | $4.98<br />(40k credits) | $2.85<br />(After free tier) | $7.15<br />(With decision makers) | $20+ |
| **Business Phone Numbers** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Email Addresses** | ✅ Yes<br />(All related company pages) | ✅ Yes | ✅ Yes | ✅ Yes<br />(Google Maps only) | ✅ Yes | ✅ Yes | ✅ Yes |
| **Decision-Maker Data** | ✅ **Roles & Names**<br />(Emails Coming Soon) | ✅ Roles & Names & emails | ❌ Not included | ❌ Not included | ❌ Not included | ✅ $4.00/1k extra | ✅ Yes |
| **Free Plan Available** | ✅ Discover: 2 searches, 10 DM, 20 verifications (lifetime) | ✅ 7-day free trial | ✅ 1,000 leads/mo | ✅ 100 leads trial | ✅ 500 free | ✅ Free trial | ✅ Free tier |
| **Limited Searches** | ✅ Daily quota per plan (1–7/day) | ❌ 20/day | ❌ Limited | ❌ Pay-per-use | ❌ Pay-per-use | ❌ Pay-per-use | N/A |
| **Pay Per Lead** | Quota + top-ups (6-month validity) | ❌ Per Search | ✅ YES | ✅ YES | ✅ YES | ✅ YES | N/A |
| **Email Verification** | 🔄 Coming soon | ❌ None | ❌ None | ❌ None | ✅ $5.00/1k | ❌ None | ✅ Included |
| **Automation & API** | 🔄 Coming soon | ✅ API + Email automation | ❌ None | ✅ API access | ✅ API + webhooks | ✅ API + integrations | ✅ Yes |

---

## 3. Notes on WebLeads Advantages

- **Decision-makers names + roles** from company pages — unique among SMB-focused Google Maps scrapers (only LeadSwift has similar feature)  
- **Email verification coming soon**, giving higher-quality leads (vs Outscraper's $5/1k emails)  
- **Flexible categories**: Users can search any Google Maps business type, no fixed categories  
- **Competitive pricing**: Growth tier at $79/mo with 3 searches/day (1,500 results each), 200 DM unlocks, 2,000 verifications — transparent quotas and top-ups (vs competitors at $3–10/1k or opaque pricing)  
- **Queue system for Growth tier** allows up to 3 concurrent searches, better than daily search limits (LeadSwift: 5/day)  
- **Deep website crawling** using Playwright for email extraction (not just homepage scraping)  
- **API + Webhooks coming soon**: Will match enterprise competitors while maintaining affordable pricing

---

## 4. Strategic Positioning

| Aspect                     | Positioning / Advantage |
|-----------------------------|-----------------------|
| Pricing                     | Affordable, transparent, best value per 1,000 leads in SMB/local niche |
| Data Quality                | Real-time scraping, verified emails, decision-makers roles & names |
| Target Audience             | SMBs, agencies, consultants, SaaS founders |
| Differentiator              | Focused on local businesses, high-quality leads, flexible search, queue system |
| Competitor Gap              | Enterprise platforms (Apollo, ZoomInfo) are expensive & overkill for local lead gen; cheap Chrome extensions lack data quality |


# PRD Update: Data Source Clarification

**Date:** October 6, 2025  
**Status:** ✅ Complete

---

## 🎯 What Was Changed

### Updated PRD to Clarify Multi-Source Data Collection

**Previous messaging:** "Search Google Maps and enrich with emails"  
**New messaging:** "Search Google Maps + enrich from company websites"

---

## 📊 Data Sources Breakdown

### Source 1: Google Maps
**What we get:**
- ✅ Business listings (name, type, category)
- ✅ Phone numbers (main business lines)
- ✅ Addresses (full street address)
- ✅ Business hours
- ✅ Ratings and reviews
- ✅ Website URLs
- ✅ Photos

### Source 2: Company Websites
**What we get:**
- ✅ Email addresses (info@, contact@, owner emails)
- ✅ Social media profiles (LinkedIn, Facebook, Twitter, Instagram)
- ✅ Decision maker information (owner names, manager names, roles)
- ✅ Additional contact details
- ✅ Company descriptions

### Source 3: Public Sources (LinkedIn, etc.)
**What we get:**
- ✅ Decision maker roles and titles
- ✅ LinkedIn profiles
- ✅ Professional information

---

## 📝 Updated Sections in PRD

### 1. Product Overview (Lines 29-47)
**Added clarification:**
- "Enriches Contact Data - Automatically extracts and enriches from multiple sources"
- Each data point now specifies where it comes from:
  - Phone numbers: "from Google Maps"
  - Emails: "from company websites & public sources"
  - Decision makers: "from company pages & LinkedIn"
  - Social profiles: "from company websites"
  - Business details: "from Google Maps"

**New "Key Differentiator" section:**
```
WebLeads is a real-time search and enrichment engine that:
1. Searches Google Maps to find businesses matching your criteria
2. Enriches from company websites to extract emails, social profiles, and decision maker information
3. Verifies all data to ensure accuracy and deliverability
4. Returns fresh results every time you search - no stale data from months-old databases
```

---

### 2. Template 1: Industry Leads Landing Page (Lines 659-693)

**Updated Hero Section:**
- Subtitle now says: "...then we automatically enrich with verified emails, phone numbers, and decision maker info **from company websites**."
- Badge updated: "Real-time from Google Maps + company websites"

**Updated "How It Works" (4 Steps):**
1. **Search Google Maps** - Enter industry and location to find businesses
2. **We Enrich the Data** - Automatically extract emails, phone numbers, and decision maker info **from Google Maps + company websites**
3. **Filter & Export** - Filter by criteria and export verified contacts to CSV
4. **Start Your Outreach** - Use the enriched data for cold email, calling, or partnership campaigns

**New "Data Sources Section":**
- Explain how we get data:
  - **Google Maps:** Business listings, phone numbers, addresses, ratings, reviews
  - **Company Websites:** Emails, social profiles, decision maker information
  - **Public Sources:** Additional enrichment data
- Why our data is fresh (real-time search, not static database)
- Data verification process (email verification, phone validation)

---

### 3. Template 7: Tool Landing Page (Lines 846-866)

**Updated Hero Section:**
- Subtitle now says: "...then enrich with verified emails, phone numbers, and decision maker info **from company websites**."
- Badge updated: "Real-time from Google Maps + company websites"

**Updated "What Makes WebLeads Different":**
- Changed from "Automatic Enrichment" to **"Multi-Source Enrichment"**
- Description: "Phone numbers from Google Maps → enriched with emails, social profiles, decision makers **from company websites**"

**Updated "How It Works" (4 Steps):**
1. **Search Google Maps** - Enter business type + location
2. **We Find Businesses** - WebLeads searches Google Maps in real-time
3. **We Enrich from Multiple Sources** - Automatically extract:
   - Phone numbers & business details **from Google Maps**
   - Emails, social profiles & decision makers **from company websites**
   - Verify all data for accuracy
4. **Export Everything** - Download all enriched data to CSV

---

## 🎯 Key Messaging Points

### For ALL Landing Pages:

**✅ DO SAY:**
- "Search Google Maps, then enrich from company websites"
- "Multi-source enrichment: Google Maps + company websites"
- "Phone numbers from Google Maps, emails from company websites"
- "Real-time search and enrichment engine"
- "Fresh data from Google Maps and company pages"

**❌ DON'T SAY:**
- "All data comes from Google Maps" (inaccurate)
- "Google Maps database" (implies static database)
- "We scrape Google Maps for emails" (emails come from company websites)

---

## 💡 Why This Matters

### 1. Accuracy
- Google Maps doesn't have email addresses or decision maker info
- This clarification sets correct expectations

### 2. Transparency
- Users understand where their data comes from
- Builds trust by being transparent about sources

### 3. Value Proposition
- "Multi-source enrichment" sounds more valuable than just "Google Maps scraper"
- Shows we're doing more work than competitors

### 4. Legal/Compliance
- Important to accurately represent data sources
- Helps with terms of service and privacy policy

---

## 🚀 Next Steps

### For Existing Pages (Already Built):

1. **`/business-phone-numbers/page.tsx`** ✅
   - Update hero subtitle to include "from company websites"
   - Update "How It Works" section
   - Update badge if needed

2. **`/email-verification-tool/page.tsx`** ✅
   - Update hero subtitle
   - Update "What Makes WebLeads Different" section
   - Update "How It Works" section

3. **`/real-estate-leads/page.tsx`** (if built)
   - Same updates as above

### For Future Pages:

**Use the updated PRD templates** which now include:
- Multi-source messaging in hero section
- Clarified "How It Works" steps
- Updated "Data Sources" section
- "Multi-Source Enrichment" in differentiator sections

---

## 📋 Summary

**Changed:**
- ✅ Product overview now specifies data sources for each data point
- ✅ Hero sections updated to mention "company websites"
- ✅ "How It Works" sections clarify multi-source enrichment
- ✅ Added "Data Sources Section" to Template 1
- ✅ Changed "Automatic Enrichment" to "Multi-Source Enrichment"

**Why:**
- Accuracy: Google Maps doesn't have emails/decision makers
- Transparency: Users know where data comes from
- Value: Shows we do more than just scrape Google Maps
- Legal: Important for compliance and terms of service

**Impact:**
- Better customer expectations
- More accurate marketing
- Stronger value proposition
- Legal compliance

---

**Status:** PRD updated with multi-source data clarification! 🎉

# Educator-First Marketing Review (Teacher-Gamer)

This document is a marketing-focused review of the current site with **educators / teacher-gamers** as the primary audience (not districts/schools). It’s written as a **prioritized punch-list** you can turn into edits.

## Primary positioning (what the site should say in 5 seconds)

### The one-liner
**Teacher-Gamer trains educators to run safe, classroom-ready tabletop RPG experiences that build SEL, literacy, collaboration, and critical thinking—step-by-step (even if you’ve never GM’d).**

### What to avoid (current mismatch)
Your current home hero reads **parent/kids-first** (“A Safe Space for Kids to Play & Learn”), which makes educators hesitate or bounce because they can’t quickly answer “Is this for me?”

## The main conversion path (recommended)

### Goal
Move an educator from curiosity → trust → “I can do this” → enrollment/book/call.

### Suggested CTA ladder
- **Primary CTA (high intent)**: “View Certification Path” / “Explore Courses”
- **Secondary CTA (low friction)**: “Watch a 3‑minute overview” OR “Download a free starter kit”
- **Tertiary (supporting)**: “Read the methodology” (About) / “See examples” (Media)

## Highest-impact fixes (do these first)

### 1) Make the home hero educator-first
File: `src/components/home/hero-section/CombinedHeroSection.tsx`

#### Option A (certification / confidence)
- **Headline**: “Become a Certified Teacher‑Gamer.”
- **Subhead**: “Learn to run classroom‑ready tabletop RPG experiences that build SEL, literacy, and critical thinking—step‑by‑step, even if you’ve never GM’d.”
- **Primary CTA**: “Explore Certification”
- **Secondary CTA**: “Watch How It Works”

#### Option B (method + outcome)
- **Headline**: “Teach with RPGs. On purpose.”
- **Subhead**: “A practical training path for educators who want deeper engagement, collaboration, and learning—without extra screen time.”

#### Option C (teacher-gamer identity)
- **Headline**: “Level up your teaching—and your GM skills.”
- **Subhead**: “Turn tabletop RPGs into a repeatable classroom method with templates, facilitation moves, and SEL‑aligned practices.”

**Key improvement:** add a clear qualifier line near the headline:
> “For educators, facilitators, and teacher‑gamers (10+ learners).”

### 2) Add “decision info” to course cards (so educators can choose fast)
File: `src/components/home/courses/CoursesSection.tsx`

Each course card should include:
- **Time**: “6 weeks • 24 hours” (or your best estimate)
- **Format**: "In person and Online courses available"
- **Starting price**: “Starts at $299” (or “From $___”)
- **Outcome line**: “By the end, you can run a 6‑week pilot.”

Right now, pricing/durations exist mostly in FAQ; bringing them into the course section will increase clicks and reduce “research fatigue.”

### 3) Fix trust killers: contact + placeholder links

#### Contact form currently “simulates” a send (lead killer)
File: `src/app/contact/page.tsx`

It uses a timeout and always shows success, which can feel fake if tested. Replace with a real submission path (email service, form endpoint, or CRM).

#### Social links + email include placeholders
File: `src/components/home/contact/ContactSection.tsx`

Examples:
- `https://facebook.com`, `https://twitter.com`
- `mailto:contact@example.com`

Replace with the real teacher-gamer accounts + real email (or remove icons until real).

## Improve clarity and conversion by section

### Testimonials (keep, but make them “educator proof”)
File: `src/components/home/testimonials/TestimonialsSection.tsx`

What works:
- Strong qualitative outcomes (confidence, initiative, critical thinking).

What to tighten:
- Add more **educator roles** (e.g., “5th grade teacher”, “SEL coordinator”, “Homeschool educator”).
- Add at least **1–2 short quantifiable wins** if real (“engagement improved”, “writing length increased”, etc.).
- Consider a small CTA under testimonials:
> “See the certification path →”

### Substack section (content is good; list growth needs an opt-in)
File: `src/components/home/substack/SubstackSection.tsx`

Currently: shows latest posts, but doesn’t clearly capture emails.

Add:
- A simple promise statement:
> “Weekly facilitation moves + classroom RPG prompts.”
- A **subscribe CTA** (embed form or a button that opens your Substack signup).

### Booking section (rename + clarify the offer)
File: `src/components/home/calendar/CalendarBookingSection.tsx`

“Schedule a Session” is vague. For educators, say what the call/session is:
- “Book a 15‑minute Intro Call” OR “Book a Demo Session”
- Add 2–3 bullets:
  - “We’ll match you to the right level”
  - “You’ll leave with a first-session plan”
  - “No prior GM experience required”

### About page (strong story; add a conversion block earlier)
File: `src/app/about/page.tsx`

Add a mid-page conversion block:
- “Start with Level 1” + “Watch overview” + “Get free starter kit”

## Shop page (good structure; clarify what each button buys)
File: `src/app/shop/page.tsx`

Current risk:
- “Buy Now” and “Buy The PDF” call the same checkout handler, which can confuse buyers and increase refunds.

Marketing improvements:
- Clearly label **formats**: PDF vs physical vs bundle.
- Add a “What you get immediately” line:
> “Instant download (PDF) + updates included.”
- If reviews (“4.9/5 from 200+ educators”) are real, link to proof; otherwise soften the claim.

## Navigation and naming improvements (educator language)
File: `src/components/header.tsx`

Quick wins:
- Rename **Training → Certification** (stronger intent + clarity).
- Consider adding a “Start here” link (mini guide page or anchored section).

## Proof and claims: make everything defensible
Files: `src/app/faq/page.tsx`, `src/app/map/page.tsx`

### FAQ
Your FAQ includes big claims (e.g., “10K+ students”, “24/7 support”, “free trial”, dashboards like “My Courses / My Downloads”). If any are not true **today**, rewrite to:
- “We aim to…” / “Coming soon” / “In beta”
- Or remove until ready

### Map page
It uses dummy teacher names/avatars. That can read as fabricated social proof unless labeled clearly:
- “Sample map (demo)” or “Community vision”
- Or replace with anonymized, permissioned data

## Footer: add trust links (minimum set)
File: `src/components/footer.tsx`

For an educator product involving payments and kid-facing contexts, add:
- Privacy
- Terms
- Refund policy
- Contact
- “Safety & facilitation standards” (even a simple page)

## Recommended 7-day rollout (educator-first)

### Days 1–2 (highest conversion lift)
- Update hero headline/subhead to educator-first + CTA ladder
- Replace placeholder socials/email or remove until real

### Days 2–3 (reduce friction)
- Add “time / price / outcome” to course cards
- Add “Which level is right for me?” mini block on home

### Days 3–4 (trust + proof)
- Tighten testimonials: educator roles + specific outcomes
- Ensure FAQ claims match reality

### Days 5–6 (lead generation)
- Add a lead magnet for educators:
  - “First Session Pack” (lesson plan + safety norms + printable tools)
- Add Substack subscribe CTA (not just posts)

### Day 7 (polish)
- Footer trust links
- Make booking section specific (intro call vs demo)

## Copy bank (ready-to-paste snippets)

### Micro-qualifier lines
- “For educators, facilitators, and teacher‑gamers.”
- “No GM experience required.”
- “SEL + literacy + collaboration, delivered through tabletop play.”

### “Which level is right for me?”
- **Intro**: “New to facilitation? Start here.”
- **Level 1**: “Run your first pilot session series with confidence.”
- **Level 2**: “Build your own campaign world + classroom implementation.”
- **Level 3**: “Align campaigns to learning objectives and assessment.”

### Short trust statements (only if true)
- “Lifetime access to course materials + updates.”
- “30‑day money‑back guarantee.”
- “Small cohort support.”

---

If you want, I can turn this into a second doc with **exact rewritten hero + course card copy + CTA text** (2–3 variants) so you can copy/paste into components quickly.


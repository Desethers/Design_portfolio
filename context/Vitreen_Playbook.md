# Vitreen Product Principles

This document is the source of truth for future work on Vitreen and Gallery OS. Use it to guide product decisions, copy, interface details, portfolio framing, and feature naming.

## Product Definition

Vitreen is the product brand.

Gallery OS is the operational and technical layer inside Vitreen.

Vitreen is a premium digital infrastructure for galleries. It is not a CMS, CRM, marketplace, website builder, or generic software product. Its purpose is to help artwork data circulate across the tools, conversations, and sales situations galleries already use.

The visible website is one output. The real product is the operational layer connecting artwork records, inventory data, collector communication, private selections, publishing flows, and sales follow-up.

## Positioning

Vitreen should be positioned as a Digital Sales Partner for galleries.

It is built around existing gallery operations and supports artists, galleries, collectors, and sales teams through:

- artwork circulation
- private presentation
- collector follow-up
- publishing
- sales preparation

Gallery OS is the internal workspace and source of truth for artwork records. It should feel calm, editorial, and operational, not like a generic dashboard.

## Product Architecture

Vitreen is made of connected surfaces:

### Gallery OS

The internal workspace where galleries manage artwork records, artists, images, documents, availability, status, notes, and commercial context.

### Gmail Add-in / Chrome Extension

A Gmail-side interface connected to Gallery OS. It lets a gallery search artworks and insert a gallery-grade artwork card into an email body without copying data by hand.

### Private Selections

Collector-facing private selections generated from the same artwork records. These should feel curated, not transactional.

### Website Publishing

Public pages and viewing rooms generated from the same artwork data. The website is the public facade, not the whole product.

### Sales Agent

An assistant that prepares draft replies for incoming collector inquiries. It can suggest available works, insert relevant context, and prepare a typed response.

The gallery always validates, edits, and sends. The agent prepares; it does not replace the relationship.

### Collector Relationship Layer

A layer that helps galleries remember context, follow up, and continue conversations without reducing collectors to generic CRM records.

## Core Principles

### Build Around Existing Gallery Habits

Do not force galleries to migrate everything before they see value. Vitreen should connect to the way they already work.

### One Artwork Record, Many Outputs

A single artwork record should feed Gmail, private selections, PDFs, website pages, and sales workflows.

### Data Should Move, Not Users

The gallery should not have to jump across tools to reuse the same information.

### Automate Preparation, Not Relationships

The art market depends on trust, access, taste, discretion, and human judgment. AI can prepare, suggest, structure, and draft. It should not decide or send on behalf of the gallery.

### Preserve The Gallery's Commercial Tone

Every output should feel curated, precise, and gallery-grade.

### Avoid Dashboard Inflation

Do not add panels, charts, or controls unless they help a gallery prepare, present, send, publish, or follow up.

### Make Operational Work Feel Premium

Inventory, email replies, selections, and PDFs are not back-office details. They influence perceived value.

## Art Market Assumptions

Use these assumptions when making product, UX, and copy decisions:

- galleries sell through relationships, not only transactions
- collectors often inquire before buying
- prices are often selectively disclosed
- trust and discretion matter
- collectors may need context, provenance, availability, installation images, condition, dimensions, or price, but not always all at once
- sales teams often work from email, WhatsApp, PDFs, cloud folders, CRMs, and spreadsheets
- artwork data is often fragmented
- updating the same information in multiple places creates errors and delays
- gallery websites are often maintained externally and are not always connected to daily sales work
- physical viewing remains important, but digital presentation shapes desire before the visit
- the system should support human follow-up instead of replacing it

## UX Principles

### Gallery OS

- calm interface
- editorial spacing
- low visual noise
- strong hierarchy between artwork image, metadata, status, and actions
- useful actions only: prepare selection, insert into email, publish, update status, attach document, follow up

### Gmail Add-in

- keep the gallery inside Gmail
- make artwork search fast and lightweight
- require minimal interaction to insert an artwork
- generate a premium artwork card inside the email body
- avoid making the message feel automated or ecommerce-driven

### Private Selections

- feel curated, not transactional
- emphasize artworks, context, and presentation rhythm
- allow selective disclosure of price and availability
- maintain the gallery's voice

### Sales Agent

- prepare a typed draft
- show why works were suggested when useful
- create a notification for gallery validation
- never auto-send
- keep the gallery in control of tone, selection, and timing

## Vocabulary

Prefer:

- artwork
- inventory
- collector
- inquiry
- selection
- gallery operations
- artist records
- sales follow-up
- private presentation
- publishing
- available works
- artwork data
- relationship

Avoid:

- seamless
- powerful
- all-in-one
- platform
- streamline
- optimize
- revolutionary
- AI-powered
- frictionless
- CMS
- CRM
- dashboard-first

Preferred claims:

- Built around how galleries already work.
- One artwork record can serve multiple surfaces.
- Automate preparation, not the relationship.
- Keep the gallery in control.
- Turn artwork data into presentations, replies, selections, and live pages.
- Make the operational layer visible through better collector-facing experiences.

Avoid generic claims:

- Manage everything in one place.
- Boost productivity.
- Sell more with AI.
- Transform your business.
- The future of galleries.

## Interface Direction

Vitreen should feel:

- premium
- quiet
- editorial
- precise
- operational
- trustworthy

It should not feel:

- generic SaaS
- ecommerce
- marketplace
- over-automated
- dashboard-heavy
- startup flashy

Visual direction:

- generous white space
- strong typography
- restrained borders
- soft cards only when useful
- artwork-first layouts
- metadata secondary but readable
- action surfaces discreet and clear

## Feature Notes

### Gmail Add-in

Describe it as a way to insert a gallery-grade artwork card directly into a collector email from Gallery OS data.

### Sales Agent

Describe it as an assistant that prepares collector replies. Do not describe it as a chatbot or autonomous sales rep.

### Private Selections

Describe them as curated sales surfaces. Do not describe them as shopping carts or ecommerce pages.

### Website Publishing

Describe it as the public facade powered by the same artwork data. Do not describe it as a website builder.

### Gallery OS

Describe it as the internal operating layer of Vitreen.

## Portfolio Framing

When documenting Vitreen in a product design portfolio, emphasize:

- product strategy
- design system logic
- operational workflows
- AI-native product building
- end-to-end design and build
- art-market specificity
- how one artwork record circulates across several surfaces

Relevant build metrics may include:

- AI tokens consumed
- Codex sessions
- prompt iterations
- interface iterations
- concept-to-prototype time
- number of connected surfaces
- number of metadata fields
- number of generated drafts
- number of tested flows

Use metrics carefully. Do not invent business impact unless it has been measured.

## How Future Codex Sessions Should Use This

Before changing Vitreen copy, UI, feature naming, or case study structure:

1. Check whether the change supports artwork data circulation.
2. Keep the gallery in control of commercial tone and timing.
3. Avoid generic software claims and dashboard-first language.
4. Prefer operational clarity over broad product slogans.
5. Treat every surface as part of one artwork-centered system.

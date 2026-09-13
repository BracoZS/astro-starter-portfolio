---
title: Studio OS
summary: An internal tools platform that replaced six disconnected spreadsheets with one system the whole team trusted.
role: Lead Product Designer & Frontend Engineer
date: 2026-04-01
tags: [Product Design, Astro, TypeScript, Design Systems]
url: https://example.com
repo: https://github.com/your-username/studio-os
featured: true
draft: false
---

Studio OS started as a two-week audit: where was the team actually losing time? The answer was context-switching between a spreadsheet for scheduling, a spreadsheet for billing, and a Slack channel that functioned as an ad-hoc support queue.

I designed and built a single internal app that combined all three, with permissions and a real audit trail. The interface borrows the density of a spreadsheet where that helps (the scheduling grid) and abandons it where it doesn't (a guided flow for one-off billing exceptions).

**What shipped**

- A scheduling grid with drag-to-reassign and conflict detection
- A billing module with exception handling, replacing manual overrides
- A component library shared across both, documented for the next person who touches this code

**Result:** the team retired three spreadsheets and a shared inbox in the first month. The biggest win wasn't a metric — it was that support requests about "where is X" dropped to nearly zero, because there was only one place to look.

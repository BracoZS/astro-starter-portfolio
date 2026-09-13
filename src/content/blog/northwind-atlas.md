---
title: Northwind Atlas
summary: A live routing dashboard for a regional delivery fleet, built to stay readable with 40+ vehicles on screen at once.
role: Frontend Engineer
date: 2025-11-12
tags: [Data Visualization, React, Mapbox]
repo: https://github.com/your-username/northwind-atlas
featured: true
draft: false
---

Northwind's dispatch team was running routes from a paper board and a radio. Atlas gives them a live map instead, but the real work was deciding what _not_ to show.

Early versions tried to surface every signal — speed, fuel, delay risk, customer notes — at once, and dispatchers said it felt like staring at a cockpit. I cut the default view down to position, route, and a single delay indicator, with everything else available on click.

**Notable details**

- Custom marker clustering so the map stays legible at fleet scale
- A keyboard-first command palette for dispatchers who don't want to touch the mouse
- Offline-tolerant state, since depot wifi drops constantly

Built with React and Mapbox GL, with a small Node service translating raw GPS pings into the simplified events the frontend actually needs.

---
title: Fieldnote
summary: A minimal, offline-first notes app for researchers doing interviews away from reliable internet.
role: Independent / Side Project
date: 2025-06-20
tags: [Svelte, PWA, IndexedDB]
url: https://example.com
repo: https://github.com/your-username/fieldnote
featured: false
draft: false
---

A friend doing field interviews for her thesis kept losing notes to apps that silently required a connection to save. Fieldnote is the opposite: it assumes you're offline by default and syncs opportunistically when a connection shows up.

Notes are timestamped and tagged locally, stored in IndexedDB, and synced through a conflict-resolution layer that favors "keep both" over silently overwriting anything — for interview notes, losing data is worse than a duplicate.

It's a small project, but it taught me more about offline-first architecture than anything else I've built, and it's still the note-taking app I reach for personally.

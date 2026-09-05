# SITE_BLUEPRINT.md

## Working concept

A personal history publication with a strong Sabah / Southeast Asia identity.

The site should be able to cover both:
- local history with deep context
- unrelated historical stories the creator finds fascinating, strange or dark

Do not lock the brand so tightly to Sabah that other history feels out of place.

---

# Suggested information architecture

## Main navigation

### Home
Featured stories, latest articles, and one strong "Start here" history path.

### Sabah
North Borneo, colonial history, WWII, Malaysia formation, local places, people and forgotten events.

### Southeast Asia
Malaya/Malaysia, Singapore, Brunei, Indonesia, Philippines, regional wars and decolonisation.

### War & Conflict
WWII, occupation, resistance, Konfrontasi, POW stories.

### Dark History
Atrocities, disasters, occupation, massacres, political violence and difficult stories.
Use respectful presentation, not horror-clickbait.

### Timelines
Interactive or readable chronological collections.

### Maps
Future feature for geographic storytelling.

### About
Explain that the site began from a love of history and a desire to preserve and share stories connected to home.

---

# Recommended content model

Each article should have metadata similar to:

```yaml
title:
slug:
summary:
period:
location:
categories:
tags:
people:
status: draft
last_fact_checked:
sensitivity:
hero_image:
sources:
```

Possible status values:
- notes
- draft
- fact-check
- reviewed
- published

---

# First 10 articles

## 1. Malaya Was Not Malaysia
**Angle:** Why 31 August 1957 and 16 September 1963 are different.

## 2. Before Sabah Was Sabah
**Angle:** Brunei, Sulu, Overbeck, Dent and the making of British North Borneo.

## 3. A Company Once Governed North Borneo
**Angle:** How the British North Borneo Chartered Company functioned almost like a government.

## 4. Why Brunei Did Not Join Malaysia
**Angle:** Oil is only part of the story; sovereignty and the Sultan's position mattered too.

## 5. Why Singapore Joined Malaysia — Then Left
**Angle:** Merger was initially desirable; separation came from political, communal and economic breakdown.

## 6. Why Indonesia Tried to Stop Malaysia
**Angle:** Konfrontasi from both Sukarno's anti-colonial framing and regional-power perspective.

## 7. The Philippines and Sabah
**Angle:** Explain the Sulu connection, the 1878 instrument, and why the sovereignty claim remains contested.

## 8. When Japan Came to North Borneo
**Angle:** How Japan's wider Southeast Asian campaign reached Sabah.

## 9. From Singapore to Sandakan
**Angle:** How POWs captured at Singapore ended up building an airfield in North Borneo.

## 10. The Sandakan Death Marches
**Angle:** A careful, human-centred account with route, conditions, local geography and survivor stories.

---

# Strong recurring features

## "In one minute"
A short summary at the top of longer articles.

## "Why this happened"
A dedicated causal explanation.

## "What people often get wrong"
Useful for:
- 1957 vs 1963
- Singapore being simply "kicked out"
- Brunei staying out only because of oil
- the 1878 "lease vs cession" slogan
- WWII damage being attributed only to one side

## "Primary source"
Highlight one original treaty, map, telegram, proclamation, photograph or report.

## Timeline
Compact event chronology at the bottom.

## "Where this happened"
Later: map component.

## "From the archive"
Later: original historical photographs with proper rights/credits.

---

# Visual direction

Avoid a generic beige "old paper" history aesthetic everywhere.

A stronger direction:

- modern editorial layout
- dark charcoal / warm neutral base
- restrained archival accents
- large historical photography
- maps and timelines
- serif display type paired with clean sans-serif body type
- source cards that look intentional rather than academic footnotes
- mobile-first reading experience

Dark articles can feel sombre without making the whole website look like a horror site.

---

# Future video workflow

For each publishable article, optionally create:

```text
article.mdx
research.md
video-script.md
visual-shot-list.md
sources.md
```

Video scripts should contain:

- hook
- setup
- chronological narrative
- turning point
- consequence
- closing thought
- source notes
- visual suggestions

This makes one piece of research reusable across:
website -> long video -> short video -> social post.

---

# Development priorities for Claude Code

## Phase 1
- choose stack
- create content model
- build homepage
- build article template
- build category pages
- implement citations/source section
- implement responsive typography

## Phase 2
- timelines
- maps
- article search
- related stories
- people/place indexes

## Phase 3
- visual essays
- interactive map stories
- video pages
- newsletter/RSS if desired

Do not overbuild a CMS at the beginning.
A Markdown/MDX content repository is likely enough for the first version.

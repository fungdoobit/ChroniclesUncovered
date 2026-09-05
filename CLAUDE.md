# CLAUDE.md

## Project purpose

This is a personal history website focused on history the creator finds genuinely interesting, especially:

- Sabah and North Borneo history
- Malaysian and Malayan history
- Southeast Asian history
- colonialism and decolonisation
- World War II in Southeast Asia
- dark, tragic, disputed, overlooked, or locally significant history
- stories connected to the creator's hometown and home state
- eventually adapting selected articles into video scripts

The site should feel like it was made by someone who loves history, not like a generic school textbook or SEO content farm.

## Editorial principles

1. **Accuracy before drama.**
   Dark or shocking history can be compelling without exaggeration.

2. **Explain causes, not just dates.**
   Every article should answer:
   - What happened?
   - Why did it happen?
   - Who wanted what?
   - What changed because of it?
   - Why does it still matter?

3. **Distinguish evidence levels.**
   Clearly label:
   - established fact
   - mainstream historical interpretation
   - disputed claim
   - political/legal position
   - legend or uncertain tradition
   - counterfactual speculation

4. **Never flatten contested history into a single slogan.**
   Examples:
   - Sabah's relationship with the Sultanate of Sulu
   - whether the 1878 instrument was a cession or lease
   - what "self-government" on 31 August 1963 meant
   - whether Sabah "joined" or "formed" Malaysia
   - whether Malaysia was a new state or a continuation/expansion of the Federation of Malaya
   - whether an independent Sabah would have been better off

5. **Prefer primary and authoritative sources.**
   Prioritise:
   - treaties and constitutional documents
   - national/state archives
   - government historical collections
   - United Nations documents
   - parliamentary records
   - museums and war memorial institutions
   - peer-reviewed scholarship and university repositories

6. **Do not invent citations, dates, quotes, casualty figures, or motives.**
   If uncertain, say so and research it.

7. **Use readable language.**
   The creator likes detailed explanations but not unnecessarily academic wording.

8. **Keep Sabah central when relevant.**
   Do not write Sabah merely as a footnote to Kuala Lumpur, Manila, London, Singapore, Jakarta, or Brunei.

9. **Avoid present-day nationalism as a substitute for history.**
   Explain how different governments and groups viewed events at the time.

10. **Counterfactuals must be framed as counterfactuals.**
    For example:
    "Could an independent Sabah have become like Brunei or Singapore?" is a useful analytical question, but not a historical fact.

## Tone

Use a style that is:

- curious
- narrative
- direct
- intelligent but accessible
- occasionally dramatic where the history itself warrants it
- respectful around death, atrocities, war, and ethnic conflict
- not sensationalist

A good article should feel like someone saying:
"Here is the part of the story people usually skip — and why it matters."

## Recommended article structure

Use this structure when appropriate:

1. Title
2. 1–3 sentence hook
3. Short answer / overview
4. Context before the event
5. Main chronological story
6. Why it happened
7. Key people / factions
8. What happened next
9. Why it still matters
10. Disputes / myths / common misconceptions
11. Timeline
12. Sources and further reading

## Source rules

- Cite every consequential factual claim that is not common knowledge.
- Link directly to primary documents when possible.
- Keep a source list at the bottom of each article.
- For disputed claims, cite sources representing the competing positions when credible sources exist.
- Do not use Wikipedia as the final citation source, although it may be used only to discover better sources.
- Do not rely on AI-generated summaries as sources.

## Video adaptation

When adapting an article into a video later:

- preserve the factual structure
- shorten context without removing necessary nuance
- identify visuals that can be legally sourced
- distinguish narration from on-screen citations
- never manufacture historical imagery
- clearly label reconstructions or AI-generated illustrations if ever used

## Technical direction

The website should be easy to expand into a long-running archive.

Prefer a content-driven architecture where articles are stored separately from layout code, for example:

- Markdown or MDX article files
- reusable article metadata
- categories/tags
- chronological timelines
- source/reference components
- related-article links

Important metadata fields may include:

- title
- slug
- summary
- date/period
- geographic location
- categories
- tags
- people
- status: draft/reviewed/published
- sensitivity note
- last fact-checked date
- sources

## Initial content focus

Start with the material in `HISTORY_RESEARCH.md`.

Do not publish it verbatim. It is a research handoff and needs to be turned into properly sourced articles.

Potential first series:

1. Malaya vs Malaysia: Why 1957 and 1963 are different
2. Why Brunei did not join Malaysia
3. Why Singapore joined Malaysia — and left less than two years later
4. Sabah before Malaysia: Brunei, Sulu and British North Borneo
5. Why the Philippines claims Sabah
6. Why Indonesia opposed Malaysia
7. The Japanese occupation of North Borneo
8. The Sandakan Death Marches
9. The Petagas / Double Tenth resistance story
10. Could Sabah have remained independent? A careful counterfactual

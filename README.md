# Stemma | Editorial website concept (V5)

A static ten-page, research-stage Stemma site. The October 2026 Notion Brand/Launch Playbook and Website Research Journal brief inform this revision.

## What is included

- `index.html`: editorial homepage with microscope image and research positioning
- `approach.html`: a frank explanation of the research idea, existing competitors and its unproven differentiation
- `about.html`: mission, preparedness through discovery and transparent current status
- `notes/index.html`: Research Notes reading room with functioning category filters
- `notes/citations.html`, `notes/replicates.html`, `notes/experiments.html`, `notes/slow-science.html`: four complete editorial essays
- `notes/unfinished-question.html`: a restrained, source-grounded development note based on the internal October yeast ageing attempt (no private implementation details)
- `sources.html`: image source references and plain-language privacy/status information
- `styles.css`, `script.js`, `assets/*`: shared visual style, responsive navigation, filter interactions and images
- `build.py`: optional source generator; run only if you want to recreate all HTML files

## How to view

Unzip, then open `index.html` directly in a browser. For best results, run a small local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Design and content

Typography: Newsreader (headlines), DM Sans (body) and IBM Plex Mono (labels), via Google Fonts. If offline, local serif/sans/monospace fallbacks are used. No font files are bundled.

Images: real immunohistochemistry image of colonic tissue and a real retinal fundus image from the `scikit-image` sample dataset. Full image credits and upstream links are on `sources.html`. They are not Stemma findings. The images are bundled locally.

This design intentionally excludes any sign-in, product demo, email signup or unsupported research performance claims. It makes no promise of product release.

## Before any public release

The site is **not deployed**. Review the wording and third-party image rights, test in your own browser and devices, decide on the domain/hosting, and separately approve publication. The product's scientific reliability and actual third-party integration support remain unvalidated. Any external update subscription would need opt-in, a privacy notice and an unsubscribe/deletion workflow.

## Known verification limits

All internal page/image/stylesheet/script links have been checked. The local automated Chromium renderer is subject to an administrator-enforced URL blocklist, which prevented visual browser screenshot testing. The responsive layout therefore still needs human/browser verification before publication.

## Research Notes editorial policy

A selective build-in-public journal, not a weekly ship log or product marketing funnel. Topics originated in the Notion Brand & Launch Playbook and Website task. The four essays are explanations of research principles and intentions, not reports of validated Stemma efficacy. The additional lab note is anchored in the Notion Scientific Results record (19 October 2026: an unfamiliar yeast-ageing investigation that read two primary papers but failed to finish); it does not disclose confidential internals or claim a biological finding. The note should remain a private editorial draft until the founder reviews factual accuracy, sources, privacy, originality and IP. No automatic publication or invented performance figures.

**Internal backlog, not published:** “When a better prediction is not better biology” (requires original paper review and archive verification); “What should Stemma say when the data cannot answer?” (plant abstention); “Why one cell-state dataset cannot settle conversion biology” (verify source/licence); and “What a revised scientific hypothesis actually means” (audit public-safe evidence). Exact engineering methods, novel project results and unreviewed claims are intentionally excluded.

**Product delivery:** local-first, online and hybrid operation remain under evaluation. No public claims about a required subscription, hardware or hosting architecture.

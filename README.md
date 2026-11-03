# Agora

Sales and negotiation, with ethics throughout. Agora is a direct adaptation of the Carpe application family through its English sibling, Objection.

The app keeps the family's centered 560px frame, raised buttons, expressive mascot, daily goal ring, three bottom tabs, unit milestones, lesson stones, and final unit roundups. It uses the actual semantic learning engine and renderers rather than a separately designed dashboard.

## Run

No dependencies to install. Use a recent Node.js and Python 3:

```sh
npm test
npm run validate
npm run build
npm run dev
```

Open `http://127.0.0.1:4387/`. The build is a standalone static site in `dist/`.

## Course

Twelve units, four lessons per unit, plus a mixed roundup for every unit:

1. Understand before you pitch
2. Make value credible
3. Work through resistance
4. Earn the next yes
5. Before you bargain
6. Build a better offer
7. Handle power responsibly
8. Make agreements work
9. Persuade with care
10. See the whole table
11. Keep humans accountable
12. Put it into practice

Six branching conversation labs add decisions, consequences, no-deal endings, and private reflections. They are authored fictional conversations, not live AI role-play. There is no moral-worth score or claim that course completion establishes real-world competence.

## The inherited learning method

Each lesson uses an unscored first guess, concise teaching with examples and memory hooks, immediate retrieval, a separately shuffled harder-practice phase, a held-back transfer case, matching when suitable, and older due material. Misses return at the end. Semantic lessons can split into sittings around twelve weighted steps; every unit opens independently and unlocks its own lessons in order.

The same concept can generate multiple forms: recognizing a meaning, typed recall, building a sequence or principle with authored wrong tiles, matching, classification, finding deciding facts, separating a decision from its reason, and spotting or repairing a misconception. Every unit roundup includes an actual boundary case so a useful idea is not taught as universally applicable.

Review follows the family's six Leitner intervals: 1, 3, 7, 14, 30, and 60 days. Correct repetitions on the same day do not skip boxes. Weekends do not break streaks; weekly freezes and seven-day rewards remain forgiving. Daily practice rotates through all twelve topics. Mixed challenges and conversations are untimed. The optional timed game uses vocabulary and simple distinctions, excluding ethical judgments and negotiation scenarios.

Content records distinguish bounded evidence, practice guidance, ethical commitments, and fictional cases. Sources and their limitations are available on cards and in the source library. The research and adversarial checks are recorded in `research/`.

## Files and content workflow

- `app/src/engine.js`: pure learning engine, adapted directly from Objection.
- `app/src/app.js`, `style.css`, `shell.html`: inherited family interface and renderers, with domain text, sources, and lab integration.
- `app/src/units/u01.js`–`u12.js`: literal semantic course data.
- `app/src/units/u0_example.js`: complete authoring fixture, excluded from production.
- `app/CONTENT_SCHEMA.md`: source-of-truth contract.
- `app/tools/validate.js`, `app/test/`: unit validation, generated-question checks across 40 seeds, state safety, and lab-graph tests.
- `research/CURRICULUM.md`: learning objectives, progression, provenance, and teaching decisions.
- `research/decisions-and-validation.md`: actual final review coverage, corrections, and verification limits.

The workflow follows the existing Claude recipe: research → curriculum → copied family core and schema → writing → two independent adversarial content reviews and fixes → browser playtest → final critic → publication. Historical model names, credentials, and budgets are not part of this app.

## Data and delivery

Progress, settings, mistake history, and reflections use browser-local storage. Export/import from Me provides a backup; there is no cross-device account sync. Sound is optional and off initially. System, light, and dark appearances are available. Fonts are fetched from Google Fonts, with local fallbacks. No app analytics or model service is loaded.

The registered owner-private Site is configured by `.openai/hosting.json`; deployment packages only the built static files. The earlier custom-dashboard implementation was superseded following the user's design correction. Its review is clearly labeled as historical.

## Lineage

The user owns the source family in adjacent experiment directories: `latin-panhellenic`, `us-bar-exam`, `ancient-greek-explainer`, and `ancient-greek-panhellenic`. Agora copies Objection's English app, which descends from Carpe. `research/skepsis-learning-science.md` retains the original learning-science reference used throughout the family. MIT license; see `LICENSE`.

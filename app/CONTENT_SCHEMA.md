# Agora content contract — inherited course family

Agora uses the actual Objection → Carpe → Skepsis lesson engine and renderer. Content describes semantic teaching items; the engine generates quick checks, harder practice and varied retrieval. Do not replace these with one finished multiple-choice question per card.

## Unit file

Use `app/src/units/u01.js` through `u12.js`. Copy the complete `u0_example.js` shape; that fixture is excluded from the production build. Files contain a plain object literal, export it in Node, and push it to `globalThis.AGORA_UNITS` in the browser.

```js
(function () {
  const unit = {
    id: "u01", title: "…", blurb: "…", subject: "discovery",
    assume: "The scope, relevant constraints and limits of the unit's scenarios.",
    lessons: [{ id: "u01l1", title: "…", items: [/* native items */] }],
  };
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.AGORA_UNITS = globalThis.AGORA_UNITS || []).push(unit);
})();
```

Topics, in course order: `discovery value resistance commitment preparation offers power agreements persuasion stakeholders ai integration`. Lessons are numbered from 1. Item IDs must start with their unit ID plus `-`, and be globally unique. The twelve real units have four lessons, with a final boundary/nonexample lesson. At least one substantive item per unit is `boundary: true`; the roundup always includes one.

## Shared item fields

- `id`, `kind`, `say` (one plain-English teaching line, at most 160 characters).
- `status`: `evidence` (bounded research finding), `practice` (practical guidance), `ethics` (a normative framework or principle), or `fictional` (a constructed scenario). A fictional scenario still cites the sources for the principle it practices. These describe provenance, not certainty or moral worth.
- `src`: a readable source description; `sourceIds`: at least one valid ID from `src/sources.json`.
- `hook`: a concrete story, analogy or memory line. Teaching principles and terms should have hooks that help recall; do not invent research to support a mnemonic.
- `transfer: true` on `hypo` or `argue` only. Link `rule` to a principle **earlier in the same lesson**. The case is withheld from introductions and asked cold in the harder practice phase. A previous sitting of that lesson may have taught the prerequisite.
- `boundary: true` marks a nonexample or close contrast that tests where a principle stops applying.
- `speed: true` explicitly permits simple `rule` true/false, `sort` or `pairs` retrieval in Quick recall. Terms and numbers are eligible by default unless `speed: false`. `ethics`, `hypo` and `argue` items are never speed-scored.
- `subject` can override the unit topic; `dep` on a unit records cross-unit principle dependencies.

Research provenance and exercise correctness are separate: a source may support a method without proving a guaranteed sales outcome. Scored scenarios must have one defensible answer under explicit constraints. Reasonable disagreement belongs in a reflective lab or checklist, not a fake universal answer key.

## Native item kinds

### `rule`: a principle with applications and quick checks

Required: `title`, `elements` (2–7 short strings), `ex` (1–3 `{facts,result}` applications), `quiz` (2–5 authored checks). Require `distractorElements` with at least one plausible but incorrect component, and add a `hook`. The engine uses only those authored wrong tiles: true elements from neighboring ethical principles cannot be treated as errors. `ordered` defaults to **false**; set true only if the order is necessary, not merely preferred. Optional `buildAsk`, `exceptions`, `terms`.

Inline checks:

```js
{ t: "tf", q: "…", a: false, why: "…" }
{ t: "mcq", q: "…", options: ["…", "…", "…"], a: "exact option", why: "…" }
{ t: "bucket", q: "…", buckets: ["…", "…"], items: [{text: "…", bucket: "…"}, /* at least 3 */], why: "…" }
```

Use the two checks for distinct applications or a one-fact-changed contrast, not two paraphrases of the same sentence. Optional `split` maps two or more of `rights consequences fairness care virtue commonGood` to statements, with `splitNote` explaining the distinction. Sorting identifies the lens; it does not declare one lens universally superior. Legal citation drills are disabled.

Generated forms: intro → inline checks; later select/build components with incorrect extra tiles, optional lens sorting; review rotates among the authored variants and construction.

### `hypo`: a conditional applied decision

Required: `stem`, `call` (a question), exactly four `options: [{text,why,trap?}]`, integer `answer` 0–3, `issue` (short concept label), `rule` (principle ID). Each wrong option requires a neutral trap category 1–11; the key has no trap. Each `why` is at most 240 characters. Stems must include the facts that determine the answer; at most 240 words.

Optional: `callType` from `action question claim comparison argument remedy accurate decision response evidence`; `facts` (1–3 deciding phrases copied exactly from the stem); `findAsk`; `short`; `assume`; `grid: true` only when the four options split into two verdicts with two different reasons each, e.g. two `Yes, because…` and two `No, because…` options.

Generated forms: cold, unscored scenario guess; conditional best action; decision then reason; tap deciding facts; diagnose another learner's answer. Optional `issueDistractors` supplies exactly three authored, distinct alternative issue labels for an issue-identification opener instead. Do not borrow neighboring principles as wrong answers: several ethical issues can genuinely apply to the same facts. **No hypo intro reveals its answer.** Multiple cases should share a `rule`: review preferentially draws a not-yet-seen sibling with new facts. Transfer cases never supply the opening guess.

### `argue`: best response or argument under stated constraints

Same `stem`, `call`, four explained options and `answer` as `hypo`; wrong-option trap categories optional. `rule` and `issue` recommended and `rule` required for transfer. No intro. A `transfer` argument retains its transfer label and is always included in the practice phase.

### `steps`: construct and apply a procedure

`title`, `steps` (3–6 ordered strings), `distractors` (2–4 wrong steps), optional `applyTo: {facts,stop,why}` where `stop` exactly matches the next justified step. Generated forms: teach the steps, build them with wrong tiles, then identify the next justified step in a new application. Do not impose an arbitrary conversational script as the only good sequence.

### `pairs`: match a conceptual distinction

`pairs`: 3–8 `{l,r}` entries with distinct left and right meanings. Optional `set`, `spare` (0–2 incorrect right-hand tiles), `mode` (`number term concept contrast repair`). Draws up to five pairs; larger sets rotate. Incorrect spare tiles prevent solving solely by elimination.

### `sort`: discriminate examples and nonexamples

`q`, `buckets` (2–4 distinct labels), `items` (4–12 `{text,bucket,why}` entries), optional `mode` (`yesno category split contrast`). Every row should explain its classification. Use closely matched cases with a relevant difference; do not sort people into ethical/unethical categories.

### `num`: calculate or recall a clearly defined number

`ask`, string `answer` containing a number, optional `alt` accepted spellings. State assumptions and inputs for invented calculations and mark them `fictional`. Do not teach a universal question count, bargaining ratio or conversion statistic. Generates quick multiple-choice checking, typed recall with options fallback, matching and flash review.

### `term`: a useful concept, not a vocabulary obstacle

`term`, `meaning`; recommended `use`, `hook`, optional `literal`, `lang: "english"`, `pairWith` close contrast, `alt` accepted aliases. Generates meaning recognition, reverse recall, **typed concept recall before options**, matching and flash review. Normalization ignores ordinary punctuation, case and articles; aliases must preserve the meaning.

### `trap`: diagnose and repair a misconception

`stem`, `wrong`, `right`, `why`, `cat` (1–11 or a self-reflection tag), and `fixDistractors` (exactly two plausible wrong repairs for this same scenario). The fix exercise uses these authored alternatives, never unrelated repairs borrowed from other topics. Generated forms ask whether another learner's answer fits the facts, then choose the repair, or identify the misconception. Repeated misses enter the notebook.

Trap categories: 1 sound action/unsupported reason; 2 missing condition; 3 assumed fact; 4 wrong standard for the situation; 5 misstated principle; 6 true but irrelevant; 7 overgeneralization; 8 emotion replacing evidence; 9 incomplete comparison; 10 useful idea/wrong fit; 11 outdated or unchecked claim. Self-tags: `misread unknown misapplied nuance addedFact sympathy`. These diagnose an answer, never the learner's character.

## The inherited lesson pipeline

1. Unit scope card on its first sitting.
2. A cold, unscored guess before instruction.
3. Principle intro → authored inline checks. Term/number/steps/trap intro → quick check. Hypo/argument/pairs/sort are asked directly.
4. Separate shuffled **harder practice**: construction with distractors, typed/reverse recall, deciding facts, trap diagnosis, applications. All held-back transfers are included.
5. Matching when at least three suitable term/number items occur in the sitting.
6. One or two older due items. The UI requeues misses without hearts or lost lives.

The family engine splits lessons into sittings around twelve estimated graded steps; it does not equate four content records with four questions. Sittings preserve item order. Unit roundups interleave retrieval and always include a boundary item. Review uses the six Leitner intervals 1/3/7/14/30/60 days with no exam cap; flash self-check misses move down one box, other misses return to box 1. Weekends and weekly freezes are forgiving.

Daily challenges rotate evenly across the twelve topics. Mixed scenario practice is untimed. Quick recall covers simple distinctions only. XP and ranks measure completed practice, not elapsed time, professional qualification or moral character.

## Validation

Run `npm test` and `npm run validate`. The family tests build every real lesson sitting and roundup over 40 seeds, validate generated answers/options/tiles, check cold transfer and prerequisites, varied retrieval, boundary coverage, topic balance, saved-progress safety, and the independent branching labs. Source IDs, explicit conditions and plausible misconceptions still require human content review; passing structural checks is not proof that an ethical answer is correct.

# Agora: family-template rebuild and validation

Completed 2 November 2026. This report concerns the native family edition. The earlier custom-dashboard review is retained separately as historical work.

## What changed after the user's correction

The user asked for the actual design principles, teaching methods, and workflow of the other experiments to be copied. The initial implementation had independently invented a wide dashboard and stored finished questions instead of semantic teaching items. Those choices were replaced.

Agora now directly inherits the English Objection app, which descends from Carpe. Its complete stylesheet, compact column, typography, raised controls, mascot renderer and moods, navigation, path, lesson shell, feedback, and results form the base. Changes adapt the subject, clarify provenance, integrate conversation labs, and address observed correctness/accessibility problems. No other experiment was modified.

The engine retains first guesses, explicit instruction, immediate checks, a separate harder-practice phase, cold transfer, matching, older due questions, retries, lesson sittings, unit roundups, flash recall, daily rotation, and mixed review. The learning-science source is retained in `skepsis-learning-science.md`; the authoring contract and complete fixture live in the app folder.

## Delivered course

- 12 units, 48 lessons, 359 semantic teaching items, 48 held-back transfer cases.
- 12 unit roundups with actual boundary/nonexample scenarios.
- Nine native content kinds and multiple generated retrieval forms.
- Six branching labs: 50 reachable nodes, 18 endings, 159 finite paths.
- 29 source records, with bounded findings and methodological qualifications.

The first lesson of every unit opens independently. Within a unit, lessons unlock in sequence and the roundup comes last. The current authored lessons fit 48 sittings; the inherited splitting mechanism remains available for longer lessons. Review uses 1/3/7/14/30/60-day intervals. Ordinary lessons, daily practice, mixed challenges, and labs have no countdown. Timed recall excludes negotiation scenarios and ethical judgments. Progress is local, with export/import and optional private reflections.

## Independent review coverage

| Scope | Native author | Independent content reviewers |
|---|---|---|
|u01–u06|Sales agent|Negotiation agent and ethics agent|
|u07–u12|Negotiation agent|Sales agent and ethics agent|
|Six labs|Parent agent, initial edition retained|All three agents, plus graph regressions|
|UI and integration|Parent agent|Sales agent final critic|

Current reports: `family-content-review-sales.md`, `family-content-review-negotiation.md`, `family-content-review-ethics.md`, `family-final-critic.md`, and `answer-cue-refinement.md`. Author handoffs are in the two curriculum snippets and incorporated into `CURRICULUM.md`. Reviews explicitly distinguish authored accuracy, generated exercise quality, browser behavior, and evidence of real learning.

## Material corrections

- Deciding-fact exercises now highlight the actual constraint, not an arbitrary opening sentence. Quote splitting no longer drops scenario facts.
- Ethical lenses, BATNA/target/reservation distinctions, and other vocabulary are taught before their checks. Duplicate matching content was removed.
- Commitment is not defined to exclude unauthorized promises; responsible authorization is a separate check. MESO denotes the simultaneous set of equivalent offers.
- A written summary is not represented as universally legally sufficient. Salary/contribution examples identify their simplified models. Pilot self-reports do not become causal placement claims.
- The original question-asking study, critique, later correction, and authors' reply remain represented with their limitations.
- Rule-building wrong tiles come from authored misconceptions. Sound neighboring principles cannot be generated as wrong answers merely because they appear on another card.
- Trap repairs use authored, relevant alternatives. Issue guessing uses authored alternatives or an unscored reviewed scenario, avoiding overlapping issue-label distractors.
- Accepted term aliases are excluded from reciprocal wrong alternatives. Numeric grading preserves signs, decimal magnitude, units, and currency distinctions.
- Twelve natural trims reduce the reverse shortest-answer cue without padding keys or changing the correct options. Two independent reviewers and the parent checked the revised meanings.
- The theme resets coherently, import dialogs dismiss with Escape, native Enter behavior is preserved, flash cards work by keyboard, dialogs manage focus, and delayed callbacks cannot write into an abandoned lesson.
- Incorrect sorting explanations now remain until Continue, using the inherited feedback controls. A learner is not given 1.5 seconds to read a full correction. The final critic separately exercised mixed, all-correct, and single-item sorting flows.

## Verification

Final automated run: **52 tests passed, 0 failed**. Validation: **0 errors**. There are 26 reviewed shape advisories, including the example fixture: small focused matching/sorting sets and two short but adequately specified stems. They were evaluated for meaning rather than padded to silence a count heuristic.

Generated-question tests cover every lesson sitting and unit roundup across 40 seeds, source/schema validity, all item kinds, prerequisite/transfer order, actual boundary cases, valid answer/option/tile sets, authored distractor pools, unseen sibling review, typed aliases, numeric grading, topic balance, streaks, spaced return, malformed progress imports, and every lab graph. The production build excludes the example and historical JSON drafts.

Browser checks used the actual UI at desktop size and 390×844, in light and dark appearances. Coverage included:

- Onboarding and a complete discovery lesson: unscored wrong guess, teaching, quick checks, scenarios, matching, ordered construction with wrong tiles, deciding facts, typed recall, misconception diagnosis/repair, withheld transfer, end-of-lesson retry, completion, and persistence.
- Representative negotiation, stakeholder-ethics, and boundary lessons; classification feedback and leaving an unfinished sitting.
- A full daily set, a 25-question mixed challenge including flagging/submission/answer walkthrough, a completed flash round with keyboard reveal, timed-round termination, and mixed review with a fresh sibling scenario.
- Searchable field-guide cards, source disclosures, light/dark controls, export/import, import cancellation with Escape, keyboard exit, and a no-deal lab ending with a saved reflection.
- The corrected sorting feedback waits for Continue and re-enables the next choices. Browser console checks reported no application errors during these flows.

The decision/reason grid and full course are covered by generated-question and code checks; browser testing samples flows rather than claiming an exhaustive manual playthrough of all lessons or 159 lab paths. No learner-effectiveness study or formal assistive-technology certification has been performed. Browser-local storage is not cross-device synchronization; labs are authored branches rather than a live negotiation model.

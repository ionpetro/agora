# Agora native curriculum: units 07–12

Authored 2 November 2026. This is the migration and expansion record for `app/src/units/u07.js` through `u12.js`. Original reviewed JSON files remain unchanged. The native shape follows Objection's `CONTENT_SCHEMA.md` and question builders, as adapted by Agora's core author; it does not retain the earlier custom choice-card engine.

## Data lineage and shape

Each unit is a literal JavaScript object, exported for Node and pushed to `AGORA_UNITS` in the browser. Each contains four lessons of seven semantic items: 28 per unit, 168 total. Original lesson identifiers, objectives, takeaways, and fieldwork are preserved. Fieldwork now also explicitly invites an ungraded alternative or revision discussion.

The first three lessons retain all four reviewed original items, with a preceding authored rule, a term, and an additional contrasting scenario. Original choice items become native `argue` or held-back `hypo` items with four parallel options and an explanation per option. Every new fourth option is an authored, situation-specific distractor. Match, sort, and order items become `pairs`, `sort`, and `steps`; the source meanings and reviewed answer conditions are retained. The rule is linked by ID to each case and precedes every transfer in its lesson.

For example, `u07l1-1` becomes `u07-l1-decision1`; `u07l1-2` becomes `u07-l1-sort2`. Added teaching is `u07-r-1`, vocabulary `u07-term-1`, and the new contrast `u07-h-contrast-1`. Equivalent patterns apply to all six units. No runtime helper generates course items. Build-time authoring produced literal objects.

The total contains 24 rules, 24 terms, 36 argues, 48 hypos, 11 pairs, 11 sorts, six steps, six traps, and two number items. Each rule has a meaningful element set, wrong build tile, worked examples, and two authored quick checks. Examples explicitly introduce the four ethical lenses, four allocation criteria, and fact/constraint/value distinctions before those are retrieved. Steps contain plausible wrong tiles and an application whose keyed step is the next action in the stated routine.

## Objectives and coverage

| Unit / lesson | Objective and substantive coverage |
|---|---|
| u07 / Firm without a bluff | Protect confidentiality, distinguish preferences and genuine limits from fabricated facts, communicate real deadlines. Contrast: an authorized customer can receive its own verified invoice. |
| u07 / The difficult conversation | Separate observations, interpretations, and impacts; repair a scope/timing disagreement without inventing equal blame. Contrast: a signed date change removes the alleged lateness. |
| u07 / Who gets a voice? | Check participation, staffing, authority, and the reason for an allocation. Apply the hypothetical 30/40 and 10/40 usage shares without declaring them universally fair. Contrast: staffing and access concerns have actually been resolved. |
| u07 / Pause, support, return | Distinguish a commercial limit from an explicit retaliatory threat; use an available support route and conditions for a chosen return. Contrast: a disliked but honest salary limit leaves a package-evaluation decision. |
| u08 / Agree about uncertainty | Specify trigger, record, cutoff, and response; distinguish confidence from ability to carry downside risk. Contrast: exactly 35 satisfies “at least 35.” |
| u08 / A yes you can deliver | Check authority, scope, ownership, timing, dependencies, and acceptance. Contrast: the authorized manager confirms a previously tentative remote-work arrangement. |
| u08 / The useful no | Update the complete-package comparison; distinguish a smaller useful scope from one that no longer serves the need. Contrast: a verified standalone workflow now meets the buyer's essential requirement. |
| u08 / Check the whole package | Reconcile the trigger with total cost, capacity, approval, and measurement review. A hypothetical $2,000 plus $1,000 expansion exceeds $2,600 authority. Transfer reconciles duplicate registrations before applying an agreed threshold. |
| u09 / Stories with room to think | Use relevant emotion without shame or loyalty pressure; correct an unsupported typical-results inference. Contrast: once the buyer understands the individual-example limit, move to the requested evidence. |
| u09 / Proof with context | Distinguish testimonial, adoption, and demonstration evidence; disclose relevant endorsement connections. Contrast: a defined audited count is appropriate when the actual question is an adoption count. |
| u09 / Frame without hiding | Compare full commitments on a common basis, show material limits, and recommend against stated needs. Contrast: a new mandatory feature justifies reconsidering premium, subject to budget. |
| u09 / One offer across every channel | Check the combined impression of headline, comparison, and conversation; repair a known mismatch before reliance. Contrast: a straightforward request for a previously clear renewal date calls for an accurate reminder, not an invented violation. |
| u10 / Who is not in the room? | Identify affected people and missing information; explicitly teach rights, justice, consequences, and care questions. Contrast: a tested, accepted loan-device route resolves the specific access gap. |
| u10 / Fair by which rule? | Explicitly teach equal shares, need, relevant cost, and contribution; distinguish applying a criterion from defending it. Contrast: an announced lottery for equally eligible applicants differs from a need-based rule. |
| u10 / A real chance to participate | Distinguish process barriers from disagreements about terms; offer accessible formats without unnecessary private details or taking over the choice. Contrast: offer feasible alternative formats when the preferred one cannot meet a genuine deadline. |
| u10 / Decide under real scarcity | Verify capacity, state allocation criteria, explain who waits, and review challenged eligibility facts. Neither a lottery nor numbers establish universal moral correctness. Capacity exercise: 12 minus 8 leaves 4 places. |
| u11 / A draft is not evidence | Check generated claims and inferences, delivery authority, and consequential tool limits. Contrast: independent confirmation can support a generated proposal within its verified smaller scope. |
| u11 / Personal without intrusive | Evaluate purpose, relevance, sensitivity, audience, and permission. Preserve the reviewed point that delayed outreach does not undo a disclosure. Contrast: carry out a specifically permitted introduction without sharing excluded details. |
| u11 / Build a route to correction | Connect incentives, evidence, owners, authority, and recourse. Contrast: a meaningful review can still support a no; recourse does not guarantee reversal. |
| u11 / Follow the approved version | Track the claim, reviewed scope, evidence, and material-change condition. Contrast: an explicitly permitted spelling correction differs from an unchecked expansion from ten to one hundred accounts. |
| u12 / On both sides of the table | Clarify the useful outcome and decision-relevant evidence from both buyer and seller perspectives. Contrast: a buyer confirms that practice without guaranteed hires is useful, permitting a concrete proposal. |
| u12 / Repair the agreement | Correct known material errors promptly, offer remedies within authority, and respect the buyer's subsequent choice. A remedy does not require praise or another purchase. Contrast: move from initial warning to verified options when information arrives. |
| u12 / Judgment, not a verdict | Distinguish facts, operational limits, and values; explain priorities and revision conditions. Contrast: a newly verified timely accessible supplier changes the earlier delay/access tradeoff. |
| u12 / The handover challenge | Integrate supported benefit, scope, full cost, capacity, choice, approval, ownership, and review. A well-specified pilot can justify proceeding; an unapproved late session is a new commitment. |

## Provenance and ethical limits

`sourceIds` retain the registered source links. `src` gives readable source names. `practice` marks definitions or practical synthesis; `ethics` marks normative principles; `fictional` marks original exercises. These units make no new quantitative effectiveness claim and do not label normative commitments as experimental evidence. No new source or empirical claim was introduced during expansion.

Negotiation practice uses N1, N2, N4, N7, N8, and N9 with their existing contextual limitations. Ethics uses E1/E2's plural, revisable framework and E3's distinction between emotion and manipulation. E4 and S5/S6 support claim/disclosure examples, with their US regulatory context preserved in the registry; exercises make no jurisdiction-independent legal-compliance claim. E5/E6 provide AI design principles, not one sufficient disclosure script. E9 informs organizational incentives and escalation as qualitative guidance, not prevalence or efficacy statistics.

All added names, events, counts, prices, and outcomes are hypothetical. Boundary cases allow a supported yes, an informed no, more information, or a pause. No exercise scores moral worth. Confidentiality is allowed; fairness is not equated with equal division; refusal of contingent risk is not treated as proof of deception. Written summaries do not purport to satisfy every legal requirement.

All items in fourth lessons carry `boundary:true`; the three added contrasts per unit also do. Each lesson includes a held-back transfer. Its deciding-fact phrases are selected deliberately and appear exactly in its stem. The original JSON files are the preserved review record, not active runtime units.

## Verification and warning adjudication

The native validator returned **zero errors** for these six units. Own generated-question checking covered 960 lesson sittings across 40 seeds, 14,885 generated questions, and 240 roundups. Checks covered answer presence, four-option scenario keys, nonempty deciding-fact targets, unique match columns, typed fallback answers, transfer inclusion without introductions, and boundary retrieval in roundups. The final content-only refinements were also parsed and passed the validator; root owns whole-app regression and browser checks.

Manual semantic review checked every key and explanation, prerequisites, exact threshold boundaries, 75%/25%, 1,740 first-year total, $3,000 expansion, 29 versus 31 after duplicate reconciliation, and four remaining places. The review also caught and repaired an ambiguous observation quiz, a missing quoted sentence during migration, untaught ethical-lens vocabulary, and redundant literal labels on English terms. Independent root and ethics-agent findings were applied.

Correct scenario answers longest or tied by word count: u07 **2/14**, u08 **6/14**, u09 **2/14**, u10 **3/14**, u11 **4/14**, u12 **6/14**. Rule MCQ checks are **2/4** longest/tied per unit, with natural concise alternatives. Option order is shuffled by the inherited engine.

There are **25 advisory warnings**, retained intentionally rather than filled with padding:

- 22 warnings concern focused three/four-pair matches or four-row sorts. Each tests distinct authored distinctions, uses unique pair endpoints or every stated bucket, and falls within the schema's valid range. The longer suggested set sizes are guidance, not minimum validity. Additional rows would repeat the narrow distinction or introduce untaught material.
- `u09-l1-decision4` has an 11-word stem: the organizer requests **voluntary donations for a verified local need**. Those are the deciding conditions for the question about emotion and meaningful choice; no unstated typical-result claim is needed.
- Two warnings concern `u10-num-boundary` aliases `4` and `four` versus the preferred `4 places`. They are deliberate accepted inputs for the explicitly unit-labelled capacity question; the native typed-answer list includes them. The question does not ask the learner to infer or convert units.

The remaining cross-unit independent review is recorded separately so this authoring lineage is not confused with a signoff on another writer's work.

Final cross-review refinements: all six authored trap items now supply two scenario-specific incorrect repairs for the inherited spot-the-trap exercise; four wrong-option trap categories were corrected; the paid-referral examples also cite S6's direct endorsement guidance. The Remedy term specifies a corrective action and shares the accepted alias `redress` with Repair so generated retrieval cannot treat overlapping ordinary-language terms as mutually exclusive answers. These refinements preserve the reviewed scenario keys.

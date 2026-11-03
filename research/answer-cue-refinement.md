# Bounded answer-cue refinement

2026-11-02. Changed exactly 12 wrong-option texts: three each in u01, u04, u05, and u06. Correct options, answer indices, explanations, trap categories, prompts, and all other course fields remain unchanged. The purpose is varied natural wording rather than a length quota.

Option indices below are zero-based.

| Item | Option | Before | After |
|---|---:|---|---|
| `u01-l1-1` | 2 | Would you like to see our employer dashboard? | Can I show our employer dashboard? |
| `u01-l2-1` | 1 | So your sister's job is preventing your career progress? | So your sister prevents career progress? |
| `u01-l3-1` | 0 | Can you introduce me directly to whoever can override them? | Who can override those reviewers? |
| `u04-l1-1` | 1 | Can I mark the full purchase as approved based on your interest? | May I count your interest as purchase approval? |
| `u04-l3-3` | 1 | Promise the feature next week to make the customer feel secure. | Promise next week's release to reassure them. |
| `u04-h-l3-contrast` | 2 | Promise the feature will ship before the refund arrives. | Promise release before the refund arrives. |
| `u05-h-l2-contrast` | 0 | Continue treating the lead as unavailable because it once was uncertain. | Treat the previously uncertain lead as unavailable. |
| `u05-h-l3-contrast` | 1 | A deal must occur at the midpoint of the new range. | The new midpoint is compulsory. |
| `u05-h-l4` | 0 | Accept because the price equals the old minimum. | Accept: it matches the old minimum. |
| `u06-h-l1-contrast` | 3 | Tell the client a deadline is only a preference if the price is right. | A good price makes deadlines optional. |
| `u06-l3-2` | 1 | Shall I send the invoice for the faster package? | Shall I invoice the faster package? |
| `u06-h-l3-contrast` | 0 | Keep treating the message as a request only to browse options. | Treat it as a request to browse. |

Whitespace-delimited word-count check, correct answer shortest or tied: u01 **8/14 → 5/14**; u04 **10/14 → 7/14**; u05 **10/14 → 7/14**; u06 **10/14 → 7/14**. Correct answer longest/tied counts did not increase (respectively 3/14, 1/14, 1/14, 1/14). Character counts in the earlier review used a different measure and are not directly comparable to these word counts.

All 12 shortened options retain the original misconception: premature demonstration; invented family blame; bypassing review; treating interest as purchase approval; two unsupported release promises; stale evidence; compulsory midpoint; ignoring changed scope; treating an essential deadline as optional; premature invoicing; and mistaking acceptance for browsing.

The sales author independently re-read all 12 changes against their full stems, keys, and explanations and confirmed that the misconceptions remained intact. Root then tightened `u04-l1-1` to explicitly retain the interest-as-authorization error; the final text appears in the table above. The count totals remain unchanged. Both reviewers were notified of this exact adjustment. The sales author separately re-read this final sentence on disk and confirmed that the planning meeting remains the uniquely supported answer and the unchanged explanation and trap category remain accurate. The ethics reviewer also approved the twelve-item refinement.

After the bounded edits, `node --test app/test/content.test.js` passed **16/16 tests**, including native validation and generated-question checks across 40 seeds. The sales author independently reran the same checks successfully. No UI or engine changes were made in this refinement.

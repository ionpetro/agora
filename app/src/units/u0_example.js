// Authoring/test fixture; excluded from the built course.
(function () {
  const unit = {
  "id": "u0_example",
  "title": "Authoring example",
  "blurb": "A small complete example of the inherited teaching engine.",
  "subject": "discovery",
  "assume": "These invented scenarios ask for a conditional best action using only their stated facts. They do not measure moral character.",
  "lessons": [
    {
      "id": "u0_examplel1",
      "title": "Check the need",
      "items": [
        {
          "id": "u0-r-fit",
          "kind": "rule",
          "say": "Check the need before proposing.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "title": "Check the need before proposing",
          "elements": [
            "Ask about the present problem",
            "Check the important constraint"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume the other person agrees",
            "Skip facts that weaken the pitch"
          ],
          "ex": [
            {
              "facts": "The team needs fewer missed shifts, not more dashboards.",
              "result": "Ask what causes missed shifts before proposing a reporting tool."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A stated wish always identifies its underlying need.",
              "a": false,
              "why": "Ask what the wish would help the person achieve."
            },
            {
              "t": "mcq",
              "q": "Which question checks a constraint?",
              "options": [
                "What must a solution fit?",
                "Can I send the contract?",
                "Do you like the logo?"
              ],
              "a": "What must a solution fit?",
              "why": "This surfaces the conditions a useful proposal must satisfy."
            }
          ],
          "hook": "A map helps only if it includes the road you can actually take."
        },
        {
          "id": "u0-t-interest",
          "kind": "term",
          "say": "The concern or need behind a stated position.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "term": "Interest",
          "meaning": "The concern or need behind a stated position",
          "lang": "english",
          "use": "A later start time may address a childcare constraint.",
          "hook": "Name the idea so you can notice it in another conversation."
        },
        {
          "id": "u0-h-fit",
          "kind": "hypo",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-fit",
          "issue": "Need and constraint",
          "stem": "A manager asks for a new dashboard. The team keeps missing shifts because schedules change without notice. You can ask one question before proposing.",
          "call": "Which question best checks the need?",
          "options": [
            {
              "text": "How are schedule changes communicated now?",
              "why": "It investigates the stated cause of the problem."
            },
            {
              "text": "Would you prefer a blue dashboard?",
              "why": "Color is not the cause described.",
              "trap": 6
            },
            {
              "text": "Can you sign a reporting contract today?",
              "why": "The fit has not been established.",
              "trap": 2
            },
            {
              "text": "Do all managers dislike their software?",
              "why": "It assumes a general attitude without evidence.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false,
          "boundary": false,
          "grid": false,
          "facts": [
            "schedules change without notice"
          ]
        },
        {
          "id": "u0-st-fit",
          "kind": "steps",
          "say": "Ask, check, then propose.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "title": "Prepare a relevant proposal",
          "steps": [
            "Ask what is happening now",
            "Check the important constraint",
            "Offer a fitting option"
          ],
          "distractors": [
            "Promise the result before checking",
            "Treat silence as consent"
          ],
          "applyTo": {
            "facts": "The buyer has not described a problem yet.",
            "stop": "Ask what is happening now",
            "why": "A proposal needs a problem to fit."
          }
        },
        {
          "id": "u0-h-fit-new",
          "kind": "hypo",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-fit",
          "issue": "Need and constraint",
          "stem": "A clinic asks for more appointment reminders. Patients report that the booking link is inaccessible. You can investigate one obstacle before proposing more messages.",
          "call": "What should you check first?",
          "options": [
            {
              "text": "Whether patients can use the booking link",
              "why": "This tests the stated access obstacle."
            },
            {
              "text": "Whether another reminder could sound friendlier",
              "why": "Tone does not address the stated obstacle.",
              "trap": 6
            },
            {
              "text": "Whether staff can promise perfect attendance",
              "why": "That promise lacks support.",
              "trap": 5
            },
            {
              "text": "Whether all patients have the same preferences",
              "why": "The scenario does not establish that.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "boundary": false,
          "grid": false
        }
      ]
    },
    {
      "id": "u0_examplel2",
      "title": "Compare alternatives",
      "items": [
        {
          "id": "u0-r-options",
          "kind": "rule",
          "say": "Compare the offer with a real alternative.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "title": "Compare the offer with a real alternative",
          "elements": [
            "Identify a feasible outside option",
            "Compare the important terms"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume the other person agrees",
            "Skip facts that weaken the pitch"
          ],
          "ex": [
            {
              "facts": "A buyer has a written alternative offer with a later start.",
              "result": "Compare price and timing, not price alone."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A hoped-for offer is automatically an available alternative.",
              "a": false,
              "why": "Check that the alternative is actually feasible."
            },
            {
              "t": "mcq",
              "q": "What belongs in a comparison?",
              "options": [
                "Important costs and conditions",
                "Only the headline price",
                "Only the first number heard"
              ],
              "a": "Important costs and conditions",
              "why": "Different terms can change which option is preferable."
            }
          ],
          "hook": "A map helps only if it includes the road you can actually take."
        },
        {
          "id": "u0-t-batna",
          "kind": "term",
          "say": "The best feasible alternative if this negotiation ends without agreement.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "term": "BATNA",
          "meaning": "The best feasible alternative if this negotiation ends without agreement",
          "lang": "english",
          "use": "Check whether another supplier can actually deliver.",
          "hook": "Name the idea so you can notice it in another conversation."
        },
        {
          "id": "u0-h-options",
          "kind": "hypo",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-options",
          "issue": "Feasible alternatives",
          "stem": "A buyer has a written offer from a second supplier. The price is lower, but delivery is one week after the buyer needs the goods.",
          "call": "Can the buyer treat the lower price alone as proof of a better option?",
          "options": [
            {
              "text": "No, because timing is an important constraint.",
              "why": "The alternative misses the stated deadline."
            },
            {
              "text": "No, because every outside offer is irrelevant.",
              "why": "Outside options matter when feasible.",
              "trap": 7
            },
            {
              "text": "Yes, because the price is lower.",
              "why": "That ignores the delivery condition.",
              "trap": 2
            },
            {
              "text": "Yes, because the supplier must be able to deliver earlier.",
              "why": "Earlier delivery is not stated.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false,
          "boundary": false,
          "grid": true,
          "facts": [
            "delivery is one week after the buyer needs the goods"
          ]
        },
        {
          "id": "u0-p-options",
          "kind": "pairs",
          "say": "Keep the comparison concepts distinct.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "mode": "concept",
          "set": "Match the distinction",
          "pairs": [
            {
              "l": "Interest",
              "r": "Underlying concern"
            },
            {
              "l": "Position",
              "r": "Stated demand"
            },
            {
              "l": "Alternative",
              "r": "Option outside this agreement"
            }
          ],
          "spare": [
            "A guaranteed outcome"
          ]
        },
        {
          "id": "u0-n-options",
          "kind": "num",
          "say": "In this invented comparison, the difference is $20.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "ask": "A quoted option costs $120 and another costs $100, with all stated terms equal. What is the price difference?",
          "answer": "$20",
          "alt": [
            "20",
            "twenty dollars"
          ]
        },
        {
          "id": "u0-h-options-new",
          "kind": "hypo",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-options",
          "issue": "Feasible alternatives",
          "stem": "A freelancer has a confirmed smaller project available if a negotiation fails. A larger project is only a possibility; its client has not replied.",
          "call": "Which option can support the current comparison?",
          "options": [
            {
              "text": "The confirmed smaller project",
              "why": "It is presently feasible."
            },
            {
              "text": "The larger project as though it were confirmed",
              "why": "The reply has not arrived.",
              "trap": 3
            },
            {
              "text": "Neither project, because alternatives never matter",
              "why": "Feasible alternatives help comparison.",
              "trap": 7
            },
            {
              "text": "Whichever number makes the current offer look worse",
              "why": "That selects a persuasive number over a feasible option.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": true,
          "boundary": false,
          "grid": false
        }
      ]
    },
    {
      "id": "u0_examplel3",
      "title": "Check permission",
      "items": [
        {
          "id": "u0-r-permission",
          "kind": "rule",
          "say": "Check permission for the specific action.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "title": "Check permission for the specific action",
          "elements": [
            "Identify the requested action",
            "Check permission covers that action"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume the other person agrees",
            "Skip facts that weaken the pitch"
          ],
          "ex": [
            {
              "facts": "A buyer agrees to receive a summary, not a contract.",
              "result": "Send the summary; ask before taking another step."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Permission for a summary automatically covers a purchase.",
              "a": false,
              "why": "Permission is specific to the action."
            },
            {
              "t": "mcq",
              "q": "What should happen before a different action?",
              "options": [
                "Check permission for that action",
                "Assume permission carries over",
                "Make the action difficult to refuse"
              ],
              "a": "Check permission for that action",
              "why": "A different action may involve different consequences."
            }
          ],
          "hook": "A map helps only if it includes the road you can actually take."
        },
        {
          "id": "u0-t-permission",
          "kind": "term",
          "say": "Agreement to a particular action under stated conditions.",
          "status": "practice",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "term": "Permission",
          "meaning": "Agreement to a particular action under stated conditions",
          "lang": "english",
          "use": "Permission to send a summary does not authorize an order.",
          "hook": "Name the idea so you can notice it in another conversation."
        },
        {
          "id": "u0-h-permission",
          "kind": "hypo",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-permission",
          "issue": "Scope of permission",
          "stem": "A buyer says a written summary would be useful. They say they will decide next week. The seller can send the summary or place an order now.",
          "call": "What fits the permission given?",
          "options": [
            {
              "text": "Send the summary and wait for the decision",
              "why": "It stays within the agreed action."
            },
            {
              "text": "Place an order because interest implies acceptance",
              "why": "Interest does not authorize a purchase.",
              "trap": 5
            },
            {
              "text": "Send an invoice because a deadline improves decisions",
              "why": "No purchase was authorized.",
              "trap": 3
            },
            {
              "text": "Refuse all further communication",
              "why": "That ignores the permission actually given.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": false,
          "boundary": false,
          "grid": false,
          "facts": [
            "a written summary would be useful"
          ]
        },
        {
          "id": "u0-so-permission",
          "kind": "sort",
          "say": "Separate explicit permission from an assumption.",
          "status": "ethics",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "q": "Permission for this action, or an assumption?",
          "buckets": [
            "Permission stated",
            "Permission assumed"
          ],
          "items": [
            {
              "text": "Send me that summary.",
              "bucket": "Permission stated",
              "why": "The request names a summary."
            },
            {
              "text": "They smiled, so place the order.",
              "bucket": "Permission assumed",
              "why": "A smile is not an order."
            },
            {
              "text": "Book the demo for Tuesday.",
              "bucket": "Permission stated",
              "why": "The requested demo is specific."
            },
            {
              "text": "They read the email, so add them to the list.",
              "bucket": "Permission assumed",
              "why": "Reading an email is not this permission."
            }
          ],
          "mode": "category"
        },
        {
          "id": "u0-tr-permission",
          "kind": "trap",
          "say": "A useful next step still needs appropriate permission.",
          "status": "ethics",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "stem": "A buyer asks for a summary and says they will decide next week.",
          "wrong": "Place the order now because the buyer is interested.",
          "fixDistractors": ["Send a purchase confirmation while calling it a summary.", "Treat the request as permission to begin a paid trial."],
          "right": "Send the requested summary and wait for the decision.",
          "why": "The request authorizes a summary, not a purchase.",
          "cat": 5
        },
        {
          "id": "u0-a-permission-new",
          "kind": "argue",
          "say": "Use the stated constraints; do not add facts.",
          "status": "fictional",
          "src": "Agora authoring example; MIT Seven keys; Markkula ethical decision-making framework",
          "sourceIds": [
            "N1",
            "E1"
          ],
          "rule": "u0-r-permission",
          "issue": "Scope of permission",
          "stem": "A partner permits you to share a public brochure with a buyer. Their private contact list would help outreach, but no sharing permission has been given.",
          "call": "Which response fits the stated constraint?",
          "options": [
            {
              "text": "Share the brochure and ask before sharing the list",
              "why": "The list is outside the permission given."
            },
            {
              "text": "Share the list because the intended use is helpful",
              "why": "Helpful intent does not supply permission.",
              "trap": 8
            },
            {
              "text": "Share everything because the partner approved contact",
              "why": "The partner approved only the brochure.",
              "trap": 5
            },
            {
              "text": "Claim the list was already public",
              "why": "That fact is not given.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "boundary": true,
          "grid": false
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  if (typeof globalThis !== "undefined") (globalThis.AGORA_UNITS = globalThis.AGORA_UNITS || []).push(unit);
})();

// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u08",
  "title": "Make agreements work",
  "blurb": "Plan for uncertainty, delivery, and a useful no.",
  "subject": "agreements",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u08l1",
      "title": "Agree about uncertainty",
      "objective": "Recognize a clear contingent term and check the measurement, risk, and incentives it creates.",
      "takeaway": "A future-dependent promise needs a defined trigger, a way to check it, and a feasible response.",
      "fieldwork": "Choose a low-stakes future uncertainty and describe what you would check and do under two possible outcomes. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u08-r-1",
          "kind": "rule",
          "say": "Define the trigger, the evidence, and the feasible response; then examine who carries the downside.",
          "status": "practice",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Markkula Center: Framework for Ethical Decision Making · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N8",
            "E1",
            "N9"
          ],
          "hook": "“If it works” starts another negotiation unless “works” is defined.",
          "title": "A condition someone can apply",
          "elements": [
            "Specify a checkable future trigger",
            "Agree the record and cutoff used to measure it",
            "Name a feasible authorized response",
            "Check control, risk capacity, and incentives"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat refusal of the contingency as proof of dishonesty"
          ],
          "ex": [
            {
              "facts": "At least 35 confirmed registrations by the cutoff activates one reserved session.",
              "result": "A count of 35 meets the threshold; capacity and approval still matter."
            }
          ],
          "terms": [
            "Contingent term"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A party can believe an outcome likely and still decline carrying all its financial risk.",
              "a": true,
              "why": "Cash needs, control, and downside capacity are distinct from confidence."
            },
            {
              "t": "mcq",
              "q": "Which term leaves the trigger unresolved?",
              "options": [
                "At least 35 confirmed registrations at noon May 1",
                "If demand is strong enough",
                "At least 35 confirmed names in the shared roster"
              ],
              "a": "If demand is strong enough",
              "why": "“Strong enough” lacks an agreed threshold."
            }
          ],
          "exceptions": [
            "Confidence in an outcome does not establish capacity to absorb all of its risk."
          ]
        },
        {
          "id": "u08-term-1",
          "kind": "term",
          "say": "Define the trigger, the evidence, and the feasible response; then examine who carries the downside.",
          "status": "practice",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Markkula Center: Framework for Ethical Decision Making · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N8",
            "E1",
            "N9"
          ],
          "hook": "“If it works” starts another negotiation unless “works” is defined.",
          "term": "Contingent term",
          "lang": "english",
          "meaning": "An agreed action or payment that depends on a specified future event.",
          "use": "Use a defined enrollment count to decide whether an extra reserved session is added."
        },
        {
          "id": "u08-l1-decision1",
          "kind": "argue",
          "say": "Agree on what happens under each outcome, not only on the forecast.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success",
          "sourceIds": [
            "N8"
          ],
          "hook": "Can both parties understand and afford the consequence if the less favorable outcome occurs?",
          "rule": "u08-r-1",
          "stem": "In a fictional workshop pilot, the parties disagree about enrollment. Capacity for a second session is reserved.",
          "call": "Which proposed term gives the clearest future trigger and response for further review?",
          "issue": "clear feasible contingencies",
          "options": [
            {
              "text": "If interest is strong, we will expand at a fair price.",
              "why": "'Strong' and 'fair' leave both the trigger and payment unresolved.",
              "trap": 10
            },
            {
              "text": "We will make the pilot successful and discuss costs later.",
              "why": "This does not specify what happens under different enrollment outcomes.",
              "trap": 6
            },
            {
              "text": "If at least 35 people register by May 1, add one session for $1,000.",
              "why": "It names a threshold, date, action, and price. Registration, approval, and capacity details still need defining."
            },
            {
              "text": "If at least 35 register, decide the extra-session price afterward.",
              "why": "The threshold is clearer, but leaving the price open does not specify the full response.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u08-l1-match2",
          "kind": "pairs",
          "say": "What triggers it, how do we know, and what happens next?",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success",
          "sourceIds": [
            "N8"
          ],
          "hook": "Use a measure that does not reward pressuring people into participation.",
          "set": "Three parts of the condition",
          "mode": "concept",
          "pairs": [
            {
              "l": "Trigger",
              "r": "At least 35 confirmed registrations by the cutoff"
            },
            {
              "l": "Measurement",
              "r": "The agreed shared roster at noon on May 1"
            },
            {
              "l": "Response",
              "r": "Add the second session at the agreed $1,000 price"
            }
          ]
        },
        {
          "id": "u08-l1-decision3",
          "kind": "argue",
          "say": "Confidence in an outcome is not unlimited capacity to carry its risk.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N8",
            "E1"
          ],
          "hook": "Do not treat refusal of a risky term as proof of dishonesty.",
          "rule": "u08-r-1",
          "stem": "A fictional trainer expects a good workshop but declines payment based entirely on later job placements. Employers make hiring decisions, and the trainer needs to pay staff regardless.",
          "call": "Which conclusion is justified?",
          "issue": "clear feasible contingencies",
          "options": [
            {
              "text": "The trainer knows the workshop has no value.",
              "why": "The refusal alone does not establish the trainer's belief or the workshop's value.",
              "trap": 3
            },
            {
              "text": "The trainer cannot control hiring decisions.",
              "why": "Employers make the hiring decisions. That lack of control, along with the trainer's staff costs, helps explain the refusal without proving dishonesty."
            },
            {
              "text": "The buyer must pay any requested fee in advance.",
              "why": "Rejecting one payment design does not establish that every alternative price or schedule is appropriate.",
              "trap": 7
            },
            {
              "text": "The trainer must secretly expect every participant to fail.",
              "why": "The given control and staff-cost concerns do not establish that hidden belief.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u08-l1-decision4",
          "kind": "hypo",
          "say": "Make the condition clear enough for someone else to apply.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N8",
            "N9"
          ],
          "hook": "Do not promise a backup you have neither reserved nor authority to provide.",
          "rule": "u08-r-1",
          "stem": "In a fictional event agreement, an indoor room is already reserved. The draft says, 'If the weather looks bad, we will move indoors.' The organizer and venue want to avoid a last-minute dispute.",
          "call": "What needs clarification most?",
          "issue": "clear feasible contingencies",
          "options": [
            {
              "text": "Weather trigger, timing, and decision owner.",
              "why": "Agree the weather source and threshold, when the decision happens, and who acts. That makes the condition checkable and the response owned."
            },
            {
              "text": "A promise that the weather will probably be fine.",
              "why": "Optimism does not resolve how the condition will be interpreted.",
              "trap": 2
            },
            {
              "text": "A larger outdoor-event discount without changing the clause.",
              "why": "Price may matter, but it does not define when or how the reserved backup is used.",
              "trap": 6
            },
            {
              "text": "Let each party decide privately what bad weather means.",
              "why": "Separate private definitions preserve the interpretation problem rather than resolving it.",
              "trap": 9
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "indoor room is already reserved",
            "If the weather looks bad"
          ]
        },
        {
          "id": "u08-h-contrast-1",
          "kind": "hypo",
          "say": "At least 35 includes 35; more than 35 does not.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Markkula Center: Framework for Ethical Decision Making · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N8",
            "E1",
            "N9"
          ],
          "hook": "A single word changes the threshold. Here the numbers are fictional.",
          "rule": "u08-r-1",
          "stem": "In a fictional workshop agreement, an authorized term adds a reserved session if at least 35 confirmed registrations appear in the shared roster at noon May 1. The roster contains exactly 35 at that cutoff. Payment and capacity for the session have already been approved.",
          "call": "Does the stated trigger activate?",
          "issue": "inclusive threshold",
          "facts": [
            "at least 35",
            "exactly 35",
            "already been approved"
          ],
          "options": [
            {
              "text": "No, because at least 35 requires a thirty-sixth registration.",
              "why": "At least includes the threshold itself.",
              "trap": 5
            },
            {
              "text": "Yes, because any positive registration count is sufficient.",
              "why": "The specified threshold is 35, not merely a positive count.",
              "trap": 5
            },
            {
              "text": "No, because a threshold is only a prediction of demand.",
              "why": "This is an agreed trigger, not just a forecast.",
              "trap": 4
            },
            {
              "text": "Yes, because exactly 35 meets the agreed inclusive threshold.",
              "why": "The recorded count meets the threshold and the stated prerequisites are satisfied."
            }
          ],
          "answer": 3,
          "transfer": false,
          "grid": true,
          "boundary": true
        }
      ]
    },
    {
      "id": "u08l2",
      "title": "A yes you can deliver",
      "objective": "Turn an apparent agreement into clear responsibilities within each person's authority.",
      "takeaway": "Check scope, owner, timing, acceptance, dependencies, and authority before relying on a promise.",
      "fieldwork": "Improve one ordinary commitment by naming who will do what, by when, and how you will check it is done. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u08-r-2",
          "kind": "rule",
          "say": "Check authority, scope, timing, dependencies, and acceptance before relying on a promise.",
          "status": "practice",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "A cheerful “sounds good” does not identify who can release the budget.",
          "title": "From support to commitment",
          "elements": [
            "Identify who can authorize the commitment",
            "Define scope and responsible owner",
            "State timing and essential dependencies",
            "Agree how delivery and changes will be checked"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat informal enthusiasm as approval"
          ],
          "ex": [
            {
              "facts": "June 30 depends on approved client text by June 10.",
              "result": "Discuss the dependency and response to delay before confirming the launch date."
            }
          ],
          "terms": [
            "Dependency"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A written summary by itself proves every legal requirement is met.",
              "a": false,
              "why": "It can improve shared understanding without establishing legal sufficiency in every setting."
            },
            {
              "t": "mcq",
              "q": "Which statement identifies a dependency?",
              "options": [
                "The client prefers our most polished design",
                "The design starts only after the client supplies approved text",
                "The fee reflects our target margin"
              ],
              "a": "The design starts only after the client supplies approved text",
              "why": "This identifies an input required before the promised work can proceed."
            }
          ],
          "exceptions": [
            "A written summary supports shared understanding; it does not by itself establish legal sufficiency in every setting."
          ]
        },
        {
          "id": "u08-term-2",
          "kind": "term",
          "say": "Check authority, scope, timing, dependencies, and acceptance before relying on a promise.",
          "status": "practice",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "A cheerful “sounds good” does not identify who can release the budget.",
          "term": "Dependency",
          "lang": "english",
          "meaning": "An input, approval, or event another commitment relies on.",
          "use": "A launch date may depend on the client supplying approved material in time."
        },
        {
          "id": "u08-l2-decision1",
          "kind": "argue",
          "say": "Find out who can turn support into a commitment.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Do not describe an interested contact as an authorized buyer before checking.",
          "rule": "u08-r-2",
          "stem": "In a fictional college discussion, a coordinator says, 'This looks useful; the director approves spending.' You want to plan responsibly.",
          "call": "What is the best next step?",
          "issue": "authority and executable commitments",
          "options": [
            {
              "text": "Start delivery and send the college an invoice.",
              "why": "The coordinator's support does not establish authorization for spending or delivery.",
              "trap": 6
            },
            {
              "text": "Check the director's approval process.",
              "why": "It distinguishes interest from commitment and identifies the next responsible step."
            },
            {
              "text": "Announce the college as a signed customer.",
              "why": "That would overstate the status of the relationship before approval is established.",
              "trap": 2
            },
            {
              "text": "Tell the coordinator their enthusiasm automatically grants spending authority.",
              "why": "Interest does not create the authorization the coordinator says the director holds.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u08-l2-match2",
          "kind": "pairs",
          "say": "Who does what, by when, and how will we know?",
          "status": "fictional",
          "src": "Harvard Ombuds: Seven Elements of Effective Negotiations · MIT Sloan: Seven keys to effective negotiation",
          "sourceIds": [
            "N9",
            "N1"
          ],
          "hook": "Do not hide a dependency that could prevent the promised result.",
          "set": "Give the promise a shape",
          "mode": "concept",
          "pairs": [
            {
              "l": "Two live sessions and one workbook",
              "r": "What is included?"
            },
            {
              "l": "Morgan, delivery lead",
              "r": "Who is responsible?"
            },
            {
              "l": "Both sessions completed by June 12",
              "r": "When is delivery due?"
            },
            {
              "l": "Shared attendance and delivery checklist",
              "r": "How will completion be checked?"
            }
          ]
        },
        {
          "id": "u08-l2-decision3",
          "kind": "argue",
          "say": "If the promise depends on something, say what and when.",
          "status": "fictional",
          "src": "Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N9"
          ],
          "hook": "A hidden condition makes the buyer's understanding of the deadline unreliable.",
          "rule": "u08-r-2",
          "stem": "A fictional agency can launch by June 30 only if the client supplies approved text by June 10. The buyer has not heard this requirement.",
          "call": "What should the agency do before confirming the date?",
          "issue": "authority and executable commitments",
          "options": [
            {
              "text": "Confirm June 30 and mention the text later.",
              "why": "The buyer would rely on a date without knowing a condition essential to meeting it.",
              "trap": 2
            },
            {
              "text": "Avoid any deadline even if the client can meet the dependency.",
              "why": "The dependency does not necessarily prevent a workable commitment; it needs discussion.",
              "trap": 6
            },
            {
              "text": "Explain the dependency and plan for delays.",
              "why": "It gives both parties a realistic basis for the timeline and a way to handle change."
            },
            {
              "text": "Hide the text deadline in an internal note only.",
              "why": "The buyer still would not know the condition on which the promised date depends.",
              "trap": 2
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u08-l2-decision4",
          "kind": "hypo",
          "say": "Turn a useful expectation into a clear, authorized arrangement.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Do not pressure someone to rely on flexibility the speaker cannot authorize.",
          "rule": "u08-r-2",
          "stem": "In a fictional job offer, a recruiter says one remote day 'should be fine,' but says the hiring manager decides. The day matters to your decision.",
          "call": "What best reduces uncertainty before acceptance?",
          "issue": "authority and executable commitments",
          "options": [
            {
              "text": "Ask the manager to confirm scheduling.",
              "why": "Ask the person with authority to confirm the remote day and any conditions. That makes the essential arrangement clear before you rely on it."
            },
            {
              "text": "Assume the recruiter's wording makes it permanent.",
              "why": "The recruiter explicitly identified someone else as the decision-maker and used uncertain wording.",
              "trap": 10
            },
            {
              "text": "Accept first and treat the manager's approval as automatic.",
              "why": "Acceptance does not supply the missing approval or establish the conditions.",
              "trap": 2
            },
            {
              "text": "Ask a future teammate to guarantee the manager’s decision.",
              "why": "The teammate has not been identified as authorized to approve the arrangement.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "should be fine",
            "hiring manager decides",
            "day matters to your decision"
          ]
        },
        {
          "id": "u08-h-contrast-2",
          "kind": "hypo",
          "say": "Use authorized confirmation when it arrives, including its conditions.",
          "status": "fictional",
          "src": "MIT Sloan: Seven keys to effective negotiation · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "A tentative comment and an approved arrangement are different evidence.",
          "rule": "u08-r-2",
          "stem": "In a fictional job offer, the hiring manager is authorized to approve weekly remote work. The manager now confirms the agreed day and review conditions in the offer. The recruiter’s earlier tentative comment is no longer the only information available.",
          "call": "Which response best reflects what changed?",
          "issue": "confirmed authority",
          "facts": [
            "authorized to approve",
            "confirms the agreed day and review conditions"
          ],
          "options": [
            {
              "text": "Evaluate the confirmed arrangement with the rest of the offer.",
              "why": "The relevant authorized confirmation is now available; the candidate still decides whether it fits."
            },
            {
              "text": "Treat all remote-work wording as permanently uncertain.",
              "why": "That ignores the new confirmation and its specified conditions.",
              "trap": 7
            },
            {
              "text": "Assume the review conditions can never apply.",
              "why": "Confirmation includes those conditions; it does not erase them.",
              "trap": 3
            },
            {
              "text": "Ask the recruiter to override the written arrangement.",
              "why": "The recruiter’s earlier role does not establish authority to override it.",
              "trap": 2
            }
          ],
          "answer": 0,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u08l3",
      "title": "The useful no",
      "objective": "Recognize when to revise, pause, or leave a negotiation and evaluate the process separately from the outcome.",
      "takeaway": "A sound negotiation can end with a feasible agreement, a clear pause, or an informed no.",
      "fieldwork": "After a low-stakes discussion, note one thing you learned, one promise to keep, and one preparation change for next time. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u08-r-3",
          "kind": "rule",
          "say": "Recheck fit and alternatives when facts change; agreement alone does not validate the process.",
          "status": "practice",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N2",
            "E1",
            "E2",
            "N9"
          ],
          "hook": "A signature cannot make a missing capability appear.",
          "title": "A workable decision can be no",
          "elements": [
            "Compare the complete package with essential needs",
            "Update when a material fact changes",
            "Test revised scope for actual usefulness",
            "Review actions separately from whether a deal closed"
          ],
          "ordered": false,
          "distractorElements": [
            "Keep shrinking scope even after the purpose disappears"
          ],
          "ex": [
            {
              "facts": "No available integration meets the buyer’s essential two-week deadline.",
              "result": "State the mismatch and leave room for another option."
            }
          ],
          "terms": [
            "Material change"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A declined deal by itself proves the negotiation was handled badly.",
              "a": false,
              "why": "The outcome alone does not show the quality of evidence, fit, or process."
            },
            {
              "t": "mcq",
              "q": "A newly disclosed fee exceeds approved budget. What changes the comparison?",
              "options": [
                "Whether the buyer initially sounded enthusiastic",
                "Revised total and feasible scope",
                "How soon the seller hopes to close"
              ],
              "a": "Revised total and feasible scope",
              "why": "The material fee and scope affect what the buyer would actually commit to."
            }
          ]
        },
        {
          "id": "u08-term-3",
          "kind": "term",
          "say": "Recheck fit and alternatives when facts change; agreement alone does not validate the process.",
          "status": "practice",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N2",
            "E1",
            "E2",
            "N9"
          ],
          "hook": "A signature cannot make a missing capability appear.",
          "term": "Material change",
          "lang": "english",
          "meaning": "New information or a changed term that can affect the decision to proceed.",
          "use": "A mandatory setup fee belongs in the total even after a promising conversation."
        },
        {
          "id": "u08-l3-decision1",
          "kind": "argue",
          "say": "The goal is a workable decision, not a signature at any cost.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "E1"
          ],
          "hook": "Do not sell a known mismatch merely because the buyer might accept it.",
          "rule": "u08-r-3",
          "stem": "In a fictional software service, a buyer needs the full integration in two weeks. Your verified earliest date is four weeks, and no partial scope meets the need.",
          "call": "What is the most responsible next move?",
          "issue": "fit updates and no deal",
          "options": [
            {
              "text": "Promise two weeks and ask delivery to find a way.",
              "why": "That creates a promise you already know you cannot support.",
              "trap": 10
            },
            {
              "text": "Explain the mismatch and allow the buyer to seek another option.",
              "why": "It gives the buyer the information needed to choose a feasible alternative; this deal may not fit."
            },
            {
              "text": "Call four weeks 'phase two' without changing the actual delivery.",
              "why": "Renaming the schedule does not make the buyer's required integration available sooner.",
              "trap": 6
            },
            {
              "text": "Ask the buyer to sign a general satisfaction promise instead.",
              "why": "A vague promise does not supply the essential integration in two weeks.",
              "trap": 10
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u08-l3-decision2",
          "kind": "argue",
          "say": "You are allowed to update when the deal changes.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N2",
            "E2"
          ],
          "hook": "Give the other party a chance to reconsider when a material term changes.",
          "rule": "u08-r-3",
          "stem": "In a fictional purchase, you preferred a supplier's offer until it disclosed a mandatory setup fee that exceeds your approved total budget. You have not committed, and the supplier can discuss smaller scope.",
          "call": "What best uses the new information?",
          "issue": "fit updates and no deal",
          "options": [
            {
              "text": "Accept because you already said the offer looked good.",
              "why": "Earlier interest does not make the changed total workable or authorized.",
              "trap": 6
            },
            {
              "text": "Ignore the setup fee when comparing prices.",
              "why": "A mandatory fee is part of the real commitment and belongs in the comparison.",
              "trap": 10
            },
            {
              "text": "Recalculate the total and explore scope or an alternative.",
              "why": "This updates the evaluation using the material fact and checks whether another feasible package exists."
            },
            {
              "text": "Call the setup fee optional while keeping it mandatory.",
              "why": "Renaming the fee misstates the actual commitment.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u08-l3-sort3",
          "kind": "sort",
          "say": "Ask what you did well and what needs repair, even when the deal closed.",
          "status": "fictional",
          "src": "Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N9",
            "E1",
            "E2"
          ],
          "hook": "Do not let revenue erase an unsupported claim or a respected refusal count as failure.",
          "mode": "category",
          "q": "Sort these fictional debrief notes by what the stated facts support.",
          "buckets": [
            "Sound action under the facts",
            "Action needs correction",
            "Outcome alone is insufficient"
          ],
          "items": [
            {
              "text": "We disclosed the known delay before signature so the buyer could reconsider.",
              "bucket": "Sound action under the facts",
              "why": "The action preserves a decision based on the material delivery fact."
            },
            {
              "text": "We claimed a capability we knew was missing, and the buyer signed.",
              "bucket": "Action needs correction",
              "why": "The signature does not repair the false capability claim."
            },
            {
              "text": "The buyer declined; we know nothing else about the discussion.",
              "bucket": "Outcome alone is insufficient",
              "why": "A no by itself does not tell us whether the process was skillful or fair."
            },
            {
              "text": "We signed a contract; no other facts about it are given.",
              "bucket": "Outcome alone is insufficient",
              "why": "Agreement alone does not establish feasibility, fit, or informed choice."
            }
          ]
        },
        {
          "id": "u08-l3-decision4",
          "kind": "hypo",
          "say": "Do not keep shrinking a deal until the essential purpose disappears.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "N9",
            "E1"
          ],
          "hook": "Respect a real capacity limit instead of turning participation into a test of commitment.",
          "rule": "u08-r-3",
          "stem": "In a fictional college partnership, every useful pilot needs adviser time this month. Advisers have confirmed no available capacity, and postponement is possible but not yet approved. Both parties have checked smaller scopes.",
          "call": "What is the strongest next step?",
          "issue": "fit updates and no deal",
          "options": [
            {
              "text": "Pause this month's plan and explore a later approved date.",
              "why": "It respects the confirmed constraint and explores a genuinely different timeline without promising approval."
            },
            {
              "text": "Sign the smallest scope despite its unmet staffing need.",
              "why": "The smaller scope still needs resources that the scenario says are unavailable.",
              "trap": 10
            },
            {
              "text": "Ask advisers to volunteer time so the agreement can close.",
              "why": "This shifts the unmet commitment onto staff instead of resolving feasibility through an authorized plan.",
              "trap": 10
            },
            {
              "text": "Rename the required adviser work as informal support.",
              "why": "A new label does not remove the confirmed need for unavailable staff time.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "every useful pilot needs adviser time",
            "no available capacity",
            "postponement is possible but not yet approved"
          ]
        },
        {
          "id": "u08-h-contrast-3",
          "kind": "hypo",
          "say": "A smaller offer helps when the buyer confirms it still meets the need.",
          "status": "fictional",
          "src": "HBS Online: Understanding ZOPA · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N2",
            "E1",
            "E2",
            "N9"
          ],
          "hook": "Change the essential requirement, and a previously impossible deal may become feasible.",
          "rule": "u08-r-3",
          "stem": "In a fictional service negotiation, full integration still takes four weeks. The buyer now confirms that a tested standalone workflow meets its essential two-week need, and a later integration is acceptable. The delivery lead verifies that this revised scope can be supplied on time.",
          "call": "Which next step uses the changed facts?",
          "issue": "a viable revised scope",
          "facts": [
            "meets its essential two-week need",
            "later integration is acceptable",
            "can be supplied on time"
          ],
          "options": [
            {
              "text": "Reject any revised scope because the original offer did not fit.",
              "why": "The new scope and confirmed need change the fit assessment.",
              "trap": 7
            },
            {
              "text": "Describe the standalone workflow as full integration.",
              "why": "It is a different scope, and the description should preserve that distinction.",
              "trap": 5
            },
            {
              "text": "Confirm the revised deliverables, dates, and approval.",
              "why": "A useful feasible revision now exists, but its actual terms need confirmation."
            },
            {
              "text": "Promise every later feature without checking its feasibility.",
              "why": "Verification of this revised scope does not support unrelated future promises.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u08l4",
      "title": "Check the whole package",
      "objective": "Combine a future trigger with total cost, authority, and capacity before treating it as an executable expansion.",
      "takeaway": "A clear trigger is only one part of a workable agreement.",
      "fieldwork": "Draft two possible expansion plans for a fictional event: an automatic approved stage and a stage requiring a fresh decision. Explain who carries risk in each, and discuss which you would choose without assuming one is universally fair.",
      "items": [
        {
          "id": "u08-r-4",
          "kind": "rule",
          "say": "Before expansion, reconcile the condition with the total budget, capacity, authority, and review process.",
          "status": "practice",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "The counter reaching 35 does not create a budget or another facilitator.",
          "title": "The trigger does not supply the resources",
          "elements": [
            "Calculate the full cost under each outcome",
            "Check approval and capacity for each promised response",
            "Resolve conflicting terms before relying on them",
            "Assign an owner and a way to review disputed measurements"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume a trigger automatically creates missing authority"
          ],
          "ex": [
            {
              "facts": "A $2,000 pilot adds $1,000 when its trigger fires, but only $2,600 is approved.",
              "result": "The expanded total is $3,000; revise the funding or term before promising it."
            }
          ],
          "terms": [
            "Implementation gap"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A precise count makes an expansion feasible even when its staffing is unavailable.",
              "a": false,
              "why": "Precision of measurement does not supply the resources required to act."
            },
            {
              "t": "mcq",
              "q": "Which question checks the whole contingent package?",
              "options": [
                "Can a simpler threshold replace the capacity check?",
                "What budget, capacity, and approval apply under each possible outcome?",
                "Will a confident forecast make approval unnecessary?"
              ],
              "a": "What budget, capacity, and approval apply under each possible outcome?",
              "why": "The condition must connect to responses that can actually be authorized and delivered."
            }
          ],
          "boundary": true
        },
        {
          "id": "u08-term-4",
          "kind": "term",
          "say": "Before expansion, reconcile the condition with the total budget, capacity, authority, and review process.",
          "status": "practice",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "The counter reaching 35 does not create a budget or another facilitator.",
          "term": "Implementation gap",
          "lang": "english",
          "meaning": "A missing resource, owner, or approval between an agreed intention and carrying it out.",
          "use": "An extra-session trigger is incomplete if nobody can authorize or staff that session.",
          "boundary": true
        },
        {
          "id": "u08-h-boundary-1",
          "kind": "hypo",
          "say": "Calculate the triggered total before promising the triggered work.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "A future-dependent cost still belongs in today’s decision.",
          "rule": "u08-r-4",
          "stem": "In a fictional pilot, the base costs $2,000. A draft adds one $1,000 session at 35 registrations. The buyer can authorize only $2,600 in total, and no additional funding is approved. The parties have not signed. Enrollment is likely to reach the trigger.",
          "call": "What should they resolve before committing?",
          "issue": "contingency exceeds authority",
          "facts": [
            "only $2,600 in total",
            "no additional funding is approved",
            "have not signed"
          ],
          "options": [
            {
              "text": "Keep the term because the base price is affordable.",
              "why": "The expanded response would exceed the known total authorization.",
              "trap": 2
            },
            {
              "text": "Revise the funding, scope, or expansion decision.",
              "why": "The $3,000 expanded total needs a feasible authorized basis."
            },
            {
              "text": "Tell participants registration automatically authorizes spending.",
              "why": "Participant registrations do not grant the buyer spending authority.",
              "trap": 5
            },
            {
              "text": "Describe the $1,000 as optional while the term remains automatic.",
              "why": "The wording would hide the actual obligation instead of resolving it.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u08-pairs-boundary",
          "kind": "pairs",
          "say": "Measurement, authority, capacity, and review answer different questions.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "Four clear pieces are stronger than one vague assurance.",
          "set": "What must be reconciled?",
          "mode": "concept",
          "pairs": [
            {
              "l": "Confirmed registrations",
              "r": "The event used to test the threshold"
            },
            {
              "l": "Approved total budget",
              "r": "The spending authority available for the response"
            },
            {
              "l": "Reserved facilitator time",
              "r": "The capacity needed to deliver an extra session"
            },
            {
              "l": "Named review owner",
              "r": "The person responsible for resolving a disputed count"
            }
          ],
          "boundary": true
        },
        {
          "id": "u08-h-boundary-transfer",
          "kind": "hypo",
          "say": "Resolve a measurement disagreement before acting on the number.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "An agreed threshold needs an agreed count.",
          "rule": "u08-r-4",
          "stem": "In a fictional volunteer event, the second-session funding and staffing are approved. Expansion occurs at 30 confirmed registrations, excluding duplicates. Two shared lists show 29 and 31 because one contains two duplicate entries. The cutoff has arrived, and the agreed review owner is available.",
          "call": "What should happen before declaring the trigger met?",
          "issue": "disputed measurement",
          "facts": [
            "excluding duplicates",
            "two duplicate entries",
            "agreed review owner is available"
          ],
          "options": [
            {
              "text": "Use 31 because the larger count creates more opportunity.",
              "why": "The agreed measure excludes duplicates; optimism is not the measurement rule.",
              "trap": 4
            },
            {
              "text": "Cancel the whole event because records can disagree.",
              "why": "The agreement provides a review route for this resolvable discrepancy.",
              "trap": 7
            },
            {
              "text": "Ask staff to register themselves to increase the count.",
              "why": "That changes the data to reach a result rather than applying the agreed definition.",
              "trap": 10
            },
            {
              "text": "Have the review owner reconcile the lists under the agreed definition.",
              "why": "The issue is the count, so use the specified measurement and review process."
            }
          ],
          "answer": 3,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u08-trap-boundary",
          "kind": "trap",
          "say": "A refusal can reveal a constraint without proving a hidden belief.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "Confidence and capacity are different questions.",
          "cat": "3",
          "stem": "A buyer declines an all-or-nothing outcome payment because it cannot absorb the possible loss.",
          "wrong": "Refusing the contingent term proves the buyer is lying about its forecast.",
          "right": "Ask about risk capacity, control, and measurement before inferring beliefs.",
          "why": "The stated financial limit explains the refusal without establishing dishonesty.",
          "boundary": true,
          "fixDistractors": [
            "Ask them to accept a smaller outcome bet as a test of honesty.",
            "Treat their stated cash constraint as proof that their forecast is false."
          ]
        },
        {
          "id": "u08-num-boundary",
          "kind": "num",
          "say": "$2,000 plus $1,000 equals $3,000; compare that total with the authorization.",
          "status": "fictional",
          "src": "Harvard PON: Set Your Contingent Contract Up for Success · Harvard Ombuds: Seven Elements of Effective Negotiations · Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "N8",
            "N9",
            "E1",
            "E2"
          ],
          "hook": "Hypothetical arithmetic, not a recommended market price.",
          "ask": "In the fictional pilot, what is the total after adding one $1,000 session to the $2,000 base?",
          "answer": "$3,000",
          "alt": [
            "3000",
            "3,000",
            "three thousand dollars"
          ],
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof AGORA_UNITS !== "undefined") AGORA_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();

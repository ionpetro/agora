// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u11",
  "title": "Keep humans accountable",
  "blurb": "Use the tools. Own the consequences.",
  "subject": "ai",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u11l1",
      "title": "A draft is not evidence",
      "objective": "Verify AI-assisted claims and preserve accountable human review.",
      "takeaway": "AI can suggest the wording; someone still has to support the claim.",
      "fieldwork": "Review a fictional AI-written pitch. Underline every claim that would need outside evidence before you would send it. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u11-r-1",
          "kind": "rule",
          "say": "Check consequential AI-assisted claims against evidence and delivery authority, then own the version you release.",
          "status": "practice",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "The model can supply a sentence; it cannot supply your team’s missing capacity.",
          "title": "Review the claim, not the polish",
          "elements": [
            "Identify consequential claims and inferences",
            "Check evidence and relevant delivery authority",
            "Revise unsupported wording before release",
            "Explain consequential tool limits and a human review route"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat fluent wording as independent evidence"
          ],
          "ex": [
            {
              "facts": "A generated draft promises two weeks while delivery confirms four.",
              "result": "Ground the proposal in verified scope and timing before sending it."
            }
          ],
          "terms": [
            "Human review"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A confident generated explanation establishes the evidence behind a ranking.",
              "a": false,
              "why": "Confidence in the wording does not establish support for the consequential inference."
            },
            {
              "t": "mcq",
              "q": "What addresses customers mistaking a feature bot for an exception approver?",
              "options": [
                "Move every decision notice to the legal page",
                "Explain what the bot can decide and provide authorized review",
                "Treat every feature answer as a binding exception"
              ],
              "a": "Explain what the bot can decide and provide authorized review",
              "why": "The clarification must address the actual misunderstanding and the needed decision."
            }
          ]
        },
        {
          "id": "u11-term-1",
          "kind": "term",
          "say": "Check consequential AI-assisted claims against evidence and delivery authority, then own the version you release.",
          "status": "practice",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "The model can supply a sentence; it cannot supply your team’s missing capacity.",
          "term": "Human review",
          "lang": "english",
          "meaning": "A person checking relevant evidence and authority before approving or correcting a consequential output.",
          "use": "A named reviewer checks a generated delivery promise against the delivery lead’s confirmed scope."
        },
        {
          "id": "u11-l1-decision1",
          "kind": "argue",
          "say": "A polished promise still needs a real basis.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Who has verified what the customer may rely on?",
          "rule": "u11-r-1",
          "stem": "An AI draft promises a two-week integration. Your delivery lead estimates four weeks, and the buyer has not yet seen the draft.",
          "call": "What is the strongest next step before sending?",
          "issue": "unsupported generated claims",
          "options": [
            {
              "text": "Replace “two weeks” with “rapid” and send it.",
              "why": "Vague wording can preserve the same misleading expectation.",
              "trap": 10
            },
            {
              "text": "Confirm a feasible scope and revise the promise accordingly.",
              "why": "This grounds the promise in the team’s actual ability to deliver."
            },
            {
              "text": "Keep two weeks because the draft cites industry practice.",
              "why": "A generic claim does not override the known delivery constraint.",
              "trap": 6
            },
            {
              "text": "Add “AI generated” but keep the known unsupported date.",
              "why": "Labeling the source does not correct the promise people may rely on.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u11-l1-order2",
          "kind": "steps",
          "say": "Find the claims. Check the basis. Fix the draft. Own the release.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Can the final reviewer explain what supports each important promise?",
          "title": "A claim review routine",
          "steps": [
            "Identify consequential claims",
            "Check evidence and delivery authority",
            "Revise unsupported wording",
            "Approve the corrected version"
          ],
          "distractors": [
            "Approve the confident wording before checking its claims",
            "Replace an unsupported number with an equally misleading adjective"
          ],
          "applyTo": {
            "facts": "The unsent proposal’s claims have been checked, and one date is unsupported. No revision has been made yet.",
            "stop": "Revise unsupported wording",
            "why": "The claims and evidence checks are complete; revise the unsupported promise before approval."
          }
        },
        {
          "id": "u11-l1-decision3",
          "kind": "argue",
          "say": "Explain the tool where it affects the person’s choice.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Can the customer tell what the system can decide and how to question it?",
          "rule": "u11-r-1",
          "stem": "A fictional sales chatbot can explain plan features but cannot approve exceptions. Customers keep mistaking its replies for a manager’s binding approval.",
          "call": "Which change best addresses that problem?",
          "issue": "unsupported generated claims",
          "options": [
            {
              "text": "Add a long generic AI notice to an unrelated page.",
              "why": "The notice is unlikely to correct the consequential misunderstanding.",
              "trap": 10
            },
            {
              "text": "Tell customers every reply is unofficial even when features are accurate.",
              "why": "A blanket dismissal obscures useful information and still leaves the approval process unclear.",
              "trap": 2
            },
            {
              "text": "Explain its limits and route exceptions to a human.",
              "why": "This explains the specific limit and provides a way to obtain an accountable decision."
            },
            {
              "text": "Let the chatbot approve exceptions without granting it that authority.",
              "why": "Changing its language does not supply the missing authorization.",
              "trap": 2
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u11-l1-decision4",
          "kind": "hypo",
          "say": "An AI ranking is a proposal to inspect.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Is an unverified inference deciding who gets an opportunity?",
          "rule": "u11-r-1",
          "stem": "A fictional vendor-selection assistant ranks a small supplier last for “likely unreliability,” but gives no supporting evidence. The committee wants a defensible shortlist.",
          "call": "What should it do?",
          "issue": "unsupported generated claims",
          "options": [
            {
              "text": "Check delivery evidence against consistent criteria.",
              "why": "This tests the consequential inference without assuming the supplier is reliable or unreliable."
            },
            {
              "text": "Accept the ranking because the explanation sounds confident.",
              "why": "Confidence is not evidence for the assessment.",
              "trap": 10
            },
            {
              "text": "Move the supplier to first place to offset the possible error.",
              "why": "Reversing an unsupported ranking without investigation creates another unsupported judgment.",
              "trap": 3
            },
            {
              "text": "Rank suppliers by the length of the generated explanation.",
              "why": "Explanation length is not delivery evidence or a relevant stated criterion.",
              "trap": 4
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "gives no supporting evidence",
            "defensible shortlist"
          ]
        },
        {
          "id": "u11-h-contrast-1",
          "kind": "hypo",
          "say": "Verify a generated proposal; do not accept or reject it solely by its origin.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "An independently checked claim is different from repeated model confidence.",
          "rule": "u11-r-1",
          "stem": "In a fictional proposal, an AI draft suggests two-week delivery. The delivery lead independently confirms that a defined smaller scope can be delivered in two weeks, with the buyer’s input due on Monday. The final draft states that scope and dependency accurately.",
          "call": "What should the reviewer do with the delivery claim?",
          "issue": "verified scope and dependency",
          "facts": [
            "independently confirms",
            "defined smaller scope",
            "states that scope and dependency accurately"
          ],
          "options": [
            {
              "text": "Reject the date solely because AI first suggested it.",
              "why": "The independent verification, scope, and dependency supply the relevant basis.",
              "trap": 4
            },
            {
              "text": "Expand it to full integration without another check.",
              "why": "Verification of a smaller scope does not support a broader promise.",
              "trap": 2
            },
            {
              "text": "Evaluate the verified claim as part of final approval.",
              "why": "The origin of the suggestion does not displace the independent evidence and authority."
            },
            {
              "text": "Remove the Monday input condition to make the date simpler.",
              "why": "That would hide a dependency essential to the verified commitment.",
              "trap": 9
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
      "id": "u11l2",
      "title": "Personal without intrusive",
      "objective": "Use relevant information for an understood purpose without exploiting sensitive inferences.",
      "takeaway": "Useful personalization follows a real need, not a private vulnerability.",
      "fieldwork": "Write two fictional outreach lines: one based on a stated business need and one based on an intrusive inference. Explain why you would send only the first. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u11-r-2",
          "kind": "rule",
          "say": "Check relevance, sensitivity, audience, and permission before collecting or repurposing personal information.",
          "status": "ethics",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E5",
            "E6",
            "E4"
          ],
          "hook": "An address supplied for a quote is not a general invitation to every partner.",
          "title": "Use information for the understood task",
          "elements": [
            "Use information relevant to the stated purpose",
            "Avoid unnecessary sensitive inferences",
            "Check the audience and scope of a new disclosure",
            "Offer a specific choice before acting on someone’s behalf"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat public availability as permission for every use"
          ],
          "ex": [
            {
              "facts": "A prospect states a booking need; a tool guesses an unrelated family crisis.",
              "result": "Use the stated requirement rather than the intrusive unverified inference."
            },
            {
              "facts": "A quote address is sent to a separate partner, with instructions to wait before calling.",
              "result": "The new disclosure has already happened; delaying outreach does not reverse who received the information."
            }
          ],
          "terms": [
            "Purpose limitation"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Delaying a partner’s outreach undoes the disclosure of a buyer’s address to that partner.",
              "a": false,
              "why": "The information has already reached a new audience, even if contact is delayed."
            },
            {
              "t": "mcq",
              "q": "Which question best checks a proposed introduction?",
              "options": [
                "Would the partner find the contact commercially useful?",
                "What sharing has the person accepted?",
                "Could delaying outreach make a new disclosure acceptable?"
              ],
              "a": "What sharing has the person accepted?",
              "why": "A specific choice depends on understanding what will be disclosed and why."
            }
          ]
        },
        {
          "id": "u11-term-2",
          "kind": "term",
          "say": "Check relevance, sensitivity, audience, and permission before collecting or repurposing personal information.",
          "status": "ethics",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E5",
            "E6",
            "E4"
          ],
          "hook": "An address supplied for a quote is not a general invitation to every partner.",
          "term": "Purpose limitation",
          "lang": "english",
          "meaning": "Keeping information use connected to the understood task and checking a proposed new purpose.",
          "use": "A quote request does not itself authorize sharing the contact with a separate seller."
        },
        {
          "id": "u11-l2-decision1",
          "kind": "argue",
          "say": "Access to a fact is not a reason to exploit it.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Does this detail help the request or target a vulnerability?",
          "rule": "u11-r-2",
          "stem": "A prospect publicly asked for accessible booking software. An AI tool also infers a family health crisis from unrelated posts.",
          "call": "To tailor a respectful business message, what should you use?",
          "issue": "purpose and information boundaries",
          "options": [
            {
              "text": "The health inference, framed as sympathy.",
              "why": "The inference is sensitive, uncertain, and unnecessary to the business request.",
              "trap": 10
            },
            {
              "text": "The stated booking requirement, without the health inference.",
              "why": "The stated requirement is relevant to the person’s expressed need."
            },
            {
              "text": "Both details, because both came from public material.",
              "why": "Public availability does not remove the sensitivity or purpose mismatch.",
              "trap": 6
            },
            {
              "text": "Ask the tool to make the health inference more confident.",
              "why": "Greater confidence would not make the sensitive inference necessary for the booking request.",
              "trap": 6
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u11-l2-sort2",
          "kind": "sort",
          "say": "Ask for what the task needs.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E5",
            "E6"
          ],
          "hook": "Could the same request be handled without this detail?",
          "mode": "category",
          "q": "A fictional buyer requests a delivery quote for office furniture. Classify the details for calculating delivery cost; no other service is being requested.",
          "buckets": [
            "Relevant to the delivery quote",
            "Unnecessary for this request"
          ],
          "items": [
            {
              "text": "Delivery destination and required date",
              "bucket": "Relevant to the delivery quote",
              "why": "Distance and timing affect this delivery estimate."
            },
            {
              "text": "Access details such as stairs or a freight lift",
              "bucket": "Relevant to the delivery quote",
              "why": "These affect the work and equipment needed."
            },
            {
              "text": "The buyer’s unrelated medical history",
              "bucket": "Unnecessary for this request",
              "why": "It is not needed to calculate this office delivery."
            },
            {
              "text": "A guessed political affiliation",
              "bucket": "Unnecessary for this request",
              "why": "It is unrelated to the requested quote."
            }
          ]
        },
        {
          "id": "u11-l2-decision3",
          "kind": "argue",
          "say": "An introduction should not surprise the person being introduced.",
          "status": "fictional",
          "src": "FTC: Bringing Dark Patterns to Light (2022 examples) · OECD AI Principles",
          "sourceIds": [
            "E4",
            "E5"
          ],
          "hook": "Did they agree to this information reaching this audience?",
          "rule": "u11-r-2",
          "stem": "A buyer gives you an email address to receive your quote. A partner asks for it to pitch a separate service, and the buyer has not agreed to that.",
          "call": "What best preserves the buyer’s control?",
          "issue": "purpose and information boundaries",
          "options": [
            {
              "text": "Forward it and let them unsubscribe if uninterested.",
              "why": "The buyer is exposed to a new use before having a choice about it.",
              "trap": 2
            },
            {
              "text": "Add the buyer to the partner’s contact list, asking the partner not to call yet.",
              "why": "Delaying the call does not undo the disclosure: the partner already has the address for a purpose the buyer did not accept.",
              "trap": 6
            },
            {
              "text": "Ask whether they want the specific introduction before sharing.",
              "why": "This lets the buyer decide about the new purpose and audience."
            },
            {
              "text": "Publish the address so the partner can find it independently.",
              "why": "Publishing creates a broader unapproved disclosure rather than preserving control.",
              "trap": 10
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u11-l2-decision4",
          "kind": "hypo",
          "say": "Make the proposed help specific enough to accept or decline.",
          "status": "fictional",
          "src": "OECD AI Principles",
          "sourceIds": [
            "E5"
          ],
          "hook": "What exactly is the person agreeing to share?",
          "rule": "u11-r-2",
          "stem": "A fictional workshop participant mentions a transport difficulty. You know a volunteer coordinator who may help, but the participant has not asked you to share their details.",
          "call": "What should happen first?",
          "issue": "purpose and information boundaries",
          "options": [
            {
              "text": "Ask permission for a specific, limited introduction.",
              "why": "The participant can choose whether the help and disclosure suit them."
            },
            {
              "text": "Send the coordinator the participant’s full message immediately.",
              "why": "The full message may reveal more than needed, without agreement.",
              "trap": 10
            },
            {
              "text": "Assume privacy means you cannot mention the possible help.",
              "why": "You can describe an option without sharing the person’s information.",
              "trap": 10
            },
            {
              "text": "Tell the coordinator the participant’s story but omit only their surname.",
              "why": "The remaining details can still disclose the person’s situation without agreement.",
              "trap": 9
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "has not asked you to share their details"
          ]
        },
        {
          "id": "u11-h-contrast-2",
          "kind": "hypo",
          "say": "Honor the scope of permission, including what the person excluded.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · FTC: Bringing Dark Patterns to Light (2022 examples)",
          "sourceIds": [
            "E5",
            "E6",
            "E4"
          ],
          "hook": "A specific yes is neither a blank check nor a reason to do nothing.",
          "rule": "u11-r-2",
          "stem": "In a fictional introduction, a participant explicitly agrees that you may send their name and preferred contact address to the volunteer coordinator for transport help. They ask you not to share the personal explanation. The coordinator needs no additional information to make contact.",
          "call": "Which action follows that permission?",
          "issue": "limited authorized sharing",
          "facts": [
            "name and preferred contact address",
            "not to share the personal explanation",
            "needs no additional information"
          ],
          "options": [
            {
              "text": "Send the entire original message because permission was given.",
              "why": "The permission is limited and explicitly excludes the personal explanation.",
              "trap": 2
            },
            {
              "text": "Send only the agreed contact details for the agreed purpose.",
              "why": "That follows the specified audience, information, and purpose."
            },
            {
              "text": "Refuse every introduction because personal information is involved.",
              "why": "The facts establish a specific authorized disclosure, not a ban on useful help.",
              "trap": 7
            },
            {
              "text": "Send the details to several possible helpers without asking again.",
              "why": "The permission names one coordinator, not an expanded audience.",
              "trap": 2
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u11l3",
      "title": "Build a route to correction",
      "objective": "Connect incentives, decision ownership, and repair rather than relying on individual good intentions.",
      "takeaway": "Accountability needs an owner, a route to raise concerns, and a way to correct the result.",
      "fieldwork": "For a fictional promise, write who owns delivery, who can authorize a change, and how the buyer can report a problem. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u11-r-3",
          "kind": "rule",
          "say": "Make consequential concerns visible, assign authority, and provide an actionable route to correction.",
          "status": "practice",
          "src": "Stanford HAI: Walking the Walk of AI Ethics · Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E9",
            "E1",
            "E5",
            "E6"
          ],
          "hook": "“Someone should fix it” is not yet a handoff.",
          "title": "Accountability has an owner",
          "elements": [
            "Track relevant harms as well as signed deals",
            "Name who can validate, authorize, and communicate",
            "Escalate a concrete claim with evidence and a requested action",
            "Give affected people a reachable review route"
          ],
          "ordered": false,
          "distractorElements": [
            "Replace a correction route with a generic uncertainty warning"
          ],
          "ex": [
            {
              "facts": "An unsent proposal contains an unavailable feature and a manager can pause it.",
              "result": "Identify the claim and ask that manager to stop release while scope is corrected."
            }
          ],
          "terms": [
            "Accountable owner"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An error warning alone gives a customer a way to challenge a mistaken decision.",
              "a": false,
              "why": "A warning may describe risk while leaving the customer unable to obtain review."
            },
            {
              "t": "mcq",
              "q": "What makes an escalation actionable?",
              "options": [
                "A specific claim, supporting evidence, authorized recipient, and requested action",
                "A broad complaint with no relevant claim",
                "A promise of a remedy beyond the speaker’s authority"
              ],
              "a": "A specific claim, supporting evidence, authorized recipient, and requested action",
              "why": "The recipient needs enough information and authority to act on the actual problem."
            }
          ]
        },
        {
          "id": "u11-term-3",
          "kind": "term",
          "say": "Make consequential concerns visible, assign authority, and provide an actionable route to correction.",
          "status": "practice",
          "src": "Stanford HAI: Walking the Walk of AI Ethics · Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E9",
            "E1",
            "E5",
            "E6"
          ],
          "hook": "“Someone should fix it” is not yet a handoff.",
          "term": "Accountable owner",
          "lang": "english",
          "meaning": "A named person with a defined responsibility and a route to exercise the needed authority.",
          "use": "One person may check delivery while another approves refunds and a third communicates updates."
        },
        {
          "id": "u11-l3-decision1",
          "kind": "argue",
          "say": "A target teaches people what the organization will notice.",
          "status": "fictional",
          "src": "Stanford HAI: Walking the Walk of AI Ethics",
          "sourceIds": [
            "E9"
          ],
          "hook": "Which harms disappear if this is the only number watched?",
          "rule": "u11-r-3",
          "stem": "A fictional team rewards signed contracts only. Agents are discouraged from recording poor-fit customers, and avoidable cancellations are rising.",
          "call": "Which change most directly addresses that incentive problem?",
          "issue": "owners incentives and recourse",
          "options": [
            {
              "text": "Tell agents to care more while leaving the process unchanged.",
              "why": "Good intentions alone do not change the incentive or reporting barrier.",
              "trap": 7
            },
            {
              "text": "Track fit and delivery; let staff report concerns.",
              "why": "This makes the neglected outcomes visible and gives staff a concrete way to act."
            },
            {
              "text": "Stop collecting any performance information.",
              "why": "Removing all information makes it harder to identify improvement or harm.",
              "trap": 10
            },
            {
              "text": "Reward quiet complaint records so the dashboard looks healthier.",
              "why": "Suppressing evidence makes the neglected outcomes harder to address.",
              "trap": 10
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u11-l3-match2",
          "kind": "pairs",
          "say": "Ownership means knowing who can do what.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford HAI: Walking the Walk of AI Ethics",
          "sourceIds": [
            "E1",
            "E9"
          ],
          "hook": "Are you promising a remedy you cannot authorize?",
          "set": "Who owns which step?",
          "mode": "concept",
          "pairs": [
            {
              "l": "Checks whether the promised work can be delivered",
              "r": "Delivery lead"
            },
            {
              "l": "Approves a refund under the team’s policy",
              "r": "Authorized refund manager"
            },
            {
              "l": "Keeps the customer informed about the agreed next step",
              "r": "Named customer contact"
            }
          ]
        },
        {
          "id": "u11-l3-decision3",
          "kind": "argue",
          "say": "Make the concern specific enough to resolve.",
          "status": "fictional",
          "src": "Stanford HAI: Walking the Walk of AI Ethics · Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E9",
            "E1"
          ],
          "hook": "Will someone with authority receive the facts in time to prevent reliance?",
          "rule": "u11-r-3",
          "stem": "You discover a proposal still promises a feature the delivery lead says is unavailable. Your manager can pause sending, and the proposal has not left the company.",
          "call": "Which message is most actionable?",
          "issue": "owners incentives and recourse",
          "options": [
            {
              "text": "“Something about this deal feels off.”",
              "why": "It signals concern but does not identify the issue or needed action.",
              "trap": 6
            },
            {
              "text": "“I disagree with the sales culture in general.”",
              "why": "The broad critique does not resolve the immediate unsupported promise.",
              "trap": 6
            },
            {
              "text": "“This feature is unavailable; please pause this proposal while we correct the scope.”",
              "why": "It connects a checkable problem to an authorized, timely action."
            },
            {
              "text": "Change the feature name in the proposal without checking its meaning.",
              "why": "A renamed promise may leave the same unsupported expectation.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u11-l3-decision4",
          "kind": "hypo",
          "say": "Make the correction reachable, not merely announced.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics",
          "sourceIds": [
            "E5",
            "E6",
            "E9"
          ],
          "hook": "Can the affected person get a consequential error reconsidered?",
          "rule": "u11-r-3",
          "stem": "A fictional booking system wrongly labels a customer ineligible for a discount. Staff can review eligibility, but the customer only sees “computer says no.”",
          "call": "What change best provides accountability?",
          "issue": "owners incentives and recourse",
          "options": [
            {
              "text": "Explain the relevant rule and offer a staffed review route.",
              "why": "This makes the basis understandable and allows correction of a specific error."
            },
            {
              "text": "Add “AI may be wrong” beneath the same final rejection.",
              "why": "The warning acknowledges uncertainty without giving the person recourse.",
              "trap": 10
            },
            {
              "text": "Automatically give every customer every discount.",
              "why": "That bypasses the eligibility question instead of creating a review process.",
              "trap": 10
            },
            {
              "text": "Send the customer an explanation with no way to request review.",
              "why": "That adds information but leaves the specified correction route missing.",
              "trap": 9
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "wrongly labels a customer ineligible",
            "Staff can review eligibility",
            "computer says no"
          ]
        },
        {
          "id": "u11-h-contrast-3",
          "kind": "hypo",
          "say": "A meaningful review can correct an error or explain a supported no.",
          "status": "fictional",
          "src": "Stanford HAI: Walking the Walk of AI Ethics · Markkula Center: Framework for Ethical Decision Making · OECD AI Principles · NIST AI RMF: Risks and Trustworthiness",
          "sourceIds": [
            "E9",
            "E1",
            "E5",
            "E6"
          ],
          "hook": "Recourse is a route to examination, not a promised outcome.",
          "rule": "u11-r-3",
          "stem": "In a fictional discount review, the customer receives the actual eligibility rule and a staffed way to challenge the recorded facts. A reviewer checks the evidence and confirms that the customer does not meet the stated criterion. The reason and any further review route are explained.",
          "call": "What does accountability require under these stated facts?",
          "issue": "review without guaranteed reversal",
          "facts": [
            "checks the evidence",
            "does not meet the stated criterion",
            "further review route are explained"
          ],
          "options": [
            {
              "text": "Grant the discount because every challenge must reverse the decision.",
              "why": "A meaningful review route does not guarantee that the underlying criterion is met.",
              "trap": 7
            },
            {
              "text": "Delete the explanation because the answer is still no.",
              "why": "The basis remains relevant to understanding and any further challenge.",
              "trap": 10
            },
            {
              "text": "Claim the reviewed result proves the policy can never be questioned.",
              "why": "A checked application does not make the policy beyond reasoned challenge.",
              "trap": 7
            },
            {
              "text": "Communicate the supported decision and the available next route.",
              "why": "Accountability includes an understandable decision, not automatic acceptance of every request."
            }
          ],
          "answer": 3,
          "transfer": false,
          "grid": false,
          "boundary": true
        }
      ]
    },
    {
      "id": "u11l4",
      "title": "Follow the approved version",
      "objective": "Track which claim was verified, notice material changes after approval, and coordinate a new check before the old claim is reused.",
      "takeaway": "Approval belongs to a particular claim under particular conditions.",
      "fieldwork": "Create a fictional claim log with the claim, evidence, approver, and a condition that would trigger review. Discuss how much detail is proportionate; avoid recording real personal or confidential information.",
      "items": [
        {
          "id": "u11-r-4",
          "kind": "rule",
          "say": "Record what was checked and under which conditions; a material change may require review before reuse.",
          "status": "practice",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "Yesterday’s green light was for yesterday’s scope.",
          "title": "Approval has a scope",
          "elements": [
            "Identify the exact claim and version approved",
            "Record the evidence and responsible reviewer",
            "Check whether a material condition has changed",
            "Route the revised claim before further reliance"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat one approval as permission for every later version"
          ],
          "ex": [
            {
              "facts": "A two-week delivery promise was approved for ten users; the draft now says one hundred.",
              "result": "Recheck capacity and timing for the expanded scope before sending it."
            }
          ],
          "terms": [
            "Version-specific approval"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A human-approved sentence stays supported when someone changes its material scope.",
              "a": false,
              "why": "The approval may no longer cover the claim now being made."
            },
            {
              "t": "mcq",
              "q": "Which record best helps a new reviewer?",
              "options": [
                "Date of first approval, without the reviewed wording",
                "Claim, scope, evidence, and approver",
                "Latest sales summary, without checking its changed scope"
              ],
              "a": "Claim, scope, evidence, and approver",
              "why": "The reviewer needs to know what the earlier approval actually established."
            }
          ],
          "boundary": true
        },
        {
          "id": "u11-term-4",
          "kind": "term",
          "say": "Record what was checked and under which conditions; a material change may require review before reuse.",
          "status": "practice",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "Yesterday’s green light was for yesterday’s scope.",
          "term": "Version-specific approval",
          "lang": "english",
          "meaning": "Approval tied to the content and conditions that were actually reviewed.",
          "use": "A capacity check for ten accounts does not automatically cover a proposal for one hundred.",
          "boundary": true
        },
        {
          "id": "u11-h-boundary-1",
          "kind": "hypo",
          "say": "A materially changed promise needs evidence for the changed promise.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "Ten and one hundred are fictional inputs, not equivalent workloads.",
          "rule": "u11-r-4",
          "stem": "In a fictional sales team, a delivery lead approved a two-week pilot for ten accounts. An AI-assisted rewrite changes the offer to one hundred accounts while keeping the date. No one has checked the expanded capacity, and the revised proposal has not been sent.",
          "call": "Is the earlier approval sufficient for the revised promise?",
          "issue": "scope changed after approval",
          "facts": [
            "ten accounts",
            "one hundred accounts",
            "No one has checked"
          ],
          "options": [
            {
              "text": "Yes, because the same lead approved the earlier sentence.",
              "why": "The earlier approval covered a different scope.",
              "trap": 2
            },
            {
              "text": "No, because the changed capacity needs a relevant review.",
              "why": "The expanded number materially changes what must be delivered."
            },
            {
              "text": "Yes, because the rewrite preserves the two-week wording.",
              "why": "Keeping the date does not preserve the scope or feasibility.",
              "trap": 5
            },
            {
              "text": "No, because all AI-assisted wording is necessarily false.",
              "why": "The issue is the unchecked change, not an automatic verdict on the tool.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": true,
          "boundary": true
        },
        {
          "id": "u11-pairs-boundary",
          "kind": "pairs",
          "say": "A handoff should let another person trace the promise to its basis.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "Record enough to act, not a ceremonial approval label.",
          "set": "A claim handoff that another person can use",
          "mode": "concept",
          "pairs": [
            {
              "l": "What will the buyer hear?",
              "r": "Exact claim and current wording"
            },
            {
              "l": "Why do we believe it is supported?",
              "r": "Evidence and its relevant limits"
            },
            {
              "l": "Who confirmed we can deliver?",
              "r": "Responsible delivery authority"
            },
            {
              "l": "What would require another check?",
              "r": "Material-change condition"
            }
          ],
          "boundary": true
        },
        {
          "id": "u11-h-boundary-transfer",
          "kind": "hypo",
          "say": "Review effort should respond to what actually changed.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "An exact-scope check can permit a small correction without approving a new promise.",
          "rule": "u11-r-4",
          "stem": "In a fictional grant email, the previously approved application deadline remains unchanged. A colleague corrects a spelling error in the greeting without changing eligibility, dates, cost, or commitments. The current approval process permits these purely editorial corrections.",
          "call": "What best follows the stated process?",
          "issue": "nonmaterial editorial correction",
          "facts": [
            "without changing eligibility, dates, cost, or commitments",
            "permits these purely editorial corrections"
          ],
          "options": [
            {
              "text": "Treat the spelling fix as a new spending commitment.",
              "why": "The stated edit changes no substantive promise.",
              "trap": 4
            },
            {
              "text": "Infer that every later edit is now also approved.",
              "why": "Permission for this correction does not cover future material changes.",
              "trap": 7
            },
            {
              "text": "Apply the permitted correction while preserving the approved terms.",
              "why": "The process explicitly permits this nonmaterial edit."
            },
            {
              "text": "Change the deadline too because the email is already open.",
              "why": "That would be a separate material change beyond the stated permission.",
              "trap": 2
            }
          ],
          "answer": 2,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u11-trap-boundary",
          "kind": "trap",
          "say": "Stable wording can describe a changed reality badly.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "Track the product change as well as the text change.",
          "cat": "2",
          "stem": "A chatbot’s plan description was checked before a service removed a feature. The old description remains active.",
          "wrong": "The old approval is enough because the description itself has not changed.",
          "right": "Recheck the description when the underlying service changes.",
          "why": "A claim can become unsupported when its subject changes even if the wording stays identical.",
          "boundary": true,
          "fixDistractors": [
            "Keep the old description until the next scheduled review despite the known removal.",
            "Reword the old description while preserving the promise of the removed feature."
          ]
        },
        {
          "id": "u11-steps-boundary",
          "kind": "steps",
          "say": "Compare the version, check the changed claim, revise, and approve.",
          "status": "fictional",
          "src": "OECD AI Principles · NIST AI RMF: Risks and Trustworthiness · Stanford HAI: Walking the Walk of AI Ethics · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E5",
            "E6",
            "E9",
            "N9"
          ],
          "hook": "If an unsupported promise is already live, timely correction may come before the full routine.",
          "title": "Review an unsent changed promise",
          "steps": [
            "Identify the material change from the approved version",
            "Check evidence and authority for the changed scope",
            "Revise or remove what cannot be supported",
            "Record the new approval before release"
          ],
          "distractors": [
            "Reuse the old approval without comparing scope",
            "Treat a model confidence score as delivery authorization"
          ],
          "applyTo": {
            "facts": "The reviewer has identified an added service and confirmed that nobody has approved its staffing yet.",
            "stop": "Check evidence and authority for the changed scope",
            "why": "Identifying the change is complete; the proposed staffing and authority need checking before approval."
          },
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof AGORA_UNITS !== "undefined") AGORA_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();

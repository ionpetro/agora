// Native Agora unit. Original scenarios migrated from reviewed JSON; added cases are fictional.
(function () {
  const unit = {
  "id": "u10",
  "title": "See the whole table",
  "blurb": "Notice who gains, who carries risk, and who is missing.",
  "subject": "stakeholders",
  "assume": "All scenarios and numbers are fictional. Apply the stated facts and goal; a sound decision may be agreement, investigation, pause, or no deal. Sources support principles, not predicted outcomes.",
  "lessons": [
    {
      "id": "u10l1",
      "title": "Who is not in the room?",
      "objective": "Identify affected people and test a proposal through more than one ethical lens.",
      "takeaway": "The people signing are not always the only people affected.",
      "fieldwork": "For a harmless everyday decision, list one person affected who is not making the choice. Ask what information you would need before speaking for them. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u10-r-1",
          "kind": "rule",
          "say": "Identify affected people, check what you know about their needs, and examine the proposal through more than one lens.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "An empty chair can represent someone who still carries the cost.",
          "title": "Map effects before deciding",
          "elements": [
            "Identify benefits and burdens beyond the signatories",
            "Separate known effects from assumed preferences",
            "Seek relevant input while the proposal can change",
            "Use several lenses without treating one as an automatic verdict"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat a signature as proof that every affected interest is represented"
          ],
          "ex": [
            {
              "facts": "A cheap school system requires personal devices that some students lack.",
              "result": "Check a feasible access route before treating the saving as the complete comparison."
            },
            {
              "facts": "Rights and justice ask different questions.",
              "result": "Rights asks what basic claims or freedoms must be respected. Justice asks how benefits and burdens are distributed."
            },
            {
              "facts": "Consequences and care add other perspectives.",
              "result": "Consequences asks what benefits and harms may follow. Care asks what responsibilities arise from relationships and vulnerability."
            }
          ],
          "terms": [
            "Stakeholder",
            "rights",
            "justice",
            "consequences",
            "care"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Naming an affected group establishes what its members prefer.",
              "a": false,
              "why": "A stakeholder map identifies a perspective to investigate; it does not supply that perspective."
            },
            {
              "t": "mcq",
              "q": "Which question most directly uses a care lens?",
              "options": [
                "How are all benefits and burdens distributed?",
                "What responsibilities arise from dependency and our relationship?",
                "What harms and benefits may follow?"
              ],
              "a": "What responsibilities arise from dependency and our relationship?",
              "why": "Care draws attention to relationships and dependency, alongside other relevant considerations."
            }
          ]
        },
        {
          "id": "u10-term-1",
          "kind": "term",
          "say": "Identify affected people, check what you know about their needs, and examine the proposal through more than one lens.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "An empty chair can represent someone who still carries the cost.",
          "term": "Stakeholder",
          "lang": "english",
          "meaning": "A person or group whose interests, choices, or workload are affected by a decision.",
          "use": "Delivery staff and participants may be stakeholders without signing the purchase agreement."
        },
        {
          "id": "u10-l1-decision1",
          "kind": "argue",
          "say": "Map the effects before judging the deal.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E1"
          ],
          "hook": "Who experiences the consequence without signing the agreement?",
          "rule": "u10-r-1",
          "stem": "A vendor and school agree on a cheap digital system that requires students to use personal phones. Some students lack compatible devices.",
          "call": "Before recommending adoption, what gap most needs examination?",
          "issue": "affected people and missing information",
          "options": [
            {
              "text": "Whether another college adopted the system without complaints.",
              "why": "Prior adoption may inform procurement, but it does not establish access for this college’s students who lack compatible devices.",
              "trap": 6
            },
            {
              "text": "Whether the vendor has enough sales staff.",
              "why": "Sales staffing does not resolve the affected students’ access.",
              "trap": 6
            },
            {
              "text": "How students without devices could participate.",
              "why": "These students bear a direct consequence that the price agreement leaves unresolved."
            },
            {
              "text": "Assume students without devices can simply borrow one.",
              "why": "That assumes the missing access arrangement instead of checking it.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u10-l1-match2",
          "kind": "pairs",
          "say": "A lens reveals a concern; it does not finish the decision.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Which relevant concern could your preferred lens miss?",
          "set": "Different lenses, different questions",
          "mode": "concept",
          "pairs": [
            {
              "l": "Rights",
              "r": "What basic claims or freedoms must be respected?"
            },
            {
              "l": "Justice",
              "r": "Are benefits and burdens distributed on a defensible basis?"
            },
            {
              "l": "Consequences",
              "r": "What benefits and harms may follow for those affected?"
            },
            {
              "l": "Care",
              "r": "What responsibilities arise from relationships and vulnerability?"
            }
          ]
        },
        {
          "id": "u10-l1-decision3",
          "kind": "argue",
          "say": "Represent a concern without inventing a voice.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Have you checked what the affected people actually need?",
          "rule": "u10-r-1",
          "stem": "A buyer thinks night-shift workers will welcome a new compulsory training time. Nobody has asked them, and schedule flexibility is still possible.",
          "call": "To improve the decision, what should the buyer do next?",
          "issue": "affected people and missing information",
          "options": [
            {
              "text": "Consult the affected shifts before fixing the schedule.",
              "why": "Their information can shape a decision that is still adjustable."
            },
            {
              "text": "Assume all workers value the same time slot.",
              "why": "That replaces missing information with an unsupported assumption.",
              "trap": 3
            },
            {
              "text": "Cancel the training because any inconvenience makes it unfair.",
              "why": "The inconvenience may be manageable; affected input helps assess it.",
              "trap": 10
            },
            {
              "text": "Ask the vendor to guess the night shift’s preferred time.",
              "why": "A vendor guess does not replace relevant input from the affected shift.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false
        },
        {
          "id": "u10-l1-decision4",
          "kind": "hypo",
          "say": "An absent team still carries the workload.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making",
          "sourceIds": [
            "E1"
          ],
          "hook": "Who has to make this promise real?",
          "rule": "u10-r-1",
          "stem": "A community group negotiates free weekend delivery with a sponsor. The sponsor’s warehouse team has not been consulted and would need extra shifts.",
          "call": "What best addresses the missing perspective before agreement?",
          "issue": "affected people and missing information",
          "options": [
            {
              "text": "Celebrate the free delivery and let operations solve it later.",
              "why": "The promise could create an unexamined burden or fail in practice.",
              "trap": 10
            },
            {
              "text": "Check staffing, compensation, and feasibility with the responsible team.",
              "why": "This brings the affected team and real delivery constraints into the decision."
            },
            {
              "text": "Assume donated goods make any delivery burden acceptable.",
              "why": "A beneficial purpose does not erase the costs borne by others.",
              "trap": 6
            },
            {
              "text": "Ask the sponsor’s salesperson to guarantee unpaid staff enthusiasm.",
              "why": "A sales promise cannot establish the delivery team’s capacity, compensation, or preferences.",
              "trap": 3
            }
          ],
          "answer": 1,
          "transfer": true,
          "facts": [
            "warehouse team has not been consulted",
            "would need extra shifts"
          ]
        },
        {
          "id": "u10-h-contrast-1",
          "kind": "hypo",
          "say": "Let verified improvements change the assessment they address.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Consultation should inform the decision, not become an unchangeable objection.",
          "rule": "u10-r-1",
          "stem": "In a fictional school procurement, students without compatible phones now have a tested loan-device route with no added charge. Affected students have checked that route, and the delivery team confirms it can support the numbers. Other costs and terms remain under review.",
          "call": "What should change in the evaluation?",
          "issue": "a resolved access gap",
          "facts": [
            "tested loan-device route",
            "Affected students have checked",
            "support the numbers"
          ],
          "options": [
            {
              "text": "Keep claiming there is no route for those students.",
              "why": "The stated evidence now establishes a workable route for this identified concern.",
              "trap": 3
            },
            {
              "text": "Update the access finding and examine the remaining terms.",
              "why": "Relevant new evidence changes this part of the assessment without settling every issue."
            },
            {
              "text": "Approve automatically because one concern is resolved.",
              "why": "Other costs and terms still require review.",
              "trap": 9
            },
            {
              "text": "Remove the loan devices because the purchase price is low.",
              "why": "The devices are what address the identified access gap.",
              "trap": 4
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
      "id": "u10l2",
      "title": "Fair by which rule?",
      "objective": "Compare fairness criteria without pretending that fairness always means an equal split.",
      "takeaway": "Name the fairness rule, then test who benefits and who bears its cost.",
      "fieldwork": "With a willing partner, compare two ways to allocate a fictional shared resource. Explain one reason for each without trying to label either person fair or unfair. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u10-r-2",
          "kind": "rule",
          "say": "Name the allocation rule, check its relevance, and apply it consistently while leaving a route to challenge it.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "The same split can reflect equal shares, need, cost, or contribution; ask which.",
          "title": "A visible fairness criterion",
          "elements": [
            "Identify the criterion actually agreed",
            "Apply it to relevant comparable facts",
            "Distinguish arithmetic from value disagreement",
            "Explain tradeoffs and review a challenged criterion"
          ],
          "ordered": false,
          "distractorElements": [
            "Invent a criterion after learning which result benefits you"
          ],
          "ex": [
            {
              "facts": "A published cleanup discount applies to two groups that meet the same condition.",
              "result": "Assess both under that condition rather than adding a hidden friendship exception."
            },
            {
              "facts": "Equality and need can recommend different distributions.",
              "result": "Equal shares gives comparable eligible groups the same amount. Need prioritizes people with fewer practical alternatives."
            },
            {
              "facts": "Relevant cost and contribution use different bases too.",
              "result": "Relevant cost links charges to demonstrable delivery costs. Contribution recognizes documented work supplied to the project."
            }
          ],
          "terms": [
            "Allocation criterion"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A numerical allocation can be correct under a chosen criterion without proving the criterion universally best.",
              "a": true,
              "why": "Applying the rule and defending the rule are different questions."
            },
            {
              "t": "mcq",
              "q": "Partners agree on the facts but favor equality and need respectively. What is unresolved?",
              "options": [
                "Which fairness priority should govern the allocation under the agreed facts",
                "An unresolved fact about which applicants qualify",
                "A need to recheck arithmetic before choosing"
              ],
              "a": "Which fairness priority should govern the allocation under the agreed facts",
              "why": "The disagreement concerns which defensible concern should govern distribution."
            }
          ]
        },
        {
          "id": "u10-term-2",
          "kind": "term",
          "say": "Name the allocation rule, check its relevance, and apply it consistently while leaving a route to challenge it.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "The same split can reflect equal shares, need, cost, or contribution; ask which.",
          "term": "Allocation criterion",
          "lang": "english",
          "meaning": "The stated basis for distributing a benefit or burden.",
          "use": "Equal shares, need, contribution, and relevant cost can lead to different distributions."
        },
        {
          "id": "u10-l2-decision1",
          "kind": "argue",
          "say": "Say what makes the difference relevant.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Is the allocation rule defensible beyond your preferred outcome?",
          "rule": "u10-r-2",
          "stem": "A fictional workshop has agreed to prioritize applicants who otherwise lack access to training. Two equally eligible applicants differ only in access to alternatives.",
          "call": "Which factor should guide this decision under that stated rule?",
          "issue": "fairness criteria and consistency",
          "options": [
            {
              "text": "Which applicant registered earliest.",
              "why": "Arrival order would apply a different allocation rule.",
              "trap": 10
            },
            {
              "text": "Which applicant has fewer practical alternatives.",
              "why": "This directly applies the access criterion the workshop agreed to use."
            },
            {
              "text": "Which applicant is more persuasive in conversation.",
              "why": "Persuasiveness does not establish the stated need.",
              "trap": 6
            },
            {
              "text": "Choose the applicant who is your friend while calling it access need.",
              "why": "Friendship is not the stated access criterion.",
              "trap": 4
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u10-l2-match2",
          "kind": "pairs",
          "say": "Make the rule visible before debating the result.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Could the same criterion be applied consistently to comparable cases?",
          "set": "Name the criterion",
          "mode": "concept",
          "pairs": [
            {
              "l": "Give every eligible group the same amount",
              "r": "Equal shares"
            },
            {
              "l": "Give more support to those with fewer alternatives",
              "r": "Need"
            },
            {
              "l": "Charge more where delivery costs are demonstrably higher",
              "r": "Relevant cost"
            },
            {
              "l": "Reward documented work contributed to the project",
              "r": "Contribution"
            }
          ]
        },
        {
          "id": "u10-l2-decision3",
          "kind": "argue",
          "say": "Disagreement can reveal a tradeoff rather than an error.",
          "status": "fictional",
          "src": "Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E2"
          ],
          "hook": "Are you treating a value choice as if it were a missing calculation?",
          "rule": "u10-r-2",
          "stem": "Two partners must allocate a grant. One favors equal amounts; the other favors greater need. Both understand the facts, and no rule was agreed.",
          "call": "Which next step best makes the disagreement workable?",
          "issue": "fairness criteria and consistency",
          "options": [
            {
              "text": "Tell the other partner that fairness always means equality.",
              "why": "That asserts one contested criterion as universally decisive.",
              "trap": 7
            },
            {
              "text": "Add more decimal places to the budget calculation.",
              "why": "The disagreement concerns priorities, not arithmetic precision.",
              "trap": 10
            },
            {
              "text": "Discuss tradeoffs; agree a decision process.",
              "why": "This addresses the actual conflict while leaving room for reasoned disagreement."
            },
            {
              "text": "Randomize immediately and describe that as their agreed method.",
              "why": "No such method has been agreed in the facts given.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false
        },
        {
          "id": "u10-l2-decision4",
          "kind": "hypo",
          "say": "A different price needs a relevant reason, not a flattering story.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Would you accept the criterion if a comparable customer asked about it?",
          "rule": "u10-r-2",
          "stem": "A fictional venue offers a published discount when groups handle their own cleanup because that reduces staffing cost. Two groups meet the same conditions. One is a personal friend.",
          "call": "Under the stated policy, how should their eligibility be judged?",
          "issue": "fairness criteria and consistency",
          "options": [
            {
              "text": "Apply the same cleanup criterion to both.",
              "why": "This applies the published, relevant condition consistently."
            },
            {
              "text": "Add a hidden discount only for the friend.",
              "why": "Friendship is not the stated eligibility criterion.",
              "trap": 10
            },
            {
              "text": "Deny both because every price difference is unfair.",
              "why": "The policy connects the difference to a specific service cost; identical prices are not the only possible fair approach.",
              "trap": 7
            },
            {
              "text": "Apply different conditions privately to each group.",
              "why": "That conceals a departure from the published relevant criterion.",
              "trap": 4
            }
          ],
          "answer": 0,
          "transfer": true,
          "facts": [
            "published discount when groups handle their own cleanup",
            "Two groups meet the same conditions"
          ]
        },
        {
          "id": "u10-h-contrast-2",
          "kind": "hypo",
          "say": "Apply the stated criterion without pretending it fits every situation.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "A different agreed rule can justify a different allocation.",
          "rule": "u10-r-2",
          "stem": "In a fictional workshop, applicants were told that an equal lottery would allocate the last places among equally eligible people. The organizers agreed this before seeing the names. No new access barrier or relevant eligibility difference has been identified.",
          "call": "Which action follows the stated allocation process?",
          "issue": "applying a different agreed criterion",
          "facts": [
            "equal lottery",
            "before seeing the names",
            "No new access barrier"
          ],
          "options": [
            {
              "text": "Privately replace the lottery with a friendship preference.",
              "why": "That substitutes an undisclosed irrelevant criterion.",
              "trap": 4
            },
            {
              "text": "Say lotteries are always the only ethical allocation method.",
              "why": "The chosen process does not establish a universal rule.",
              "trap": 7
            },
            {
              "text": "Apply the announced lottery and explain its limited purpose.",
              "why": "This follows the agreed process under the stated equal eligibility."
            },
            {
              "text": "Announce that the person who argues loudest has greatest need.",
              "why": "Persuasiveness does not establish need and is not the agreed method.",
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
      "id": "u10l3",
      "title": "A real chance to participate",
      "objective": "Recognize how power, time, information, and access affect meaningful participation.",
      "takeaway": "A signature shows agreement; it does not answer every question about the process.",
      "fieldwork": "Rewrite a fictional invitation so that a person can request an accessible format or more explanation without having to disclose private details. Discuss a reasonable alternative and what fact or value would change your recommendation; do not rate anyone’s character.",
      "items": [
        {
          "id": "u10-r-3",
          "kind": "rule",
          "say": "Remove feasible access barriers, explain genuine limits, and leave the substantive choice with the person.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E3",
            "E2",
            "E5"
          ],
          "hook": "A readable document changes access; it does not decide the price.",
          "title": "Participation without takeover",
          "elements": [
            "Identify the specific participation barrier",
            "Ask what format or explanation works",
            "Avoid unnecessary private information",
            "Distinguish access support from changing substantive terms"
          ],
          "ordered": false,
          "distractorElements": [
            "Infer decision-making incompetence from a format request"
          ],
          "ex": [
            {
              "facts": "A buyer asks for text rather than an image-only proposal.",
              "result": "Provide the available text without requiring a diagnosis."
            }
          ],
          "terms": [
            "Participation barrier"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Improving access guarantees that the person will accept the offer.",
              "a": false,
              "why": "Access supports evaluation; the person may still disagree with the terms."
            },
            {
              "t": "mcq",
              "q": "Which request concerns participation rather than price?",
              "options": [
                "Reduce the quoted fee",
                "Provide a screen-reader-compatible version",
                "Add another service for the same fee"
              ],
              "a": "Provide a screen-reader-compatible version",
              "why": "The text format makes information accessible without itself changing the deal."
            }
          ]
        },
        {
          "id": "u10-term-3",
          "kind": "term",
          "say": "Remove feasible access barriers, explain genuine limits, and leave the substantive choice with the person.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E3",
            "E2",
            "E5"
          ],
          "hook": "A readable document changes access; it does not decide the price.",
          "term": "Participation barrier",
          "lang": "english",
          "meaning": "An obstacle to understanding, communicating about, or taking part in a decision.",
          "use": "An image-only contract can block access even when the stated price is unchanged."
        },
        {
          "id": "u10-l3-decision1",
          "kind": "argue",
          "say": "Ask who can wait, leave, or recover.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation",
          "sourceIds": [
            "E1",
            "E3"
          ],
          "hook": "Which constraint makes this person’s choice harder to evaluate freely?",
          "rule": "u10-r-3",
          "stem": "A supplier has been asked to decide today on a complex contract, but the buyer has flexibility and knows the supplier has not seen the cancellation terms. The goal is a considered agreement.",
          "call": "Which adjustment best addresses the specific imbalance?",
          "issue": "access and substantive limits",
          "options": [
            {
              "text": "Provide clear terms and a genuine review period.",
              "why": "Time and clear terms address the stated barriers without promising an outcome."
            },
            {
              "text": "Keep the deadline because a signature proves sufficient choice.",
              "why": "Assent alone does not resolve the missing opportunity to understand the commitment.",
              "trap": 7
            },
            {
              "text": "Promise the supplier will never regret accepting.",
              "why": "No party can guarantee a future reaction or every consequence.",
              "trap": 7
            },
            {
              "text": "Offer a small discount while withholding the cancellation terms.",
              "why": "Changing price does not remove the stated information barrier.",
              "trap": 6
            }
          ],
          "answer": 0,
          "transfer": false
        },
        {
          "id": "u10-l3-sort2",
          "kind": "sort",
          "say": "Help someone participate without pretending every request must be granted.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Is the obstacle about evaluating the offer or wanting different terms?",
          "mode": "category",
          "q": "Classify each fictional issue using only the stated facts.",
          "buckets": [
            "Barrier to participation",
            "Disagreement about terms"
          ],
          "items": [
            {
              "text": "The contract is image-only and the buyer’s screen reader cannot read it.",
              "bucket": "Barrier to participation",
              "why": "The format prevents access to the information."
            },
            {
              "text": "Both sides understand the price but prefer different amounts.",
              "bucket": "Disagreement about terms",
              "why": "The issue is the substance of the price."
            },
            {
              "text": "The meeting has no captions despite a participant’s stated need for them.",
              "bucket": "Barrier to participation",
              "why": "The format blocks meaningful participation."
            },
            {
              "text": "Both sides understand the deadline but want different delivery dates.",
              "bucket": "Disagreement about terms",
              "why": "The disagreement concerns the proposed commitment."
            }
          ]
        },
        {
          "id": "u10-l3-decision3",
          "kind": "argue",
          "say": "Ask what helps participation, not for a diagnosis.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E5"
          ],
          "hook": "Are you collecting private information you do not need?",
          "rule": "u10-r-3",
          "stem": "A buyer says the proposal format is difficult to use and asks for a text version. You can provide one immediately.",
          "call": "What best supports the decision?",
          "issue": "access and substantive limits",
          "options": [
            {
              "text": "Ask for medical documentation before providing the file.",
              "why": "The stated request can be met without collecting that sensitive information.",
              "trap": 10
            },
            {
              "text": "Provide text and offer other useful formats.",
              "why": "This removes the identified barrier while leaving the decision with the buyer."
            },
            {
              "text": "Have a colleague decide on the buyer’s behalf.",
              "why": "Difficulty with a format does not justify taking over the person’s choice.",
              "trap": 6
            },
            {
              "text": "Send a summary that omits the difficult cancellation condition.",
              "why": "A usable format must still preserve material information.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": false
        },
        {
          "id": "u10-l3-decision4",
          "kind": "hypo",
          "say": "A clear boundary can still leave a dignified choice.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework",
          "sourceIds": [
            "E1",
            "E2"
          ],
          "hook": "Can they understand the actual options without being pressured to accept?",
          "rule": "u10-r-3",
          "stem": "A fictional nonprofit cannot extend a fixed grant deadline. An applicant needs the instructions in an accessible text format, which staff can supply today.",
          "call": "Which response best combines the real limit with meaningful participation?",
          "issue": "access and substantive limits",
          "options": [
            {
              "text": "Refuse the format request because the deadline is fixed.",
              "why": "The deadline does not prevent improving access to the instructions.",
              "trap": 6
            },
            {
              "text": "Promise an extension that staff cannot authorize.",
              "why": "An unauthorized promise creates a new problem.",
              "trap": 10
            },
            {
              "text": "Supply the text, explain the fixed deadline, and answer process questions.",
              "why": "This addresses the removable barrier and communicates the remaining constraint honestly."
            },
            {
              "text": "Supply the text but falsely say accepting is compulsory.",
              "why": "Providing access does not justify misrepresenting the choice.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": true,
          "facts": [
            "cannot extend a fixed grant deadline",
            "accessible text format",
            "staff can supply today"
          ]
        },
        {
          "id": "u10-h-contrast-3",
          "kind": "hypo",
          "say": "Offer the access support you can actually provide.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Stanford Encyclopedia of Philosophy: Ethics of Manipulation · Markkula Center: Introduction to the framework · OECD AI Principles",
          "sourceIds": [
            "E1",
            "E3",
            "E2",
            "E5"
          ],
          "hook": "When one route is unavailable, check alternatives with the person.",
          "rule": "u10-r-3",
          "stem": "In a fictional grant process, staff cannot produce the requested format before a genuinely fixed deadline. They can offer a compatible text version now and a staffed explanation today. The applicant can evaluate whether those alternatives work; staff cannot authorize an extension.",
          "call": "Which response best addresses the actual limits?",
          "issue": "feasible access alternatives",
          "facts": [
            "cannot produce the requested format",
            "compatible text version now",
            "cannot authorize an extension"
          ],
          "options": [
            {
              "text": "Guarantee the unavailable format by the deadline.",
              "why": "That makes a promise the staff cannot meet.",
              "trap": 3
            },
            {
              "text": "Decline all help because the preferred format is unavailable.",
              "why": "The scenario provides potentially useful alternatives.",
              "trap": 7
            },
            {
              "text": "Choose on the applicant’s behalf because time is short.",
              "why": "A format difficulty does not authorize taking over the decision.",
              "trap": 4
            },
            {
              "text": "Explain the limit and offer the available alternatives.",
              "why": "The person can assess workable support without receiving an unauthorized promise."
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
      "id": "u10l4",
      "title": "Decide under real scarcity",
      "objective": "Apply a stated allocation rule, surface its tradeoffs, and give affected people a feasible review route when capacity is limited.",
      "takeaway": "Scarcity does not remove the need for reasons, consistency, and review.",
      "fieldwork": "Allocate four fictional places among six fictional applicants using two defensible criteria. Compare who benefits and who waits; discuss a challenge that would justify reconsidering the chosen process without scoring anyone’s moral worth.",
      "items": [
        {
          "id": "u10-r-4",
          "kind": "rule",
          "say": "State the capacity, choose a defensible allocation process, explain the tradeoff, and define how errors can be reviewed.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "A waitlist can be transparent without making waiting costless.",
          "title": "Scarcity needs a process",
          "elements": [
            "Verify the available capacity",
            "State the relevant allocation criterion before applying it",
            "Explain who benefits and who bears the delay",
            "Provide a feasible route to correct facts or challenge the process"
          ],
          "ordered": false,
          "distractorElements": [
            "Promise a place to everyone while capacity remains fixed"
          ],
          "ex": [
            {
              "facts": "A workshop has four remaining places and an agreed lottery for equally eligible applicants.",
              "result": "Apply that method openly and explain the waitlist and factual-review route."
            }
          ],
          "terms": [
            "Review route"
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A transparent process removes every burden caused by scarcity.",
              "a": false,
              "why": "It can improve decision-making while some people still wait or miss out."
            },
            {
              "t": "mcq",
              "q": "What should happen when an eligibility record is credibly challenged before allocation?",
              "options": [
                "Apply the original record without examining new evidence",
                "Check the challenged fact through review",
                "Award a place before checking the claim"
              ],
              "a": "Check the challenged fact through review",
              "why": "A review route corrects facts without treating either the complaint or the initial record as conclusive."
            }
          ],
          "boundary": true
        },
        {
          "id": "u10-term-4",
          "kind": "term",
          "say": "State the capacity, choose a defensible allocation process, explain the tradeoff, and define how errors can be reviewed.",
          "status": "ethics",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "A waitlist can be transparent without making waiting costless.",
          "term": "Review route",
          "lang": "english",
          "meaning": "A stated way to have relevant facts or a decision reconsidered by someone able to act.",
          "use": "A coordinator can check an incorrectly recorded eligibility condition before the lottery.",
          "boundary": true
        },
        {
          "id": "u10-h-boundary-1",
          "kind": "hypo",
          "say": "A full event can still use an undisclosed, inconsistent allocation rule.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "Count the places and inspect the reason for assigning them.",
          "rule": "u10-r-4",
          "stem": "In a fictional workshop, four places remain for six equally eligible applicants. The published process is an equal lottery, and no relevant differences have been identified. The organizer’s friend applies. The organizer proposes reserving one of the four places privately for the friend.",
          "call": "Does that reservation follow the stated process?",
          "issue": "a hidden allocation exception",
          "facts": [
            "published process is an equal lottery",
            "equally eligible",
            "privately for the friend"
          ],
          "options": [
            {
              "text": "Yes, because any personal relationship is relevant need.",
              "why": "Friendship alone does not establish the stated eligibility or need criterion.",
              "trap": 3
            },
            {
              "text": "No, because the hidden preference departs from the agreed rule.",
              "why": "The reservation substitutes an undisclosed criterion for the announced process."
            },
            {
              "text": "Yes, because four places still go to somebody.",
              "why": "Filling capacity does not establish consistency with the allocation method.",
              "trap": 6
            },
            {
              "text": "No, because no resource may ever be allocated by lottery.",
              "why": "That universal claim is not supported by the course’s plural fairness framework.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "grid": true,
          "boundary": true
        },
        {
          "id": "u10-pairs-boundary",
          "kind": "pairs",
          "say": "Capacity, criteria, burdens, and correction each need an answer.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "One accurate number does not complete the fairness discussion.",
          "set": "Four questions under scarcity",
          "mode": "concept",
          "pairs": [
            {
              "l": "How many places actually remain?",
              "r": "Capacity"
            },
            {
              "l": "What relevant basis decides between applicants?",
              "r": "Allocation criterion"
            },
            {
              "l": "Who waits or loses access under this process?",
              "r": "Distribution of burdens"
            },
            {
              "l": "Who can correct an eligibility error?",
              "r": "Review route"
            }
          ],
          "boundary": true
        },
        {
          "id": "u10-h-boundary-transfer",
          "kind": "hypo",
          "say": "Correct the relevant fact, then apply the stated decision process.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "Review can change eligibility without guaranteeing selection.",
          "rule": "u10-r-4",
          "stem": "In a fictional community program, a participant was excluded because the roster marked a prerequisite incomplete. The participant supplies the completion record before places are allocated. A coordinator is authorized to correct records; the published selection rule otherwise stays the same.",
          "call": "What should the coordinator do first?",
          "issue": "correcting a consequential fact",
          "facts": [
            "supplies the completion record",
            "before places are allocated",
            "authorized to correct records"
          ],
          "options": [
            {
              "text": "Check the record and correct eligibility if it confirms completion.",
              "why": "The evidence addresses the factual basis without replacing the selection criterion."
            },
            {
              "text": "Guarantee a place immediately as compensation for the error.",
              "why": "Eligibility correction does not itself establish a place under the selection rule.",
              "trap": 2
            },
            {
              "text": "Ignore the evidence to keep the initial decision consistent.",
              "why": "Consistency does not require preserving a factual error.",
              "trap": 5
            },
            {
              "text": "Cancel every allocation rule whenever someone requests review.",
              "why": "A factual challenge can be resolved without abandoning the whole process.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": true,
          "grid": false,
          "boundary": true
        },
        {
          "id": "u10-trap-boundary",
          "kind": "trap",
          "say": "A formula implements a value choice; it does not erase it.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "Precision and justification are different tests.",
          "cat": "5",
          "stem": "After publishing a need-based allocation, an organizer says the decision cannot be questioned because the formula has numbers.",
          "wrong": "Using numbers turns the allocation criterion into an objective moral fact.",
          "right": "Check the arithmetic and explain the value choice behind the criterion.",
          "why": "A calculation can implement a chosen priority without proving that priority uniquely correct.",
          "boundary": true,
          "fixDistractors": [
            "Keep increasing the calculation’s precision until the value disagreement disappears.",
            "Choose whichever numerical criterion gives your own group the largest share."
          ]
        },
        {
          "id": "u10-num-boundary",
          "kind": "num",
          "say": "12 minus 8 leaves 4; do not promise a fifth remaining place.",
          "status": "fictional",
          "src": "Markkula Center: Framework for Ethical Decision Making · Markkula Center: Introduction to the framework · Harvard Ombuds: Seven Elements of Effective Negotiations",
          "sourceIds": [
            "E1",
            "E2",
            "N9"
          ],
          "hook": "Capacity arithmetic establishes a limit, not who deserves a place.",
          "ask": "A fictional workshop has 12 places and 8 confirmed allocations. How many remain before any new offer?",
          "answer": "4 places",
          "alt": [
            "4",
            "four",
            "four places"
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

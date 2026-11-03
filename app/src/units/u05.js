// Original Agora teaching content; fictional scenarios. Sources are identified per item.
(function () {
  const unit = {
  "id": "u05",
  "title": "Before you bargain",
  "blurb": "Know the problem, your options, and your limits.",
  "subject": "preparation",
  "assume": "All people, organizations, prices, and outcomes in the exercises are fictional. Judge the stated facts; do not assume hidden motives, authority, or guaranteed results.",
  "lessons": [
    {
      "id": "u05l1",
      "title": "Behind the request",
      "objective": "Separate stated positions from interests you have checked.",
      "takeaway": "Treat your explanation of someone else's request as a hypothesis until you check it.",
      "fieldwork": "For a low-stakes request, ask what the requested change would make possible, then summarize the answer.",
      "items": [
        {
          "id": "u05-r-l1",
          "kind": "rule",
          "say": "Treat your explanation of someone else's request as a hypothesis until you check it.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "For a low-stakes request, ask what the requested change would make possible, then summarize the answer.",
          "title": "Check the purpose behind the request",
          "elements": [
            "Separate requested terms from underlying concerns",
            "Treat inferred motives as hypotheses",
            "Check which conditions are essential",
            "Use confirmed priorities to explore options"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume a discount request proves lack of money",
            "Replace an essential condition with your preferred feature"
          ],
          "ex": [
            {
              "facts": "A client prefers Friday but needs only the signup form for Monday.",
              "result": "Check that distinction before pricing a rushed full launch."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A requested term proves the person’s unspoken motive.",
              "a": false,
              "why": "The position is visible; the explanation behind it may still need checking."
            },
            {
              "t": "mcq",
              "q": "A client requests monthly billing without explanation. What can you conclude?",
              "options": [
                "They are unable to pay annually",
                "Monthly billing is the requested term",
                "They distrust your company"
              ],
              "a": "Monthly billing is the requested term",
              "why": "The request establishes a position; the interest remains to be clarified."
            }
          ]
        },
        {
          "id": "u05-t-l1",
          "kind": "term",
          "say": "A concern, need, or purpose that helps explain why a term matters.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Ask what the request would solve rather than assigning an unseen motive.",
          "term": "Interest",
          "lang": "english",
          "meaning": "A concern, need, or purpose that helps explain why a term matters.",
          "use": "Ask what the request would solve rather than assigning an unseen motive.",
          "pairWith": "Position",
          "alt": []
        },
        {
          "id": "u05-l1-1",
          "kind": "hypo",
          "say": "Before changing the offer, learn what the change needs to achieve.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Whose concern have you actually heard, and whose are you assuming?",
          "originalId": "u05l1-1",
          "ethics": "Whose concern have you actually heard, and whose are you assuming?",
          "stem": "In this fictional college partnership, a buyer asks for a lower workshop price. You can change price or scope, but do not yet know the reason for the request.",
          "call": "What best helps you choose a useful response?",
          "issue": "interests behind positions",
          "rule": "u05-r-l1",
          "options": [
            {
              "text": "Explain all the workshop features again.",
              "why": "Features may be relevant later; repeating them does not clarify this request.",
              "trap": 6
            },
            {
              "text": "Assume the workshop is unaffordable and remove the longest session.",
              "why": "The buyer has not explained the concern or approved a reduced scope.",
              "trap": 3
            },
            {
              "text": "Offer a small discount now.",
              "why": "A discount might help, but it commits a concession before you know the problem.",
              "trap": 9
            },
            {
              "text": "Ask about the price concern.",
              "why": "This checks the underlying concern before choosing a change to the offer."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "do not yet know the reason for the request"
          ]
        },
        {
          "id": "u05-l1-2",
          "kind": "sort",
          "say": "A plausible story about their motive is still a story.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Do not assign a motive to someone merely because it fits your sales story.",
          "originalId": "u05l1-2",
          "ethics": "Do not assign a motive to someone merely because it fits your sales story.",
          "mode": "category",
          "q": "In this fictional exchange, the buyer asks for monthly billing and says annual payment would exhaust this quarter's available budget. Sort the statements by what the exchange establishes.",
          "buckets": [
            "Requested term",
            "Stated interest",
            "Untested explanation"
          ],
          "items": [
            {
              "text": "The buyer wants monthly billing.",
              "bucket": "Requested term",
              "why": "This is the payment arrangement explicitly requested."
            },
            {
              "text": "The buyer wants to preserve this quarter's available budget.",
              "bucket": "Stated interest",
              "why": "The buyer directly gave this reason."
            },
            {
              "text": "The buyer doubts the provider will survive a year.",
              "bucket": "Untested explanation",
              "why": "That concern could exist, but nothing in the exchange establishes it."
            },
            {
              "text": "The buyer thinks the total annual fee is too high.",
              "bucket": "Untested explanation",
              "why": "The buyer identified this quarter’s available budget, not dissatisfaction with the total annual price."
            },
            {
              "text": "The buyer wants to avoid using this quarter’s entire available budget on annual payment.",
              "bucket": "Stated interest",
              "why": "This follows the reason explicitly given in the exchange."
            },
            {
              "text": "The buyer’s board has banned all annual contracts.",
              "bucket": "Untested explanation",
              "why": "No board rule is stated."
            }
          ]
        },
        {
          "id": "u05-l1-3",
          "kind": "hypo",
          "say": "Check your understanding before building the solution.",
          "status": "fictional",
          "src": "Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N9"
          ],
          "hook": "Can the other person correct your summary without losing the opportunity?",
          "originalId": "u05l1-3",
          "ethics": "Can the other person correct your summary without losing the opportunity?",
          "stem": "A fictional client says, 'A Friday launch would be useful, but the essential thing is having the signup form ready for Monday's event.'",
          "call": "Which summary best checks the priority before you offer a schedule?",
          "issue": "interests behind positions",
          "rule": "u05-r-l1",
          "options": [
            {
              "text": "The event matters, so timing is flexible.",
              "why": "It drops the actual Monday deadline and may produce an unusable schedule.",
              "trap": 5
            },
            {
              "text": "The form for Monday is essential; Friday is preferred. Right?",
              "why": "It preserves both the essential deadline and the preference, while inviting correction."
            },
            {
              "text": "Confirm a Friday full launch and treat Monday as a backup target.",
              "why": "This reverses the explicit distinction between a preference and the essential form.",
              "trap": 5
            },
            {
              "text": "You need every feature live by Friday.",
              "why": "This turns a preference into a requirement and expands the essential scope.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "essential thing is having the signup form ready for Monday's event"
          ]
        },
        {
          "id": "u05-p-l1",
          "kind": "pairs",
          "say": "A position, an interest, a preference, and an assumption are different information.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "For a low-stakes request, ask what the requested change would make possible, then summarize the answer.",
          "set": "Separate what was said from your interpretation",
          "pairs": [
            {
              "l": "Please bill monthly",
              "r": "Requested payment term"
            },
            {
              "l": "Annual payment uses this quarter’s funds",
              "r": "Stated cash-timing concern"
            },
            {
              "l": "They must distrust our company",
              "r": "Unverified interpretation"
            },
            {
              "l": "The form must work by Monday’s event",
              "r": "Stated essential condition"
            },
            {
              "l": "Friday would be useful if possible",
              "r": "Stated preference"
            }
          ],
          "mode": "concept"
        },
        {
          "id": "u05-h-l1-contrast",
          "kind": "hypo",
          "say": "Once the concern is explicit, use it to shape a feasible option rather than repeatedly rediscovering it.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Change the deciding fact and reconsider the next action.",
          "stem": "A college buyer asks for a lower workshop price, then explains, 'Our approved budget is fixed. We can accept a shorter workshop, provided the required safety session remains.' You can price a shorter version without removing that session.",
          "call": "What next step uses the new information?",
          "issue": "confirmed interest guides options",
          "facts": [
            "approved budget is fixed",
            "provided the required safety session remains"
          ],
          "options": [
            {
              "text": "Repeat the broad question without using the stated constraint.",
              "why": "The buyer has given a specific budget condition and an acceptable variable.",
              "trap": 6
            },
            {
              "text": "Remove the safety session to meet the budget.",
              "why": "The safety session is explicitly essential.",
              "trap": 2
            },
            {
              "text": "Offer a shorter scope retaining the required session.",
              "why": "The changed scope addresses the confirmed budget concern and preserves the essential condition."
            },
            {
              "text": "Assume the lower price request means the buyer doubts your skill.",
              "why": "The buyer supplied a different reason; no evidence supports the added motive.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u05-r-l1",
          "transfer": false,
          "callType": "accurate",
          "contrastWith": "u05-l1-1"
        },
        {
          "id": "u05-l1-4",
          "kind": "hypo",
          "say": "Find the purpose before choosing the term.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N1",
            "N9"
          ],
          "hook": "Ask about the work need without demanding private personal details.",
          "originalId": "u05l1-4",
          "ethics": "Ask about the work need without demanding private personal details.",
          "stem": "In a fictional team, Lee requests a permanently earlier meeting. You can change meeting time or offer an asynchronous update, but you do not know what is difficult about the current arrangement.",
          "call": "What should you do first?",
          "issue": "interests behind positions",
          "rule": "u05-r-l1",
          "options": [
            {
              "text": "Explain why the current time suits most people.",
              "why": "That context may matter later; it does not yet help you understand Lee's request.",
              "trap": 6
            },
            {
              "text": "Ask everyone to vote on Lee’s request before asking what it would solve.",
              "why": "A vote does not establish the need or whether another option could address it.",
              "trap": 6
            },
            {
              "text": "Ask what an earlier meeting would solve.",
              "why": "It checks the need and leaves room for several workable arrangements, without requiring personal disclosure."
            },
            {
              "text": "Move every meeting thirty minutes earlier.",
              "why": "This may help, but you have not established that it solves the problem or works for others.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "do not know what is difficult"
          ]
        }
      ]
    },
    {
      "id": "u05l2",
      "title": "Your real plan B",
      "objective": "Distinguish an available alternative, a target, and a reservation point.",
      "takeaway": "Compare the complete proposed deal with what you can realistically do without it.",
      "fieldwork": "Privately write one feasible alternative to an upcoming agreement and one fact you need to check about it.",
      "items": [
        {
          "id": "u05-r-l2",
          "kind": "rule",
          "say": "Compare the complete proposed deal with what you can realistically do without it.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Privately write one feasible alternative to an upcoming agreement and one fact you need to check about it.",
          "title": "Evaluate the real alternative",
          "elements": [
            "Identify an action available without this agreement",
            "Check feasibility, timing, costs, and risk",
            "Compare complete packages",
            "Keep the target and threshold distinct"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat an informal lead as secured work",
            "Invent an alternative to strengthen a position"
          ],
          "ex": [
            {
              "facts": "A confirmed project is available; a higher-paying lead lacks dates and scope.",
              "result": "Investigate the lead before treating its headline amount as the fallback."
            },
            {
              "facts": "Rowan can accept another confirmed job, aims for $86,000 here, and has evaluated $80,000 as the minimum with other terms fixed.",
              "result": "BATNA means best alternative to a negotiated agreement: accepting the other job is the fallback action. $86,000 is the target. The evaluated $80,000 boundary is the reservation point for these fixed terms."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A target price is the same thing as a BATNA.",
              "a": false,
              "why": "A target is an outcome sought here; a BATNA is an action available if this agreement fails."
            },
            {
              "t": "mcq",
              "q": "Which information makes a lead more useful as an alternative?",
              "options": [
                "A larger verbal amount alone",
                "Confirmed scope, timing, and availability",
                "A persuasive way to describe it"
              ],
              "a": "Confirmed scope, timing, and availability",
              "why": "The alternative must be feasible, not just attractive in the abstract."
            }
          ]
        },
        {
          "id": "u05-t-l2",
          "kind": "term",
          "say": "The best feasible course of action available if this negotiation does not produce agreement.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Name an action, such as accepting a confirmed job, not the salary you hope to negotiate.",
          "term": "BATNA",
          "lang": "english",
          "meaning": "The best feasible course of action available if this negotiation does not produce agreement.",
          "use": "Name an action, such as accepting a confirmed job, not the salary you hope to negotiate.",
          "pairWith": "Target",
          "alt": [
            "best alternative to a negotiated agreement"
          ]
        },
        {
          "id": "u05-l2-1",
          "kind": "hypo",
          "say": "Your plan B is something you can do, not a number you demand.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations",
          "sourceIds": [
            "N2",
            "N3"
          ],
          "hook": "A hoped-for alternative cannot honestly be presented as a confirmed offer.",
          "originalId": "u05l2-1",
          "ethics": "A hoped-for alternative cannot honestly be presented as a confirmed offer.",
          "stem": "In this hypothetical salary negotiation, Rowan can accept a confirmed role elsewhere. For the new role, Rowan aims for $86,000 and has evaluated $80,000 as the minimum with the other terms fixed.",
          "call": "Which is Rowan's BATNA?",
          "issue": "feasible alternative to agreement",
          "rule": "u05-r-l2",
          "options": [
            {
              "text": "Accept the other job.",
              "why": "This is the feasible action Rowan can take without the current agreement."
            },
            {
              "text": "Require at least $80,000 here.",
              "why": "That describes the reservation point under the stated terms, not the alternative action.",
              "trap": 4
            },
            {
              "text": "Tell the new employer that its offer is already $86,000.",
              "why": "That describes neither a feasible fallback action nor the offer actually made.",
              "trap": 5
            },
            {
              "text": "Request $86,000 from this employer.",
              "why": "That is the target in the current negotiation, not the action if it ends.",
              "trap": 4
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "can accept a confirmed role elsewhere"
          ]
        },
        {
          "id": "u05-l2-2",
          "kind": "pairs",
          "say": "What you can do, what you can accept, and what you hope for are different.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations",
          "sourceIds": [
            "N2",
            "N3"
          ],
          "hook": "You can keep a private limit private without misrepresenting it.",
          "originalId": "u05l2-2",
          "ethics": "You can keep a private limit private without misrepresenting it.",
          "set": "Three different jobs",
          "mode": "concept",
          "pairs": [
            {
              "l": "BATNA",
              "r": "What will I do without this agreement?"
            },
            {
              "l": "Reservation point",
              "r": "Where does this complete deal stop being preferable to my alternative?"
            },
            {
              "l": "Target",
              "r": "What outcome am I aiming for here?"
            },
            {
              "l": "Position",
              "r": "What term am I explicitly asking for?"
            },
            {
              "l": "Interest",
              "r": "What concern or purpose does the requested term serve?"
            }
          ]
        },
        {
          "id": "u05-l2-3",
          "kind": "hypo",
          "say": "Compare complete options, not attractive headlines.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations",
          "sourceIds": [
            "N2",
            "N9"
          ],
          "hook": "Do not call an unverified lead a firm fallback.",
          "originalId": "u05l2-3",
          "ethics": "Do not call an unverified lead a firm fallback.",
          "stem": "A fictional freelancer has one confirmed four-week project and an informal lead promising higher pay with no dates or scope.",
          "call": "Before treating the lead as the better fallback, what is most useful?",
          "issue": "feasible alternative to agreement",
          "rule": "u05-r-l2",
          "options": [
            {
              "text": "Count the higher amount as available income.",
              "why": "The amount does not establish that work is available or comparable.",
              "trap": 3
            },
            {
              "text": "Tell the current client the other work is booked.",
              "why": "This would present an uncertain lead as a confirmed commitment.",
              "trap": 3
            },
            {
              "text": "Check scope, availability, timing, and payment.",
              "why": "These facts determine whether the lead is feasible and genuinely more attractive."
            },
            {
              "text": "Use the higher verbal fee as the minimum acceptable price on the confirmed job.",
              "why": "An unverified lead is not a complete alternative from which to infer a threshold.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "no dates or scope"
          ]
        },
        {
          "id": "u05-p-l2",
          "kind": "steps",
          "say": "A fallback comparison is personal and conditional; do not turn uncertain leads into secured options.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Privately write one feasible alternative to an upcoming agreement and one fact you need to check about it.",
          "title": "Check a fallback before relying on it",
          "steps": [
            "List actions available without this deal",
            "Check each action’s feasibility and timing",
            "Compare complete costs, benefits, and risks",
            "Choose the best feasible alternative for your needs"
          ],
          "distractors": [
            "Count unconfirmed income as guaranteed",
            "Describe a hoped-for option as already accepted"
          ]
        },
        {
          "id": "u05-h-l2-contrast",
          "kind": "hypo",
          "say": "Update your BATNA when feasibility and your comparison change; do not freeze an old assessment.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Change the deciding fact and reconsider the next action.",
          "stem": "A freelancer’s higher-paying lead was previously informal. The new client now confirms scope, dates, payment, and availability in writing. The freelancer verifies that it is feasible and preferable to the other confirmed project under their own criteria.",
          "call": "What preparation update is warranted?",
          "issue": "verified alternative changes comparison",
          "facts": [
            "confirms scope, dates, payment, and availability",
            "feasible and preferable"
          ],
          "options": [
            {
              "text": "Treat the previously uncertain lead as unavailable.",
              "why": "The relevant evidence has changed.",
              "trap": 11
            },
            {
              "text": "Use the newly verified option in the fallback comparison.",
              "why": "A previously uncertain lead can become a feasible preferred alternative."
            },
            {
              "text": "Tell the current client the new offer guarantees future income forever.",
              "why": "A confirmed project does not establish unlimited future work.",
              "trap": 7
            },
            {
              "text": "Assume the current client must match the new terms.",
              "why": "Your alternative changes your decision, not the other party’s obligations.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u05-r-l2",
          "transfer": false,
          "callType": "accurate",
          "contrastWith": "u05-l2-3"
        },
        {
          "id": "u05-l2-4",
          "kind": "hypo",
          "say": "An alternative must work for the people who will use it.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "E1"
          ],
          "hook": "Do not remove an attendee's essential access need to make the price comparison look better.",
          "originalId": "u05l2-4",
          "ethics": "Do not remove an attendee's essential access need to make the price comparison look better.",
          "stem": "In a fictional event negotiation, your attendees require step-free entry. A cheaper backup venue has confirmed that it cannot provide it. Your team can instead hold an accessible online event.",
          "call": "What is the sound preparation move?",
          "issue": "feasible alternative to agreement",
          "rule": "u05-r-l2",
          "options": [
            {
              "text": "Use the cheaper venue's price as your complete fallback value.",
              "why": "That venue fails an essential requirement, so its price alone misstates your alternative.",
              "trap": 2
            },
            {
              "text": "Assume the preferred venue must match the cheaper quote.",
              "why": "The quotes cover meaningfully different options and do not establish an obligation to match.",
              "trap": 5
            },
            {
              "text": "Book the cheaper venue and ask attendees to arrange their own access.",
              "why": "The confirmed access requirement is not met by passing the burden to attendees.",
              "trap": 2
            },
            {
              "text": "Evaluate the online event as the feasible fallback.",
              "why": "It is an available action that meets the stated access requirement; evaluate its other tradeoffs too."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "require step-free entry",
            "accessible online event"
          ]
        }
      ]
    },
    {
      "id": "u05l3",
      "title": "Room for a deal?",
      "objective": "Find an agreement range when limits are known and acknowledge uncertainty when they are not.",
      "takeaway": "An overlap means agreement is possible under those terms; it does not prove the deal is fair.",
      "fieldwork": "For an upcoming discussion, separate known constraints from estimates and list one useful question about the unknowns.",
      "items": [
        {
          "id": "u05-r-l3",
          "kind": "rule",
          "say": "An overlap means agreement is possible under those terms; it does not prove the deal is fair.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Stanford Report, How to be a better negotiator",
          "sourceIds": [
            "N2",
            "E1",
            "N3",
            "N4"
          ],
          "hook": "For an upcoming discussion, separate known constraints from estimates and list one useful question about the unknowns.",
          "title": "Distinguish overlap from uncertainty",
          "elements": [
            "Use actual acceptable limits",
            "Hold the compared non-price terms fixed",
            "Treat an unknown boundary as unknown",
            "Recalculate when scope or constraints change"
          ],
          "ordered": false,
          "distractorElements": [
            "Use an opening request as the private limit",
            "Treat the midpoint as automatically acceptable"
          ],
          "ex": [
            {
              "facts": "A provider accepts $4,500 or more; the buyer accepts $5,000 or less.",
              "result": "The inclusive overlap is $4,500–$5,000 under those fixed terms."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An opening offer always reveals the other side’s reservation point.",
              "a": false,
              "why": "An opening proposal is not proof of the full range they can accept."
            },
            {
              "t": "mcq",
              "q": "Firm minimum $6,000; firm maximum $5,000; terms fixed. Which follows?",
              "options": [
                "The fair agreement must be $5,500",
                "There is no overlap under these terms",
                "The buyer must raise the budget"
              ],
              "a": "There is no overlap under these terms",
              "why": "Changing scope may create a different range; pressure does not change the stated arithmetic."
            }
          ]
        },
        {
          "id": "u05-t-l3",
          "kind": "term",
          "say": "The set of agreements acceptable to the parties under the stated terms and constraints.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Stanford Report, How to be a better negotiator",
          "sourceIds": [
            "N2",
            "E1",
            "N3",
            "N4"
          ],
          "hook": "A price interval assumes other terms are fixed; an overlap does not prove fairness.",
          "term": "ZOPA",
          "lang": "english",
          "meaning": "The set of agreements acceptable to the parties under the stated terms and constraints.",
          "use": "A price interval assumes other terms are fixed; an overlap does not prove fairness.",
          "pairWith": "Opening offer",
          "alt": [
            "zone of possible agreement"
          ]
        },
        {
          "id": "u05-l3-1",
          "kind": "hypo",
          "say": "Find the overlap, then discuss how to choose within it.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N2",
            "E1"
          ],
          "hook": "A price being acceptable does not settle whether the process or distribution is fair.",
          "originalId": "u05l3-1",
          "ethics": "A price being acceptable does not settle whether the process or distribution is fair.",
          "stem": "In this hypothetical fixed-term contract, a provider will accept $4,500 or more and a buyer will pay $5,000 or less. Both accept their boundary price.",
          "call": "What is the ZOPA?",
          "issue": "overlap under fixed terms",
          "rule": "u05-r-l3",
          "options": [
            {
              "text": "$4,750 only.",
              "why": "The midpoint is one possible price, not the whole range or automatically the fairest choice.",
              "trap": 4
            },
            {
              "text": "$4,500–$5,000.",
              "why": "Every price in this interval, including both endpoints, satisfies the stated limits with the terms fixed."
            },
            {
              "text": "Every price below $5,000.",
              "why": "Prices below $4,500 fail the provider's stated minimum.",
              "trap": 2
            },
            {
              "text": "$4,500 or less.",
              "why": "Most prices in this range fail the provider’s minimum.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "accept $4,500 or more",
            "pay $5,000 or less"
          ]
        },
        {
          "id": "u05-l3-2",
          "kind": "argue",
          "say": "An opening offer is not a map of every acceptable deal.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations",
          "sourceIds": [
            "N2",
            "N3"
          ],
          "hook": "Gather information without pretending to know the other person's private limit.",
          "originalId": "u05l3-2",
          "ethics": "Gather information without pretending to know the other person's private limit.",
          "stem": "A fictional employer opens at $78,000. You need at least $80,000 under the proposed terms, but know nothing about its approved range.",
          "call": "Which conclusion is justified?",
          "issue": "overlap under fixed terms",
          "rule": "u05-r-l3",
          "options": [
            {
              "text": "There is definitely no possible agreement.",
              "why": "The opening offer does not establish the employer's maximum.",
              "trap": 3
            },
            {
              "text": "The employer can definitely reach $80,000.",
              "why": "You have no evidence that the employer can meet your minimum.",
              "trap": 3
            },
            {
              "text": "You do not yet know whether the limits overlap.",
              "why": "Your limit is known; the employer's is not. A question about flexibility could clarify the situation."
            },
            {
              "text": "The only possible agreement is exactly $79,000.",
              "why": "A midpoint of the opening and your limit reveals neither the employer’s maximum nor an acceptable agreement.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u05-l3-3",
          "kind": "sort",
          "say": "Do not confuse no overlap with not knowing yet.",
          "status": "practice",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement",
          "sourceIds": [
            "N2"
          ],
          "hook": "A no-deal diagnosis is allowed; it need not be repaired by pressuring someone past their limit.",
          "originalId": "u05l3-3",
          "ethics": "A no-deal diagnosis is allowed; it need not be repaired by pressuring someone past their limit.",
          "mode": "category",
          "q": "For these hypothetical contracts, all non-price terms are fixed and each party accepts at its stated limit. Sort the evidence.",
          "buckets": [
            "Overlap exists",
            "No overlap",
            "Not enough information"
          ],
          "items": [
            {
              "text": "Seller minimum $2,000; buyer maximum $2,400.",
              "bucket": "Overlap exists",
              "why": "Prices from $2,000 to $2,400 meet both limits."
            },
            {
              "text": "Seller minimum $3,200; buyer maximum $3,000.",
              "bucket": "No overlap",
              "why": "No single price meets both limits under the fixed terms."
            },
            {
              "text": "Seller asks $3,500; buyer's maximum is $3,000; seller's minimum is unknown.",
              "bucket": "Not enough information",
              "why": "The seller's opening request does not establish its minimum."
            },
            {
              "text": "Seller accepts $2,500 or more; buyer accepts $2,500 or less.",
              "bucket": "Overlap exists",
              "why": "Both accept the boundary, so exactly $2,500 overlaps."
            },
            {
              "text": "Seller minimum $4,100; buyer maximum $4,000.",
              "bucket": "No overlap",
              "why": "The fixed limits do not overlap."
            },
            {
              "text": "Buyer offers $2,000; seller minimum is $2,500; buyer maximum is unknown.",
              "bucket": "Not enough information",
              "why": "The buyer’s opening does not establish its highest acceptable price."
            }
          ]
        },
        {
          "id": "u05-p-l3",
          "kind": "num",
          "say": "$5,000 − $4,500 = $500 of overlap; the width does not identify a uniquely fair price.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Stanford Report, How to be a better negotiator",
          "sourceIds": [
            "N2",
            "E1",
            "N3",
            "N4"
          ],
          "hook": "For an upcoming discussion, separate known constraints from estimates and list one useful question about the unknowns.",
          "ask": "In a fictional fixed-term deal, the seller accepts $4,500 or more and the buyer accepts $5,000 or less, including endpoints. How wide is the price overlap?",
          "answer": "$500",
          "alt": [
            "500",
            "500 dollars"
          ]
        },
        {
          "id": "u05-h-l3-contrast",
          "kind": "hypo",
          "say": "A changed scope can create a different overlap only after the new terms and limits are checked.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Markkula Center: A Framework for Ethical Decision Making; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Stanford Report, How to be a better negotiator",
          "sourceIds": [
            "N2",
            "E1",
            "N3",
            "N4"
          ],
          "hook": "Change the deciding fact and reconsider the next action.",
          "stem": "Full scope requires a provider’s minimum of $6,000 and a buyer’s maximum of $5,000. A reduced scope has now been verified to meet the buyer’s core need, and the provider accepts at least $4,500 for it. The buyer’s maximum remains $5,000. Both accept their boundaries.",
          "call": "What follows for the reduced scope?",
          "issue": "recalculate after scope changes",
          "facts": [
            "reduced scope has now been verified",
            "at least $4,500",
            "maximum remains $5,000"
          ],
          "options": [
            {
              "text": "The original $6,000 minimum still applies to the different scope.",
              "why": "The provider has specified a new threshold for the reduced work.",
              "trap": 11
            },
            {
              "text": "The new midpoint is compulsory.",
              "why": "Overlap allows several prices; the midpoint is not compulsory.",
              "trap": 7
            },
            {
              "text": "Full scope is now feasible for $4,500 as well.",
              "why": "The lower threshold applies only to the changed deliverables.",
              "trap": 3
            },
            {
              "text": "Its inclusive price overlap is $4,500–$5,000.",
              "why": "These prices meet both stated limits for the verified reduced scope."
            }
          ],
          "answer": 3,
          "rule": "u05-r-l3",
          "transfer": false,
          "callType": "accurate",
          "contrastWith": "u05-l3-4"
        },
        {
          "id": "u05-l3-4",
          "kind": "hypo",
          "say": "A smaller price may need a different deal.",
          "status": "fictional",
          "src": "Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Stanford Report, How to be a better negotiator",
          "sourceIds": [
            "N2",
            "N4"
          ],
          "hook": "Make removed work visible; do not imply the buyer is receiving the original package.",
          "originalId": "u05l3-4",
          "ethics": "Make removed work visible; do not imply the buyer is receiving the original package.",
          "stem": "In a fictional service contract, full scope requires at least $6,000; the client can pay at most $5,000. Both limits are firm. A smaller scope might meet the client's core need but has not been checked.",
          "call": "What best explores a feasible agreement?",
          "issue": "overlap under fixed terms",
          "rule": "u05-r-l3",
          "options": [
            {
              "text": "Check a reduced scope and price it separately.",
              "why": "This examines a genuinely different deal without assuming it satisfies either party yet."
            },
            {
              "text": "Keep full scope but label $5,000 a trial.",
              "why": "Renaming the payment does not make the full scope feasible at that price.",
              "trap": 5
            },
            {
              "text": "Ask the client to approve $5,500 as an exception to both fixed limits.",
              "why": "The scenario states both limits are firm; relabeling their violation does not produce a feasible deal.",
              "trap": 5
            },
            {
              "text": "Agree at the midpoint, $5,500.",
              "why": "The midpoint violates both stated limits.",
              "trap": 2
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "Both limits are firm",
            "has not been checked"
          ]
        }
      ]
    },
    {
      "id": "u05l4",
      "title": "Recheck the whole deal",
      "objective": "Set a conditional reservation point and update it when a material term, alternative, or constraint changes.",
      "takeaway": "Your acceptable boundary belongs to a complete package and a real alternative; changing either calls for a fresh comparison.",
      "fieldwork": "For a low-stakes negotiation, describe your fallback, target, and minimum acceptable complete package. Mark one changed fact that would make you recalculate.",
      "items": [
        {
          "id": "u05-r-l4",
          "kind": "rule",
          "say": "Your acceptable boundary belongs to a complete package and a real alternative; changing either calls for a fresh comparison.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "For a low-stakes negotiation, describe your fallback, target, and minimum acceptable complete package. Mark one changed fact that would make you recalculate.",
          "title": "Use a conditional reservation point",
          "elements": [
            "Compare the complete proposed package",
            "Include costs, risks, and essential constraints",
            "Relate the boundary to a feasible alternative",
            "Re-evaluate when a material fact changes"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat the target as the minimum by definition",
            "Keep a price threshold after changing all non-price terms"
          ],
          "ex": [
            {
              "facts": "A salary threshold assumes remote work; the revised offer adds a costly commute.",
              "result": "Recalculate the complete comparison before reusing the old salary boundary."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A reservation point can change when a material non-price term changes.",
              "a": true,
              "why": "The threshold belongs to the evaluated package, not an isolated number."
            },
            {
              "t": "mcq",
              "q": "Which fact calls for a fresh comparison?",
              "options": [
                "The same offer is printed in a new font",
                "A necessary benefit is removed from the offer",
                "The recruiter uses a different greeting"
              ],
              "a": "A necessary benefit is removed from the offer",
              "why": "A material package change can change acceptability."
            }
          ]
        },
        {
          "id": "u05-t-l4",
          "kind": "term",
          "say": "The boundary at which a complete deal meets your evaluated minimum compared with your alternative and constraints.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "State the assumptions behind the boundary; a target is what you seek, not automatically the least you can accept.",
          "term": "Reservation point",
          "meaning": "The boundary at which a complete deal meets your evaluated minimum compared with your alternative and constraints.",
          "use": "State the assumptions behind the boundary; a target is what you seek, not automatically the least you can accept.",
          "pairWith": "Target",
          "lang": "english",
          "alt": [
            "reservation price",
            "walk-away point",
            "walk away point"
          ]
        },
        {
          "id": "u05-st-l4",
          "kind": "steps",
          "say": "Recalculation improves your decision; it does not oblige the other party to meet the new boundary.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Recalculation improves your decision; it does not oblige the other party to meet the new boundary.",
          "title": "A useful routine for revisiting your boundary",
          "steps": [
            "Restate the full offer and alternative",
            "Identify changed costs, risks, or essential conditions",
            "Compare the revised package using your criteria",
            "Update the boundary or decide the offer cannot fit"
          ],
          "distractors": [
            "Use last month’s number regardless of changed terms",
            "Assume the other party must fund every new preference"
          ]
        },
        {
          "id": "u05-p-l4",
          "kind": "pairs",
          "say": "A price, a target, an alternative, and a constraint answer different preparation questions.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "A price, a target, an alternative, and a constraint answer different preparation questions.",
          "set": "Separate the preparation notes",
          "mode": "concept",
          "pairs": [
            {
              "l": "Accept the confirmed alternative job",
              "r": "Fallback action"
            },
            {
              "l": "Aim to obtain $86,000 on these terms",
              "r": "Target"
            },
            {
              "l": "Accept no less than $80,000 under the fixed comparison",
              "r": "Reservation point"
            },
            {
              "l": "Employer opens at $78,000",
              "r": "Opening proposal"
            },
            {
              "l": "A required remote day is removed",
              "r": "Material change to evaluate"
            }
          ]
        },
        {
          "id": "u05-so-l4",
          "kind": "sort",
          "say": "Update on material facts, not the force with which the same number is repeated.",
          "status": "practice",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Update on material facts, not the force with which the same number is repeated.",
          "q": "For the stated fixed salary comparison, does this fact require reconsidering the package?",
          "mode": "category",
          "buckets": [
            "Material to reconsider",
            "No material change stated"
          ],
          "items": [
            {
              "text": "The offer removes the agreed remote-work arrangement and adds commuting costs.",
              "bucket": "Material to reconsider",
              "why": "The evaluated costs and scheduling conditions change."
            },
            {
              "text": "The written offer repeats the same salary, benefits, schedule, and duties.",
              "bucket": "No material change stated",
              "why": "No changed comparison input is stated."
            },
            {
              "text": "A previously feasible alternative job is withdrawn.",
              "bucket": "Material to reconsider",
              "why": "The available fallback changes."
            },
            {
              "text": "The recruiter changes the document’s cover color.",
              "bucket": "No material change stated",
              "why": "This does not change any stated term."
            },
            {
              "text": "The role now requires a shift the candidate cannot work.",
              "bucket": "Material to reconsider",
              "why": "The offer fails an essential constraint, regardless of salary."
            },
            {
              "text": "The employer restates the same opening price more confidently.",
              "bucket": "No material change stated",
              "why": "Confidence alone supplies no new term or evidence."
            }
          ]
        },
        {
          "id": "u05-tr-l4",
          "kind": "trap",
          "say": "When the model counts only salary minus commute cost, a $4,000 new cost needs $4,000 more salary to restore the comparison.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Under this model, $84,000 restores the earlier net cash comparison.",
          "stem": "A candidate’s $80,000 threshold assumed no commute cost. In a simplified comparison, only salary minus commuting cost matters; ignore taxes and all other deductions. The revised role adds $4,000 annual commuting cost; all other terms and the alternative are unchanged.",
          "wrong": "The original $80,000 salary still reaches the same cash threshold.",
          "right": "Under this model, $84,000 restores the earlier salary-minus-commute comparison.",
          "why": "With taxes and other deductions excluded, adding $4,000 salary offsets the $4,000 commute cost. Real comparisons may need other inputs.",
          "cat": "2",
          "rule": "u05-r-l4",
          "fixDistractors": [
            "Reduce the requested salary to $76,000 because the commute cost should be subtracted from the required salary.",
            "Say that $84,000 guarantees the same after-tax income, even though this model excludes tax effects."
          ]
        },
        {
          "id": "u05-h-l4",
          "kind": "hypo",
          "say": "A matching price does not establish acceptability when the obligations have changed.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Use only the stated facts, including the limiting condition.",
          "stem": "A freelancer evaluates a full package at a minimum of $4,000, including one revision round. The client offers $4,000 but now requires six rounds. The freelancer has not assessed the extra work and has not agreed to the change.",
          "call": "What should happen before treating this offer as meeting the minimum?",
          "issue": "changed package threshold",
          "facts": [
            "now requires six rounds",
            "has not assessed the extra work"
          ],
          "options": [
            {
              "text": "Accept: it matches the old minimum.",
              "why": "The old threshold included different work.",
              "trap": 2
            },
            {
              "text": "Re-evaluate the added work and complete package.",
              "why": "The revised scope changes what the threshold is comparing."
            },
            {
              "text": "Reject because every changed request is automatically unacceptable.",
              "why": "The new work may or may not be feasible; it has not been evaluated.",
              "trap": 7
            },
            {
              "text": "Assume the extra rounds will not be used and keep the old calculation.",
              "why": "Their use is not known, but they are a requested obligation.",
              "trap": 3
            }
          ],
          "answer": 1,
          "rule": "u05-r-l4",
          "transfer": false,
          "callType": "accurate",
          "boundary": true
        },
        {
          "id": "u05-x-l4",
          "kind": "hypo",
          "say": "Losing an alternative calls for a fresh, honest comparison—not a fabricated one or unlimited acceptance.",
          "status": "fictional",
          "src": "MIT Sloan, Seven keys to effective negotiation; Harvard Business School Online, Understanding ZOPA: The Zone of Possible Agreement; Harvard Program on Negotiation, When to Make the First Offer in Negotiations; Harvard Medical School Ombuds, Seven Elements of Effective Negotiations; Markkula Center: A Framework for Ethical Decision Making",
          "sourceIds": [
            "N1",
            "N2",
            "N3",
            "N9",
            "E1"
          ],
          "hook": "Apply the principle in a different setting before reading feedback.",
          "stem": "You planned to use a confirmed meeting room as the alternative if a venue negotiation failed. The room is now unavailable. An online event remains possible, but your team has not yet evaluated its participation and access needs.",
          "call": "Which update is sound?",
          "issue": "alternative becomes unavailable",
          "facts": [
            "room is now unavailable",
            "has not yet evaluated"
          ],
          "options": [
            {
              "text": "Continue citing the room as booked so your position stays strong.",
              "why": "That would misrepresent a material fact about the alternative.",
              "trap": 3
            },
            {
              "text": "Assume the preferred venue must now offer a discount.",
              "why": "Your changed fallback does not create that obligation.",
              "trap": 5
            },
            {
              "text": "Treat any price from the preferred venue as acceptable.",
              "why": "A weaker alternative does not erase budget and other constraints.",
              "trap": 7
            },
            {
              "text": "Evaluate the online option and revisit your comparison.",
              "why": "The former fallback is unavailable; a feasible alternative must be assessed anew."
            }
          ],
          "answer": 3,
          "rule": "u05-r-l4",
          "transfer": true,
          "callType": "accurate",
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof AGORA_UNITS !== "undefined") AGORA_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();

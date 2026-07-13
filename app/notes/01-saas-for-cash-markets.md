# Building multi-tenant SaaS for a market that pays in cash

*~6 min read*

Every SaaS playbook you'll ever read makes one assumption so quietly you won't notice it until it breaks: the customer has a card on file.

Card on file is the invisible engine of the entire SaaS model. Auto-renewal, free trials that convert silently, dunning emails, churn dashboards, MRR charts that update themselves — all of it sits on top of a payment method that charges itself every month without a human being involved.

Lagos does not work like that.

Here, business runs on bank transfers and cash. Not because people can't get cards — because transfers are instant, free, and everyone already lives inside their banking app. A restaurant owner on the Mainland doesn't think in subscriptions. He thinks in payments he sends, one at a time, when he decides to send them. Every payment is a decision.

I learned what that does to a SaaS business by building one.

## Renewal is a conversation, not an event

When there's no card on file, nothing renews by itself. Every month, your customer has to actively choose you again — open their banking app, type your account number, and send the money.

That sounds like a nightmare for retention, and honestly, some months it is. But it forces a discipline that card-on-file SaaS never has to develop: **the product has to feel worth paying for every single month.** There's no zombie revenue, no customers who forgot they're subscribed. If Servrr isn't obviously useful in week three of the month, I feel it on the first of the next one.

Silicon Valley calls this churn risk. I've come to think of it as an honesty mechanism.

## Churn is silent, so you can't wait for it

With auto-billing, churn announces itself: a cancellation event fires, a webhook hits your server, a dashboard turns red. With transfer-based billing, churn is just... silence. The payment doesn't arrive. Was that a decision? Did the owner travel? Is the restaurant having a slow month? Did they forget?

You don't know until you ask. So you ask. Renewal in this market is a WhatsApp message, and the response to that message tells you more about your product than any analytics tool. "Ah, I'll send it tomorrow" is fine. "Let me get back to you" is a warning. Silence after a read receipt is your churn dashboard.

The practical upshot: in a cash market, **collections and customer success are the same job.** The person chasing payment is also the person hearing, unfiltered, exactly why the product is or isn't earning its fee.

## What it does to the software itself

Here's where it gets interesting for the actual build, because "the market pays in cash" leaks all the way down into your schema.

**Tenant states get more complicated.** A card-on-file SaaS has basically two states: active and cancelled. A transfer-based SaaS has active, grace period, "owner says he's sending it," soft-locked, and win-back — and your multi-tenant architecture has to handle all of them without ever making a restaurant look broken in front of its customers. Killing a tenant's QR menus mid-service because a transfer is three days late is how you lose the customer *and* the referral network behind them. Servrr's tenant lifecycle degrades gracefully instead of cutting off — because in this market, next week's payment usually comes.

**Payment confirmation is a human workflow, not a webhook.** Someone sends a transfer, someone confirms it landed, someone flips the tenant back to active. You can automate pieces of that, but you have to design the admin tooling knowing a human is in the loop. I built Servrr's internal tools around that reality instead of pretending a Stripe webhook was coming to save me.

**And the end-customer never pays in-app at all.** Diners at a Servrr restaurant order from their phones, but they pay the way they've always paid — cash or transfer, to a human, at the table. The software's job is to know when that moment happens. That single fact shaped Servrr's whole session model: a table session isn't closed by a payment API, it's closed by a staff member who just collected the money. The point-of-truth is a person, and the system is honest about that.

## Pricing in a currency that moves

Naira pricing adds one more layer the playbooks never mention: inflation. A price that felt right in January can feel wrong by August — to you because your costs rose, to your customer because everything else in their life rose too. Annual plans are a harder sell when nobody wants to prepay in a currency that's moving, so the rhythm of the business stays monthly, which loops right back to renewal-as-conversation.

## Why I'd still rather build here

It would be easy to read all this as a list of handicaps. I don't see it that way anymore.

A market that pays in cash is a market with no tolerance for software that doesn't pull its weight. Every retained customer is a real vote, cast monthly, with money that hurt to send. If you can build something that survives that — that people choose again and again, one deliberate transfer at a time — you haven't just built a SaaS. You've built something people actually want.

The card on file hides the truth from you. The transfer tells it to your face.

---

*I'm building Servrr (QR ordering for restaurants) and StaffStack (HR & payroll for Nigerian SMBs) from Lagos. If you're building for markets like this one, my DMs are open.*

# Why Servrr uses permanent table tokens instead of QR-per-order

*~4 min read*

The obvious way to build QR ordering is the wrong way. I know because I built it first.

## The obvious way

When I started Servrr, the security model seemed straightforward: generate a QR code with an expiring token. Customer scans, token validates, order flows, token dies. Fresh token per session, nothing stale, nothing reusable. Textbook.

Then I looked at how a QR code actually lives in a Lagos restaurant, and the textbook fell apart.

A restaurant's QR code isn't a digital object. It's a **physical artifact**. It gets printed, laminated, and glued to a table, where it will sit — through spills, wipe-downs, and harmattan dust — for months. Nobody is reprinting table stickers every session. The digital lifecycle I'd designed (short-lived, disposable, per-order) was the exact opposite of the physical lifecycle the code would actually have (permanent, laminated, per-table).

When your token expires but your sticker doesn't, every returning customer scans a dead code. That's not a security model. That's a broken restaurant.

## The threat model, honestly stated

So what was the expiring token actually protecting against? Sit with it and the real threats are specific:

1. **The stale scan.** Someone scans the code from outside the restaurant — from a screenshot, from a photo a friend sent, from the parking lot — and places an order for a table they're not sitting at.
2. **The ghost order.** A customer leaves, a new party sits down, and an order from the previous session lands on the new bill.
3. **The prankster.** Someone posts the QR online and strangers spam the kitchen.

Notice what all three have in common: the problem is never *who has the code*. The code is public by design — it's glued to a table in a public room. The problem is always *whether an order should be accepted right now, for this table*.

That's not an identity question. That's a **session** question.

## Separate identity from session

That reframing is the whole architecture. In Servrr:

- The **token identifies the table, permanently.** Table 7's QR is Table 7's QR forever. Print it once, laminate it, done.
- The **session decides whether orders are accepted.** When guests sit down, a staff member opens a session for that table. When the bill is paid, staff close it. Between sessions, the table's token still scans — it just can't order.

A scan outside an open session hits a wall, politely. The screenshot from the parking lot does nothing. The previous party's ghost order is impossible because their session closed when they paid. The prankster's viral post is a link to a menu that won't take orders.

And the security boundary lands exactly where the trust already lives: **with the staff on the floor.** A waiter deciding "this table is now active" is the same judgment they've always made — someone sat down, service begins. The system didn't ask restaurant workers to learn security. It encoded a judgment they were already making.

## The trade-off, because there's always one

The cost is a human step: staff have to open and close sessions. In a card-swipe country you might auto-close sessions on payment webhooks. In a cash-and-transfer market, payment already flows through a human at the table — so the human closing the session isn't an extra step, it's the *same* step. The constraint that looked like a limitation (no in-app payment) is what made the staff-controlled session feel natural instead of bolted on.

## The lesson I keep

Design for the artifact, not the abstraction. My first architecture was correct for a QR code that lives in a database. It was wrong for a QR code that lives under lamination on a table in Surulere. The second one is the real one.

Whenever a "best practice" fails in a market like this, it's usually not because the market is behind. It's because the practice smuggled in an assumption nobody wrote down. Find the assumption, and the right design is usually simpler than the one you copied.

---

*Servrr is live at servrr.ng. If you're building for physical spaces, I'd genuinely love to compare notes.*

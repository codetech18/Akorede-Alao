# Shipping to Lagos restaurants: what the demo never shows you

*~7 min read*

The demo is a lie. Not a malicious one — every founder's demo is a lie the same way. It's your product performing under perfect conditions: your phone, your network, your practiced thumb, your enthusiasm filling the room. The restaurant owner nods. Sometimes they even pay.

Then week two arrives, and you find out what you actually built.

This is what week two taught me, shipping Servrr into real Lagos restaurants.

## The person who says yes is not the person who uses it

The owner buys the product. The waiters live with it. These are different people with close to opposite incentives, and the demo only ever wins over the first one.

The owner sees fewer lost orders, cleaner records, a modern look for the restaurant. The waiter sees a new thing to learn during the busiest hours of their day, a system that watches their work, and — if you're not careful — a threat. If your product makes a waiter's shift harder, it will die quietly on the floor no matter what the owner decided in the office. Orders will "not go through." Customers will be told "just call me instead, it's faster." The system will be routed around until it's decorative.

So the real onboarding isn't the owner meeting. It's standing on the floor during service, showing a waiter that opening a table session takes two taps and that the system makes *their* night easier — fewer trips to the kitchen, no disputed orders, no "I never ordered that" arguments at bill time. The moment a waiter realizes the order log settles arguments *in their favor*, you have an ally. Until then you have a saboteur with a legitimate grievance.

## "Simple" means something stricter than you think

I thought Servrr's dashboard was simple. Then I watched someone who had never used any dashboard — not Excel, not Gmail, nothing — try to use it during a dinner rush, on a phone with a cracked screen, with three tables calling for them.

Simple, it turns out, doesn't mean "clean UI with good spacing." It means:

- **One job per screen.** If a screen can do three things, during a rush it does zero.
- **No memory required.** Every screen has to make sense to someone seeing it as if for the first time, because during service, everyone is seeing everything for the first time.
- **Big targets, instant feedback.** A tap has to visibly do something immediately, or it will be tapped five more times, and now you have five duplicate actions in your queue.

Every design review I do now includes one question: *does this survive a Friday night?*

## The network is a feature you don't control

In the demo, everything is instant. In the restaurant, the network dips every time the generator switches over, the router is in the office behind two walls, and the waiter's phone is on a data plan that ran out yesterday.

You cannot fix Lagos infrastructure. You can decide how your product behaves when it wobbles. Which states are cached? Which actions queue and retry? What does the UI say when it's waiting — does it look broken, or does it look patient? A spinner with no words is read as "it has spoiled." A short line of text — "sending your order..." — is read as "it's working." Same delay, opposite outcome.

The demo never shows the loading states. The restaurant is *made of* loading states.

## Support is a WhatsApp message at 9pm

There is no ticketing system. There is your personal WhatsApp, and it will light up during dinner service, which is precisely when the product matters most and when you least want to be debugging.

Early on this felt unsustainable. I've changed my mind: those 9pm messages are the highest-density product feedback I will ever get. Nobody writes a thoughtful feature request, but everybody sends "it's not showing the drinks menu" with a screenshot at the exact moment of failure. My roadmap for the first months was basically a WhatsApp export, sorted by frequency.

The discipline is turning each message into a fix that makes that message impossible, not just answering it. Support you keep re-answering is a design defect with a chat history.

## Staff turnover resets everything

Here's the one nobody warns you about: you train a restaurant's staff, everything runs beautifully, and six weeks later half the floor staff are new people who have never heard of your product. Restaurant turnover is brutal, and every wave of it silently uninstalls your onboarding.

You can't be there for every new hire. So the product has to train people itself — which loops back to "no memory required" — and the restaurant needs one internal champion (usually a supervisor or the cashier) who can teach a new waiter in five minutes. Part of onboarding now is finding and investing in that person, because they, not the owner, are the reason the product is still alive in month four.

## What the street actually respects

After all of this, you'd think the lesson is "Lagos is a hard market." That's not the lesson. Lagos is an *honest* market. It doesn't care about your stack, your design system, or your pitch. It asks one question, every single service, forever: does this make tonight easier?

If the answer is yes, the restaurant will fight to keep you. Waiters will defend the system they once sabotaged. The owner will tell the owner next door, and that referral is worth more than any ad you could buy.

The demo gets you in the door. Week two decides if you stay. Build for week two.

---

*I write these notes from inside the products — Servrr, StockLog, StaffStack — as I build them from Lagos. The unglamorous parts are the whole story.*

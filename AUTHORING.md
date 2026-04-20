# Authoring a Module

This is the checklist I follow when turning a session into a module page. The goal is a page that takes 60 seconds to skim and rewards three minutes of re-reading three years from now.

## 1. Gather source

Pull the primary materials in this order:

1. The slide deck for the session (authoritative on what was taught)
2. The pre-read (if any) — often names the framework's original author
3. Any class handout / post-class note
4. Wikipedia / HBR article on the named framework (for attribution and the "what year" question)

Skim everything first. Do not start writing until you can name the **single question** the session answers.

## 2. Find the core idea

Write one paragraph answering: *what is this session actually about?*

Rules:
- No jargon in the first sentence.
- Name-drop once in the attribution (`— after Edmondson` or `— after Kahneman`).
- No more than ~70 words.
- No "it is not X; it is Y" unless the construction is specifically earned.

The core idea is the thing I want to remember when I've forgotten everything else. Write it last if you have to.

## 3. Pick the diagram shape

Match the idea's shape to a diagram type:

| If the idea is… | Use |
|---|---|
| Five elements that all interact | `pentagon` |
| Two axes crossing into four zones | `2x2` (+ `highlight: true` on the decision-relevant cell) |
| Six things around a centre | `hexagon` |
| An optimum with falloff on both sides | `curve-invertedU` |
| Asymmetric value (gains vs losses) | `curve-s` |
| A fitted relationship with noise | `scatter` |
| One thing mediating many | `network` |
| A sequence of four steps or states | `linear` |
| A single formula | `equation` |

If nothing fits, use `custom` with raw SVG — but you should rarely need this.

## 4. Name the frameworks

List 2–5 named ideas. Each entry:

```js
{
  name: 'Congruence Model',
  author: 'Nadler & Tushman',
  components: ['Strategy', 'Tasks', 'People', 'Culture', 'PPS'],
  rule: 'Alignment between the five predicts performance — gaps predict drag.'
}
```

Rules:
- `name` is the phrase I'd Google three years from now.
- `author` is always present unless the idea is truly folklore.
- `components` is the minimal set I need to re-derive the idea.
- `rule` is the one-sentence *why* this matters. This is the line that earns its place.

## 5. Write "how to apply"

3–5 numbered steps. Each has a `strong` opening verb and a `rest` clause that makes it concrete.

```js
apply: {
  title: 'Running the first diagnosis.',
  steps: [
    { strong: 'Name the five elements for this team.', rest: 'Not in abstract — in sentences that would fit on one slide.' },
    { strong: 'Score each pair.', rest: 'Where is the tension? Where is the alignment? Write down both.' },
    ...
  ]
}
```

This is the section that makes the page useful in a meeting. If I can't imagine opening this page mid-meeting, the steps are wrong.

## 6. ELI5 (optional but usually worth it)

One paragraph that explains the session to someone who has never taken an MBA. Casual register. Real-world analogy. No jargon.

## 7. Key reading (optional)

A quiet footer block pointing at one primary source. Prose + closing kicker. Do not use this to dump extra content — it's a citation, not a second ELI5.

## 8. Voice check

Before committing, read the page out loud. Kill:

- Any sentence that sounds like an HBR article opener
- Any "tidy four-part list" when two points would do
- Any em dash you don't *need*
- Any "it is not X; it is Y" beyond one per site
- Any generic "Challenges and opportunities" close

Keep:

- Specificity (names, years, real scenarios)
- Opinion (where you disagree with the framework or think it's over-rated, say so)
- The occasional fragment. Writing that breathes has short sentences in it. Like that.

## 9. Rebuild and look

```bash
node scripts/build.js
npx http-server -p 8766
```

Open the module page. Check:

- Does the hero diagram render without clipping?
- Does the core idea fit above the fold on a laptop?
- Does it look right on mobile? (DevTools → iPhone viewport)
- Does dark mode work? (System setting or DevTools emulation)

## 10. Ship

```bash
git add data/<course>.js <course>/m<NN>.html <course>/index.html index.html
git commit -m "add <COURSE> m<NN>: <title>"
git push
```

Pages rebuilds in ~30s.

# Container Tags: `<span>`

In the previous challenge, you learned about the _block scoped_ `<div>` tag. Now
let's see its _inline_ counterpart: the `<span>` tag. `<span>` is an
all-purpose _inline_ container; it doesn't bump what it contains onto a new
line. It's typically used to apply styles to a small chunk of text or other
inline elements.

Let's see an example. In the starter code:

- In `styles.css`, add a rule block for a class called `highlight`. Remember
  that class name selectors start with a period (`.`). So your selector will be
  `.highlight`.
- In the rule block, set the `background-color` property to `yellow`.
- Back in `index.html`, add a `<span>` tag with the class `highlight` around
  the text: "don't highlight too much". It should look like this: `<span
class="highlight">don't highlight too much</span>`.

After clicking the ▶ button, "don't highlight too much" should be highlighted in
yellow. Cool.

Practice a little:

1. Highlight some more text using the class you've already styled.
2. Create a new class in `styles.css` and use a `<span>` tag to apply it to some
   text. Maybe you want to underline some text or change its color or size.
3. Get crazy and apply both classes to the same `<span>` tag.

When you've done all that and feel comfortable with `<span>` tags, click the ✔
button.

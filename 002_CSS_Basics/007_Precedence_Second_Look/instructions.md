# Precedence: Second Look

Here's a quick recap of what we've seen so far:

You can apply styles:

- directly to HTML tags (with the `style` attribute)
- by tag
- by ID
- by class

The more specific styling instruction wins when there's a conflict

- Inline styles take precedence over all other styles
- ID styles take precedence over tag styles

But where does class styling fit in the specificity order? A simple experiment
should settle the question.

In the starter code, there's a `<p>` tag with an ID and a class. Your job?
Add a style sheet (within a pair of `<style>` tags) that:

1. sets one text color by class and a different color by tag, then see which
   style rule wins
2. sets one text color by class and a different color by ID, then see which
   style rule wins

Based on your experiments, what's the order of precedence? Are you confident? Click the ✔ button to move on.

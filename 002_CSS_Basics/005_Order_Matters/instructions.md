# Order Matters

In the previous challenge, you saw that conflicting style rules are resolved by
**specificity**: the more _specific_ rule wins. The tag-level style took
precedence over the ID-level style regardless of the order. But order still
matters! That's what we want to explore now.

Here's the question: if competing styles are equally specific, which wins? The
first one defined or the last? Sure, you could look up the style resolution rules,
but it'll be more fun to do a little experiment.

In the starter code, I've already defined an ID-level styling rule for the first
paragraph. Let's add a second and conflicting styling rule above it, like so:

```CSS
<style>
  #first {
    color: red;
  }

  #first {
    color: blue;
  }
</style>
```

Before you update the display, make a guess: will the first paragraph be blue or
red?

If you guessed blue, don't celebrate just yet. Let's confirm that reordering the
styling rules -- putting the make-the-text-red rule _below_ the make-the-text-blue
rule produces the expected result. When you change the order, does the color of
the first paragraph change?

Yes! Now that we've seen how style resolution works with our own eyes, we can update
our mental model: when two style instructions conflict

- the more specific rule wins, or
- if the rules have equal specificity, the last rule defined wins.

And just to confirm, persuade yourself that the same holds true for conflicting
tag-level styles. Add two conflicting rules that both use the `p` selector and
see if the first or last defined rule gets applied.

Once you're sufficiently persuaded, click the ✔ button.

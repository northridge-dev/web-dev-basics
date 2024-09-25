# More Display Options

We just discovered that `display: none` will hide any element to which it is
applied. But the `display` property also controls how elements are arranged
relative to each other.

The two most basic display options are `block` and `inline`. Those terms should
sound familiar. Not long ago, I described `<div>` as a **block** container and
`<span>` as an **inline** container. That's because by default, the `display`
property:

- of `<div>` elements is `block`
- of `<span>` elements is `inline`

`block` display elements start on a new line and (by default) take up the width
of their container. `inline` elements _don't_ start on a new line and are only
as "wide" as their contents.

If we were feeling mischievous, we _could_ make a `<div>` behave like a `<span>`
and vice versa. But that would be crazy! Crazy or not, that's just what
you'll see in the starter code.

But most of the starter code (and all of the CSS and JavaScript) is meant to
show you some other display options. Click the buttons to toggle between them
and notice how the boxes change positions relative to each other.

We'll revisit `grid` and `flex` displays soon. For now, there's not much for
you to do here. I only wanted you to get a sense of the possibilities. But you
can play around with some of the values in the `grid` and `flex` classes. For
example, what if you changed the `justify-content` property to `start` or
`center`? What if you changed `grid-template-columns` to `repeate(2, 1fr)`?

When you're done tinkering, click the ✔ button.

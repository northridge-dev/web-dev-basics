# Styling by Tag

In the last challenge, you separately added `style` attributes to two paragraph
tags. That was okay because there were only two `<p>` blocks and you wanted each
to have a different color. But now imagine that you had an HTML document with 50
`<p>` blocks, all of which should be the same non-default color. Styling each
`<p>` tag separately would be annoying, would bloat the HTML, and would make it
hard to maintain. Suppose you changed your mind and wanted the paragraph text to
be a different color. Do you really want to update 50 style tags?

Luckily, we can do better. We can add to our HTML a special `<style>` tag where
we can define styles for the whole page. And within that tag, we can provide
styling instructions that will apply to all instances of a tag.

Add these styling instructions above the `<p>` tags:

```HTML
<style>
  p {
    color: blue;
  }
</style>
```

Don't look now, but you just wrote your first CSS! That stands for:

- **C**ascading
- **S**tyle
- **S**heets

We'll worry about the "cascading" part soon, and later we'll see that there are
many ways to attach a "style sheet" to an HTML document. (Here you inserted the
style sheet directly into the HTML document with a pair of `<style>` tags.)

For now, let's focus on how:

- to specify where to apply the styles using **selectors**
- to set style properties

In this case, the **selector** is a specific tag, `<p>`. That means that all the
styles you define will be applied to every paragraph block. Then, in braces, you
specified any style properties you want to set for elements that match that
selector. Those style properties are key-value pairs, separated by a colon and
always ending with a semicolon:

```CSS
<selector> {
  <style-property>: <value>;
}
```

To make sure you've got the pattern, let's add one more style to the `<p>` tags.
Add the `font-size` property like so:

```HTML
<style>
  p {
    color: blue;
    font-size: 25px;
  }
</style>
```

`font-size` controls exactly what you'd think it would: the size of the font.
Here we setting the font size to 25 _pixels_ -- that's what `px` stands for.

Got it? Excellent. You're on your way to becoming a CSS wiz. Click the ✔ button.

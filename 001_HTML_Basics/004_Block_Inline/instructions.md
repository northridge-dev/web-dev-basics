# Block vs. Inline Elements

Did you notice in the last challenge that the text wrapped with `<strong>` and
`<em>` tags ran together on the same line? That's because they are _inline_
elements: they are displayed on the same line as the surrounding text.

That didn't happen the `<h1>`, `<p>` tags we saw earlier. These are _block_
elements: they start on a new line and take up the full width of the page.

With few exceptions, inline elements can be **nested** inside block elements, but
block elements cannot be nested inside inline elements.

So this is valid:

```html
<p><strong>some important text</strong></p>
```

But this is NOT valid:

```html
<strong><p>some important text</p></strong>
```

HTML is fairly forgiving, so if you try the second, it will still be displayed
like the first, at least in this simple example. But things will get more
complicated quickly. So get in the habit of nesting elements properly.

To practice, try nesting the `<strong>` and `<em>` tags each inside its own pair
of `<p>` tags. Once you've added the `<p>` tags, click the ▶ button to be sure
that there's a line break between the strong (bolded) and emphasized
(italicized) segments.

Once you've succeeded, click the ✔ button to move on.

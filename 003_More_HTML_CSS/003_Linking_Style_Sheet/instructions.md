# Linking a Style Sheet

So far, when we've styled our HTML documents, we've written the CSS directly
into the HTML file using the `<style>` tag. That's a handy way to add a few
styles to a single document, but for bigger or more complex projects, it doesn't
work so well.

But there's another way to add styles. We can create a separate CSS file --
usually it has a `.css` extension -- and then **link** it to our HTML document.
That's what we're going to do now!

In the `index.html` editor, you'll see some unstyled HTML code. If you now click
on the `style.css` tab, you'll see some CSS code. But the HTML code doesn't
(yet) know about the CSS code. Let's fix that!

In the `<head>` section of the HTML document, add a `<link>` tag. This tag has
a few attributes:

- `rel`: This stands for "relationship". It tells the browser what kind of
  file we're linking. In this case, it's a stylesheet, so the value is
  `stylesheet`.
- `href`: This stands for "hypertext reference". It tells the browser where to
  find the file we're linking to. In this case, it's the `style.css` file.

It should look like this:

```html
<link rel="stylesheet" href="styles.css" />
```

It's a self-closing tag, so you don't need a closing `</link>` tag.

Now click the ▶ button. Voilà! The HTML document is now styled with styles set
in the CSS file. You've just linked a stylesheet to an HTML document.

Experiment a little. Try changing styles in the CSS file and see them reflected
in the web page view. What would happen if you tried to define some styles in
`styles.css` and other styles in a `<style>` tag in the HTML document? Try it.

When you're ready, click the ✔ button.

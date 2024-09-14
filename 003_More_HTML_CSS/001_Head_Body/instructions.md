# Head and Body Tags

Check out the starter code. There's a lot of stuff in there we've never seen:

- `<!doctype html>`
- `<html>`,
- `<head>`
- `<meta>`
- `<body>`

Until now, we've been working with very simple HTML snippets. What you see here
is closer to a full HTML document. What does all the new stuff do?

`<!doctype html>` is a declaration that tells the browser what type of document
it's reading. It can also specify the _version_ of HTML. Obviously you don't
_have_ to include it, but you should.

`<html>` is the root element of an HTML page. It contains all the other
elements that make up the page. It also has an attribute that specifies the
language. Notice that the document ends with a closing tag: `</html>`.

The `<html>` element has two **child** elements: `<head>` and `<body>`.

## The `<head>`

The `<head>` element contains meta-information about the document. For now, I've
only included two, both in a `<meta>` tag. The first tells the browser what
character set to use and the second provides a description that might help
search engines index the page. The `<head>` element also contains something
familiar: the `<style>` element that contains our CSS. It's best to keep
`<style>` declarations in the `<head>`. While everything in the `<head>` tag is
doing some work, notice that **none of it is directly visible on the page**.

## The `<body>`

Finally, the `<body>` element contains all page contents. Besides the `<style>`
element, just about everything we've seen before belongs inside the `<body>`
tags.

Look over the code. Notice the new elements and how they're used. When you feel
like you have a pretty good sense of all its parts, click the ✔ button.

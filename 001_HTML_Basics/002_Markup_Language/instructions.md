# A Markup Language

You just learned that the "ML" in "HTML" stands for "Markup Language." But what
does that mean?

Imagine a Microsoft Word or Google Docs document, a simple one with some
formatted text. Maybe it has some bold or italicized text, a list, and a title.
It uses a particular font with a particular size and color. Picturing it?

Very roughly, you could say that the document has three elements:

1. The text itself
2. The **structure** of the text: the different functions the text serves
3. The **formatting** of the text

Microsoft and Google have their own proprietary **markup languages\*** to encode
the document's structure and formatting. When you open a Word document in
Google, Google translates the Word markup language into its own. (\*Note:
I'm fudging a bit both about the encoding and the translation, but those details
don't matter here.)

HTML is the markup language of web pages. No company owns or controls it. Web
browsers know how to interpret those tags to **structure** the contents of a
page. (HTML does handle _some_ things we think of as formatting, but most
formatting is handled by HTML's partner, CSS.)

You've already seen what a header tag (`<h1>`) and a paragraph tag (`<p>`) do.
Let's next try to bold and italicize some text. Update the HTML in the editor to
match the following:

```html
<p>
  Here is some sample text. It has one <strong>bold</strong> word and one
  <em>italicized</em> word.
</p>
```

When you've finished, click the ✓ button to move on.

# Function over Formatting

HTML gives structure to a web page by encoding each part's function. We've
already seen, for example, that:

- an `<h1>` tag indicates that the text it surrounds is a top-level heading
- a `<p>` tag indicates that the text it surrounds is a paragraph

We often use visual cues to signal meaning. For example, we increase the font
size of titles and indent blocks of text and sometimes separate paragraphs with
extra spacing. That's why some function-describing tags _also_ format text, even
though that's not their main purpose. And we'll soon see that we can easily
change the default formatting that comes along with these function-describing
tags.

So what good does it do to have tags that describe function rather than format?
Good question! HTML tags make the web page "machine readable." Search engines,
screen readers, and other tools can use these tags to make sense of the web
page's content.

The distinction between function and format can get blurry. In fact, some of the
oldest HTML tags were created to format text. To our eyes, the text surrounded
by the `<strong>` tag and the `<b>` tag looks the same: **bold**. But the
`<strong>` tag is used to indicate that the text it surrounds is somehow
important; the `<b>` tag doesn't necessarily signal importance. (The `<b>` tag
is a holdover from earlier versions of HTML that didn't make as clear a
distinction between how text looks and what it means. To avoid breaking older
web pages, the `<b>` tag is still supported, but it's use is [discouraged](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b){:target="\_blank"}.)

Let's see one more example. Add the following code in the editor and click the
▶ button.

```html
<em>italicized AND emphasized</em> <i>just italicized</i>
```

Since we haven't applied any formatting, the two look the same to us, but carry
different meanings for programs like search engines, screen readers, and browser
extensions.

Don't sweat it if this distinction isn't perfectly clear yet. When we get around
to some formatting, it'll make more sense. Click the ✓ button to move on.

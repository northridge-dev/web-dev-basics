# Changing Fonts

Different browsers use different fonts to display text. A browser running on
a Mac will very likely use a different default font than the same browser
running on a Windows machine, and even if they had the same default font, a
user could change it anyway. So if you care about the way the text on your
webpage looks, you'd better tell the browser what font to use.

The problem is, you don't know what fonts your users have installed and there's
a good chance that some or many of them won't already have the font you want to
use. What to do?

As a first pass, let's see how we can specify what broad category of font the
browser should use to display your page. We'll do it with CSS.

## Step 1: Link the style sheet

The starter code includes an incomplete style sheet, but to give you an
opportunity to practice, I haven't linked it. So the first thing you need to do
is add a `<link>` tag to load `styles.css`.

## Step 2: Set the `font-family` property

The style sheet already has three ID selectors, one for each of the paragraphs.
To each, add a `font-family` property. Then give a different value to each:

- `serif`
- `sans-serif`
- `monospace`

So, for example, here's what the rule for the first paragraph might look like:

```css
#font-one {
  font-family: serif;
}
```

With just a few lines of text, the differences between `serif`, `sans-serif`,
and `monospace` fonts may not seem very noticeable, but with a page full of
text, the page will look and _feel_ very different.

Have the three different font families displaying? Click the ✔ button.

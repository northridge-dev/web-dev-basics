# Images

Once upon the time, the Web was almost entirely text. Today, much of the Web is
built around images.

Check out the starter code to see how to use an `<img>` tag to add an image.

Notice anything different?

1. There's only one `<img>` tag, but no closing `</img>`. Here's our first
   example of a **self-closing** tag. Strictly speaking, the `/` at the end of
   the tag isn't necessary in the latest versions of HTML, but for backward
   compatibility, a lot of coding tools will add it automatically.
2. The tag has extra information inside it, what we call an **attribute**.
   Attributes are always have the following structure: key="value". In
   this case, `src` (short for "source") tells the browser where to go looking
   for the image you want to load. The value after the `=` is the URL (Uniform
   Resource Locator) of the Codilla image that's already loaded on the page.

Let's trying adding a few more **attributes** inside the `<img>` tag:

- `alt="Codilla Logo"` - `alt` is short for "alternative text". It's a short
  description of the image that's displayed if the image can't be loaded. It's
  also used by screen readers to describe the image to visually impaired users.
- `width="150"` - This sets the width of the image to 150 pixels. Since you
  haven't separately set the height, the browser will calculate what it should be
  to keep the same height:width ratio. Not sure what happens if you change the
  aspect ratio? Try adding a third attribute -- `height="300"` -- to see.

We've "stretched" this challenge about images far enough, don't you think? Click
the ✔ button to move on.

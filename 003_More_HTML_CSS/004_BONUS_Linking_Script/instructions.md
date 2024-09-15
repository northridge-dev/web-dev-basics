# BONUS: Loading a Script

Now you know how to use HTML to load both images and style sheets. Let's
see how we can load a little JavaScript, too.

A few challenges earlier, you added a title to the HTML document and we used
JavaScript to display it in the webpage view. Let's move that JavaScript to its
own file and load it in with a `<script>` tag.

## Step 1: Move the JavaScript

Cut everything between the `<script>` tags and paste it in the `script.js`
editor.

## Step 2: Update the `<script>` tag

Instead of containing the JavaScript code you want to run, you can define a
`src` attribute -- a "source" -- that (like an `<img>` tag) will load the
file at the URL you supply. Your updated tag should look like this:

```html
<script src="script.js"></script>
```

**You still need the closing `</script>` tag**, but you don't need to put anything
between them.

To make sure it works, try changing the title and clicking the ▶ button.

## Step 3: Move the `<script>` tag into the `<head>`

As it stands, your browser waits until it gets to the `<script>` tag before it
makes a request to the server for the `script.js` file. It's no big deal in a
tiny challenge like this, but in a real-world scenario, you'd probably want to
start loading the script as soon as possible. To do that, let's move our
`<script>` tag into the `<head>` section of the HTML document. In this case,
we'll also want to add a `defer` attribute to the tag, like this:

```html
<script src="script.js" defer></script>
```

`defer` tells the browser to load the script immediately, but wait to execute
the code until all the HTML has been parsed. That's important because we're
using JavaScript to find and modify HTML elements, so we have to wait for them.
How important? Try removing the `defer` attribute and see what happens.

Once you're convinced that you need the `defer` attribute, add it back, confirm
that the title is displayed, and click the ✔ button.

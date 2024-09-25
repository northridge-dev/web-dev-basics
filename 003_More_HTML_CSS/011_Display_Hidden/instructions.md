# Hiding Elements

You can use the `display` property to hide elements. They're in the HTML
document, but not rendered to the page. Why bother adding an element and then
hiding it? It'd only be useful if you'd sometimes want to show it. For example,
maybe you want to change what's displayed when a user clicks a button. Like the
button in the in Web Page panel. Go on. Click it.

Let's look at the starter code to see how it works.

- The HTML has a lot of `<span>` tags that belong to the `secret` and `hidden`
  classes.
- In `styles.css`, you can see that every element that belongs to the `hidden`
  class has a special property -- `display` -- set to `none`. That's what hides
  those elements.
- And although you don't know much JavaScript yet, maybe you can see that it
  (1) gathers all the elements that belong to the `secret` class and then (2)
  _toggles_ the `hidden` class. That means any element in the `secret` class
  that is hidden will be shown, and any element that is shown will be hidden,
  all by adding or removing the `hidden` class from the element.

Pretty cool, huh?

Now your job is to use the button, JavaScript, and CSS that already exists to
add your own secret message. Use `<span>` tags with the `secret` and `hidden`
classes set for the parts of the message you want to hide. When you click the
button, it should toggle the visibility of those chunks.

All finished? Click the ✔ button to move on. (And if you crafted a funny hidden
message, be sure to show me.)

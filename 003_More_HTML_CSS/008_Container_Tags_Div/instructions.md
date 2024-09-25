# Container Tags: `<div>`

Sometimes, especially for styling purposes, it is useful to group together HTML
elements using a "container" tag. `<div>` is an all-purpose _block level_
container. Look at the example in the starter code:

- Within the `<div>` tags, you'll see `<h1>`, `<p>`, `<ul>`, and `<li>` tags.
  The `<div>` tags **contain** all these elements.
- The `<div>` tag has **_TWO_** classes: `border` and `center`. We've never seen
  a tag with more than one class before. Because it belongs to both classes,
  styles defined for each of the classes will be applied to it.

In this case, the styles applied to the `<div>` block control its size and
position. They also add a border around the "box" created by the `<div>`. And
because the headers, paragraphs, and lists are "inside" the `<div>` tag, they
are rendered inside the box it creates and get some of its styling, too.

Now it's your turn. Create a second `<div>` block. Add some text inside it: a
header or a paragraph or a list. Give the `<div>` the following classes:
`border` `center` and `inverted`. In `styles.css`, define the `color` and
`background-color` properties for the `inverted` class so that your new `div`
tag will have a black background with white text.

Once you've got it, click the ✔ button.

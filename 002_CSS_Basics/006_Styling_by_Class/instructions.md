# Styling by Class

Now you know you can apply styles:

- directly to HTML tags
- by tag
- by ID

Let's add just one more way: by **class**.

`class` is another attribute you can add to an HTML tag, but unlike the `id`
attribute, more than one HTML element can be a member of the same class. In
fact, different tag types can be members of the same class. Let's see.

In the starter code, I've applied a font color to three separate tags: `h1`,
`p`, and `ol`. But we can get the same result with classes.

First, add the attribute-value pair `class="maroon"` to the following tags:

- `<h1>`
- `<p>`
- `<ol>`

Then update the style sheet to match:

```HTML
<style>
  .maroon {
    color: #510400;
  }
</style>
```

When we were styling by ID, we prefixed the ID name with a `#`. In a similar
way, when choosing elements by class, we prefix the class name with a period:
`.maroon`.

Defining styles by class allows you to simultaneously style multiple elements,
but those elements don't have to be the same type. And if, for example, you have
some `<p>` elements that should get a certain style but others that shouldn't,
class styling is a great way to selectively apply styles to some but not others.

Click the ✔ button to see how classes work with the precedence rules we've been
learning.

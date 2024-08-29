# Adding Styles

HTML structures a webpage. But we also want to control the way a webpage looks,
it's _style_.

We can add styling instructions inside HTML tags using the `style` attribute.
Let's try. Update the code as follows:

```html
<p style="color: blue;">The first paragraph</p>
<p style="color: #ff0000;">The second paragraph</p>
```

Styles can be defined in the `style` attribute. For now, we've only added one
styling property, `color`. The property name is followed by a colon and then the
value you want to set for that property and finally a semicolon. That's the
pattern:

```text
<propertyName>: <value>;
```

`color` is the property that controls the text color. The value of `color` can
be a special [named color](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color){:target="\_blank"}, a hexadecimal color code (`#ff0000`, for example), or an RGB value like `rgb(0, 255, 0)`.

Now that you know how to set the text color, experiment a little. Try using
named colors, hexadecimal color codes, and RGB values to change the color of the
text.

Done experimenting? Click the ✔ button.

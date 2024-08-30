# Styling by ID

In the last challenge, we learned how to style all tags of a certain type, for
example, all `<p>` tags. But what if you want to apply a style to a single HTML
element? We've already seen one way to do that, by adding a `style` attribute to
the tag. But it can get confusing if we having some styling instructions in a
central place and others scattered throughout the HTML. So let's see another way
to style a single HTML element.

You've seen that you can add **attributes** to an HTML tag. Any HTML tag can
have an `id` attribute. Giving a tag an `id` is a way to uniquely identify it.
And you can use that unique identifier to specify styling instructions.

In the starter code, you can see I've already added a few `id` attributes to
the `<p>` tags. Here's how you'd use those IDs to apply individual styling
instructions:

```HTML
<style>
  #first {
    color: blue;
  }

  #last {
    color: red;
  }
</style>
```

The `#` symbol tells the browser to look for and style the element with the
matching `id`. That's the pattern for styling by ID:

```CSS
#<id> {
  <style-property>: <value>;
}
```

To practice:

1. Add an `id` attribute to the middle paragraph. You pick the `id` value.
2. Using its `id` as a selector, give that middle paragraph a `font-size` of `25px`.

When you're finished, you should see the first line of "Twinkle, Twinkle" in
blue, the second line in a larger font size, and the third line in red. If
that's what you see, you're ready to move on. Click the ✔ button.

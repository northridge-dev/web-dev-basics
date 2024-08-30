# Styling by ID

The more complex your HTML document and your styling instructions, the more
likely it is that elements will receive conflicting styling instructions.

Let's create a conflict! The starter code already styles some of the paragraphs
by ID. Let's also a `color` style to all `<p>` tags. Update the CSS to match:

```CSS
<style>
  #first {
    color: blue;
  }

  #last {
    color: red;
  }

  p {
    color: green;
  }
</style>
```

Is that what you expected? Why did only the middle paragraph change color? Maybe
it's because of the order of the styling instructions. To test this theory, move
the `p` styling instruction above the `#first` styling instruction:

```CSS
<style>
  p {
    color: green;
  }

  #first {
    color: blue;
  }

  #last {
    color: red;
  }
</style>
```

No change, right? That's because conflicts between styling instructions are
resolved by **specificity**. The more specific styling instruction wins. In this
case, a style applied to an ID is _more specific_ than a style applied to a tag.
So the `#first` and `#last` styles win over the `p` style and only the middle
paragraph is green.

What do you think would happen if you added a `color` style using the middle
paragraph's `#middle` ID? Test your guess. Were you right?

When you're ready to move on, click the ✔ button.

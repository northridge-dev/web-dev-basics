# Hyper Text (Links)

We've emphasized so far HTML as a **markup language**. But what makes it truly
special is its ability to create **hyper text**.

What's hyper text? A comparison might help. Think of a book, the kind you're
likely to read front to back. The author organized the material in the book to
be read in the order it was set down. Sure, you can skip around and use the
table of contents or index to read about a particular topic. And the author
might point you to earlier or later parts of the text or mention other books.
But books are not really designed to be easily used in this way.

The Web is different. There's no front to start from and no end to read to.
Many individual pages have a more linear organization, but for the most
part, you start wherever you start make your way around by following **links**.
That's why it's called the **Web**: it's a network or _web_ of interconnected --
**linked** -- pages. And that's what hypertext is: the links that connect pages
to other pages.

Let's try creating some internal links. In the starter code, you'll see a long
document with several sections. Notice that each section has an `id` attribute.
That's how we'll create links to specific parts of the page. Add a table of
contents just below the header by adding the following HTML:

```HTML
<nav>
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#history">History of Hypertext</a></li>
    <li><a href="#components">Components of Hypertext</a></li>
    <li><a href="#importance">Importance of Hypertext</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
  </ul>
</nav>
```

Once you've run the code to update the web page view, try clicking on the links.
What happens?

That's it. You've created hyper text! Later we'll learn how to create links
to external pages. But for now, click the ✔ button to test yourself by building
a mini project.

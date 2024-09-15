# BONUS: Loading Fonts

In the last challenge, we learned how to specify a broad font family. That's
useful, but it doesn't give us as much control as we might want. Ideally, we'd
be able to use a specific font, not just whatever `serif`, `sans-serif` or
`monospace` font the browser defaults to.

We can _try_ to use a locally installed font. If you do, it's a good idea to
provide a "fallback" font. Check the `styles.css` file to see how. For both
`#font-one` and `#font-two`, I've listed two fonts that are more likely than most
to be installed on a user's machine. But in both cases, I also provided a safer
fallback. If the browser can't find the first, it will try the second. If it
can't find the second, it'll use the third. If you get to the end of the list
and the browser hasn't found any of the listed fonts, it will use it's default.
Notice that the fonts are separated by a comma and only `"Times New Roman"` is
in quotation marks, and that's only because its name includes spaces.

But as we learned, we can't assume that people viewing our webpage have the font
we want to use. Luckily, we can load fonts similar to the way we load images or
other webpage "assets". You can host a font on your own server, but it is also
common to use fonts hosted on another server.
[Google Fonts](https://fonts.google.com){:target="\_blank"}, for example, hosts tons of
free-to-use fonts. To load the font, I've included an extra `<link>` tag. See if
you can spot it.

Even though the browser loads the font, we have to use our style rules to
specify where it should be used. Your job is to add a rule to the
`#font-three` style block. The font we downloaded is called `Honk`.

Once you can see our new, honking-good font, click the ✔ button.

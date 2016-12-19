![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# Front End Web Development (FEWD)
## Lesson 4: CSS LAB

### Review:

Last week we covered:

- Display inline, block, inline-block
- Floats
- Clears
**(Some of the most difficult and confusing parts of CSS)**

#### Inline:

![inline](img/inline.png)

Any element can be made to display like an Inline element if you add:

```CSS
img {
  display: inline;
}
```


#### Block:

![blocks](img/block.png)

Any element can be made to display like a Block element if you add:

```CSS
img {
  display: block;
}
```

#### Inline-block:

A combination of the above. Overflow will be displayed below.

```CSS
img {
  display: inline-block
}
```

#### Floats
Floats 'detach' an element from its normal spot in the HTML structure, and allows it to 'float' around other elments, or up inline with the element above if there is room.

It is used for creating columns, or just putting an image next to some text.

![floats](https://www.smashingmagazine.com/wp-content/uploads/2009/09/2_b.jpg)

#### Clears

Used for footers often, or anything with a float element above it, that you want to 'clear' below.
![](img/clear.png)

### Lab:

Let's recreate another site.

![Instagram lab Screenshot](https://i.imgur.com/DQ9fk1u.png)

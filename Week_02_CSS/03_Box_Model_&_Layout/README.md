![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# Front End Web Development (FEWD)
## Lesson 3: BOX MODEL & INTRO TO LAYOUT

### Review:

Last week we covered:
1. External Style Sheets
1. Color principles: RGB, RGBA, hexadecimal color.
1. Select nested elements to apply styling
1. Differentiate between classes and IDs and apply best practices when implementing.
1. Apply and explain CSS “cascade” including: importance, specificity and inheritance.

### Agenda:

1. Use pseudo-selectors and nested selectors
1. Define CSS Box Model, and demonstrate the ability to properly manipulate the "box" around elements
1. Use display block and display inline &
1. Use float and clear to control where things land on the page
1. Apply header, footer, sidebar, and multi-column layouts to build a web page.
1. Experiment and predict effects of floats and clearing CSS positioning.

### But first!
Lets talk quickly about `<div>` and `<table>`.

1. A div is a generic container with no default attributes of its own
  - Use case: No HTML5 element known to you makes sense to use, but you need to wrap an element in something for styling reasons.
2. A table is what it sounds like! It can have a heading and columns and rows.
  - Use case: these used to be used EVERYWHERE instead of floats and clears. Don't do this! Floats and clears are much more flexible.
  - Used for actual tables. 

### Pseudo-Selectors:

- Also called pseudo-classes
- Used with the following syntax:

```css
a:hover {
  color: blue;
}
```

- Example pseudo-selectors:
  1. hover
  2. visited
  3. first-child
  4. last-child
  5. nth-child

#### Getting fancy with nth-child
Select the 5th element:
```css
li:nth-child(5) {
    color: green;   
}
```

Select odd elements:
```css
li:nth-child(odd) {
    color: green;   
}
```

[More recipes](https://css-tricks.com/useful-nth-child-recipies/)

#### Activity
Open the pseudo-selectors folder in Sublime Text

### The Box Model

The box model is about SPACE

The box model includes from the outside in:
1. Margin
2. Border
3. Padding
4. Content

Here is a [nice visualization](http://codepen.io/carolineartz/full/ogVXZj/)


#### Activity
Open the box-model folder in Sublime Text

### The Display Attribute

Display is about where things go on the page. There are three main display values:

`display: inline;` lines things up on the same row.

`display: block;` stacks things on top of eachother.

`display: inline-block` lines things up for the width of the page, after that elements spill over to another line.


```css
h1 {
  display: inline;
}
```

#### Activity
Open the display_lab folder in Sublime Text

### Float and Clear
Float and clear are also about where elements go on the page, this time in relation to its neighboors.


```css
section {
  float: right;
}
```

##### Float

Float wraps around text.

Values:

`left`
Is a keyword indicating that the element must float on the left side of its containing block.

`right`
Is a keyword indicating that the element must float on the right side of its containing block.

##### Clear

Clear moves down the element past other float elements.

Values:

`none`
Is a keyword indicating that the element is not moved down to clear past floating elements.

`left`
Is a keyword indicating that the element is moved down to clear past left floats.

`right`
Is a keyword indicating that the element is moved down to clear past right floats.

`both`
Is a keyword indicating that the element is moved down to clear past both left and right floats. Use case: footers.

#### Activity
Open the floating_sections_lab folder in Sublime Text


### Lab: Travel Blog

This will be started in class and continued as homework over the weekend.

Open the travel_blog folder in Sublime Text

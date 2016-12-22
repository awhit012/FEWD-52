# Bootstrap
### Learning Objectives

* Understand class-based CSS
* Require Bootstrap into your project
* Understand and implement a grid system
* Design HTML pages with the aid of Bootstrap & mockups

## Intro to Bootstrap

![](http://getbootstrap.com/examples/screenshots/theme.jpg)

* [Bootstrap](http://getbootstrap.com/) is a **front-end framework** created by a small team of developers at Twitter and maintained by a much larger community of contributors.
* The framework consists of one main CSS file, an optional theme CSS file, and a main JS file (which we'll get to later).

Bootstrap is extremely popular and knowledge of at least one CSS framework is a very valuable skill to have (and totally worth putting on your resume).

Bootstrap comes with a ton of features, including:

- Responsive Grid System
- CSS library for quick and easy styling
- UI components - HTML + CSS
  - navigation
  - buttons
  - forms
  - etc.
- Javascript widgets to make your page interactive (again, we'll get to this later)
- Tons more

## Sites Using Bootstrap

* [NBA.com](http://www.nba.com/)
* [Bloomberg](http://www.bloomberg.com/)
* [CodeAcademy](https://www.codecademy.com/)

![](https://autobiologbook.files.wordpress.com/2013/05/codeacademy.jpg)

## What is Class-based CSS?

Create modular classes that *encapsulate* a certain behavior and name them semantically.

How would you style CSS for these elements?

* `.shout` — uppercase the text inside the element
* `.shadow` — add a drop-text to text inside the element
* `.invert` — flip an element upside-down

<!--
 `transform: rotate(180deg)`
 -->


## Including Bootstrap with HTML
* To use Bootstrap, we need to include Bootstrap's CSS and Javascript libraries (+ or - an optional Bootstrap-Theme CSS file).
* There are a few different ways to accomplish this, listed below. In this class, we'll keep it simple and stick with the CDN.

1. CDN (Content Delivery Network - someone else hosts the library/framework and you access it via a URL):  [http://getbootstrap.com/getting-started/#download-cdn](http://getbootstrap.com/getting-started/#download-cdn). Where do we include these in our HTML file?
2. Download the actual CSS and JS files and link to them on your local computer - better for offline/local development

## What is Responsive Design?

"Responsive web design (RWD) is an approach to web design aimed at crafting sites to provide an optimal viewing and interaction experience— easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from desktop computer monitors to laptops to cellphones).

A site designed with RWD adapts the layout to the viewing environment by using fluid, proportion-based grids, flexible images, etc..."

Source: [Wikipedia](https://en.wikipedia.org/wiki/Responsive_web_design)


## Responsive Grid System
* The page is divided into 12 columns of equal width
* Columns are written in the following format as a class attribute: `col-(breakpoint)-(width-in-columns)`
* For example: `col-sm-4`
* Columns are often wrapped into an element with a class of `row` or `container`.

#### Start with a container
To ensure all your Bootstrap styles behave properly, always put your content inside an element with a class "container" (usually `<div class="container">`). This will center your content and leave a small margin on the sides of the page. If you would like to use the full width of the screen (no margin) use `class="container-fluid"`

#### Page layout using the Grid System
![grid](imgs/grid.png)

Bootstrap's grid system is based on the idea that a page layout for any given screen size is represented with 12 fluid **columns**.  Columns are always horizontally contained in **rows**, which in turn are contained inside of the previously mentioned `container` (container > row > column):

1. Create a row:

  ``` html
   <div class="row"> ... </div>
  ```

2. Inside your row, create a column for the targeted screen size:
  - col-xs < 768px (e.g. smartphones)
  - col-sm ≥ 992px (e.g. tablets)
  - col-md ≥ 1200px (e.g. laptops, desktops)
  - col-lg ≥ 1200px (e.g. large desktops, smart TVs)

Here's an example of a two-column layout that spans the width of the page.  Notice that the widths of the two columns add up to 12.  The column content of any row must always be ≤12.

``` html
 <div class="row">
   <div class="col-md-6">
     <p>I'm a medium-sized column</p>
    </div>
   <div class="col-md-6">
     <p>Me too! We have SO much in common</p>
   </div>
 </div>
```

For other examples, check out the [Bootstrap docs](http://getbootstrap.com/css/#grid)  

## Breakpoints

![breakpoints](http://www.tutorialrepublic.com/lib/images/grid-system-illustration.jpg)
* The way that Bootstrap works is to dynamically reduce column size according to the window size.
* To be mobile (and tablet!) -friendly, the columns will break into a stack layout after a minimum width is detected.
* The breakpoints you can select in your columns control at which point this happens.
* Check out their [documentation](http://getbootstrap.com/css/#grid) here to see what these breakpoints are in terms of size.
* Let's test it!


You can also offset and nest your columns. When you offset a column, you add a column of whitespace and push the column to the right.  Example:

``` html
 <div class="row">
   <div class="col-md-3 col-md-offset-3">
     <p>This column occupies 1/4 of the page width and is moved to the right
     by 1/4 of the page width</p>
   </div>
 </div>
```
Here is an example of nesting columns (putting one row inside another)

``` html
 <div class="row">
   <div class="col-md-6">
     Level 1: Column takes 1/2 the width of the page
     <div class="row">
       <div class="col-md-4">
         Level 2: This column takes 1/3 the width of its parent column
       </div>
       <div class="col-md-8">
         Level 2: This column takes 2/3 the width of its parent column
       </div>
     </div>
   </div>
 </div>
```

What would this actually look like?  [Demo](demo/before-bootstrap/index.html)


#### Typography

![typography](http://cdn.appstorm.net/web.appstorm.net/files/2011/08/Bootstrap-620x361.png)

For a complete list: [Bootstrap Typography classes](http://getbootstrap.com/css/#type)

To align text, use these classes.  

``` html
 <p class="text-left">Left aligned text.</p>
 <p class="text-center">Center aligned text.</p>
 <p class="text-right">Right aligned text.</p>
 <p class="text-justify">Justified text.</p>
 <p class="text-nowrap">No wrap text.</p>
```
More useful typography classes...

``` html
 <p class="lead">This text will stand out in a paragraph</p>
 <small>This line of text is meant to be treated as fine print.</small>
 <p class="text-lowercase">Lowercased text.</p>
 <p class="text-uppercase">Uppercased text.</p>
 <p class="text-capitalize">Capitalized text.</p>
```


#### Icons
![icons](http://azmind.com/wp-content/uploads/2015/01/Typicons-Bootstrap-Font-Icons.jpg)

Bootstrap comes with a set of icons that can be included in your page using the `<i></i>` tag. Check out these icons [here](http://getbootstrap.com/components/#glyphicons)

#### Buttons
![buttons](https://i.stack.imgur.com/TdX9B.jpg)

Bootstrap provides a wide selection of button sizes and colors.  Button classes can be applied not just to `<button>` elements, but also `<a>` and `<input>` elements

Sometimes you need to provide multiple classes to an element in order for Bootstrap to style it.  The button classes are an example of this:

``` html
 <!-- Standard button -->
 <button type="button" class="btn btn-default">Default</button>

 <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
 <button type="button" class="btn btn-primary">Primary</button>

 <!-- Contextual button for informational alert messages -->
 <button type="button" class="btn btn-info">Info</button>

 <!-- Indicates caution should be taken with this action -->
 <button type="button" class="btn btn-warning">Warning</button>
```  
... and so on.  See the [docs](http://getbootstrap.com/css/#buttons) for a comprehensive list of options.  Note you can add a third class denoting size to any of the above: `.btn-lg`, `.btn-sm`, `.btn-xs`


#### Images
![thumbnail](https://www.tutorialspoint.com/bootstrap/images/customthumbnail_demo.jpg)

Bootstrap helps you format images using `class="img-rounded"` (rounds the corners), `class="img-circle"` (makes the image a circle) and `class="img-thumbnail"` (adds a border). You can also add a `class="img-responsive"` to your image to make it scale well when the screen size changes (this sets its max-width to 100% of its parent element and the height to auto for maintaining aspect)

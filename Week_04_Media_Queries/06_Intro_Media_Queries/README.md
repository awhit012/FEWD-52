# Media Queries
### Learning Objectives

* Know the difference between fluid, fixed, and responsive layouts
* Apply media queries to achieve responsive layout

## Pair and Share! - 10 minutes
Open up your bootstrap homework in your browser and share it with a partner. Show them something you are proud of, and something you wanted to do but couldn't, then switch. Teach something or learn something!

## Bootstrap Review

![](http://getbootstrap.com/examples/screenshots/theme.jpg)

Questions for discussion:
- What is Bootstrap?
- How do we include Bootstrap in our projects?
- What are some of the features of Bootstrap?
- Describe class based CSS
- Describe the Grid System

## Final Project Note:
- If you didn't already, make sure that you submitted your wireframe to the #homework_submission slack channel along with your Bootstrap assignment
- Questions on Wire Frames?

## Intro to Media Queries

![](http://www.jonathantneal.com/wp-content/uploads/2013/02/media.png)

### Definition: Fixed vs Fluid vs Responsive
- Fixed: Site stays the same regardless of screen size
- Fluid: Site changes size of things like text and images, but does not change layout!
- Responsive: Uses media queries or breakpoints to change the layout or arrangement of elements on the page.

### Yay Responsive
![](http://i.giphy.com/s2qXK8wAvkHTO.gif)

### Media Queries
Media queries allow us to target CSS rules based on screen size, device orientation,
display density, etc.

Perhaps the simplest and most common query is max-width or min-width.

### How to add media queries

We've already seen them in action, since Bootstrap uses them to implement their grid system!
But we want to know how to use them ourselves and do more! So how do we use them?

```css
@media screen and (max-width: 750px) and (min-width: 520px) {
    ul li a {
        padding-left: 30px;
        background: url(email-icon.png) left center no-repeat;
    }
}
```

The above CSS applies ONLY when the screen width is between 750px and 520px. In this example, if the screen is in that range, we will add some padding and a little background image with an email icon! We can use this sort of query to apply any sort of styling within limited ranges.

### Activity

Let's code together a quick media query. Open up the query_together folder in the starter code in your code editor, and open the index.html page in your browser.

#### Sneaking some fun stuff in here:

Cool text huh? We are using Google's web font's along with their font-effect API. Note the addition of the effect at the end of the CDN URL on line 14 of our HTML page.

We also use a class to style the font, a lot like we would using Bootstrap. Accept instead of loading a whole library, which takes time, Google's font's are super modularized, so we only load what we need.

Also note line 12 of index.html. We added normalize! We've talked about how that makes all browsers use the same defaults so your website looks the same on every page. Bootstrap includes a 'normalizer' but since we aren't using it for this exercise, and we are becoming pro front end devs, we should use it! (All you have to do is put it in there above your CSS. That's it.)

#### Moving on:

Let's do **something** to this page when it is less than 750px. We can do one together and then add a few more.

They don't have to 'make sense' totally as a design, we just want practice implementing the break points.

Now let's add another break point!

### Other Media Queries
- orientation (landscape or portrait)
- print (different style when user click's 'print')
- more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

### A better way of organizing our CSS:
All of that CSS for multiple breakpoints in one file can get pretty cluttered! Lets look back at our code and factor out the CSS into its own files for each breakpoint

```html
<link rel="stylesheet" media="screen and (max-width: 750px)" href="css/tablet.css" />
```


## In Class Lab:
Let's keep building on our Bootstrap projects from over the break.

In this lab we want to:

1. Create a new CSS page that only gets loaded when the screen is less than 750px, but greater than 320px
2. Add some styling to that page. Can you make the change improve the design of your page?

Tips on improving design through media queries:
  - Make an icon appear when there is enough room, but disappear when there isn't enough room
  - Increase or decrease font-size
  - Read up on `ems` [here](https://css-tricks.com/why-ems/) to take advantage of relative units of measure 

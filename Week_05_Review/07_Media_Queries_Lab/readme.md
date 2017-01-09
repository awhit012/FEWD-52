# Responsive design

### Objectives
*After this lab, students will be able to:*

- Use media queries in and external CSS to make a responsive web page

### Preparation
*Before this lesson, students should already be able to:*

- Write basic HTML/CSS

### Why do we care?

- The number of active mobile devices surpassed the number of living humans somewhere around the [7.19 billion mark](http://www.independent.co.uk/life-style/gadgets-and-tech/news/there-are-officially-more-mobile-devices-than-people-in-the-world-9780518.html).
- Devices like iWatches are changing the game too

### Example of responsive site:
The world's first:
- [Boston Globe](http://www.bostonglobe.com/)  

## Demo - Chrome's Responsive Design tools
- Let's visit GA's homepage
- Click on the device icon next to the magnifying glass
- You can change the pixel width (displayed at the top) using the drag tool
- You can select any device using the dropdown menu at the top

**There are many fancy tools out there to help test responsive websites**

## Make a responsive website

Download the [starter-code](starter-code)

Now open everything in Sublime and index.html in Chrome.

There are two general approaches to responsive design:  *progressive enhancement* and *graceful degradation*. Nobody really talks about this anymore, but it used to be important and it may be useful vocabulary for future interviews. So progressive enhancement is more commonly called mobile-first design and is more common when starting from scratch. In this case, we have a desktop design and we want to reorganize and remove design elements so that it looks better on smaller screens. When done well, this is known as graceful degradation.

#### Starter Code

Let's take a few moments to look at our HTML in the `index.html` file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Responsive design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><h1>Responsive Design</h1></li>
        <li>Like normal design, but responsive.</li>
        <li><span>So many</span> devices</li>
        <li>
          <ul>
            <li><a href="/">Desktop</a></li>
            <li><a href="/">Phone5</a></li>
            <li><a href="/">Phone4</a></li>
            <li><a href="/">Phone3</a></li>
            <li><a href="/">iPad</a></li>
            <li><a href="/">iPad2</a></li>
            <li><a href="/">iWatch</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="column">
      <h2>Exciting content</h2>
      <p>Web development is so fun...</p>
    </div>
    <div class="column">
      <h2>More content</h2>
      <p>Device testing is quite tedious...</p>
    </div>
    <div class="column">
      <h2>Even more content</h2>
      <p>But it has to be done now...</p>
    </div>
  </main>
  <script type="text/javascript" src="./js/app.js"></script>
</body>
</html>
```
And a few more to look through our `style.css`:

```css
body {
  font-family: 'Montserrat', sans-serif;
  color: black;
}

header, main {
  width: 960px;
}

/* HEADER */

header nav ul li {
  overflow: hidden;
}

header nav > ul > li:nth-child(1) h1 {
  color: rgb(242, 138, 40);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 88px;
}

header nav > ul > li:nth-child(2) {
  height: 35px;
  padding: 0 10px;
  font-size: 23px;
  line-height: 35px;
  color: #ffc719;
  background: black;
}

header nav > ul > li:nth-child(3) span {
  color: #ff0044;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px;
  font-size: 25px;
  display: inline-block;
}

header nav > ul > li:nth-child(4) {
  background: rgb(241, 241, 241);
  margin-bottom: 15px;
}

header nav > ul > li:nth-child(4) ul li {
  display: inline;
}

header nav > ul > li:nth-child(4) a {
  padding: 15px;
  display: inline-block;
  color: black;
  text-decoration: none;
}

header nav > ul > li:nth-child(4) a:hover {
  background: #ffc000;
}

/* MAIN COLUMNS */
main .column h2 {
  padding: 15px;
  color: white;
}

main .column:nth-child(1) h2 { background: rgb(126, 211, 33);}
main .column:nth-child(2) h2 { background: rgb(235, 91, 76); }
main .column:nth-child(3) h2 { background: rgb(0, 174, 255); }

main .column p {
  padding: 15px;
}
```

#### Make the columns responsive

We have written our HTML `<main>` to expect three separate columns. How do we go about splitting these columns across the page?

Where the CSS for the columns have been defined (line 64) let's add:

```css
main .column {
  float: left;
  width: 33.33%;
}
```

Refresh the page and you will see the change at full width.

#### Adjusting the container width

However, if we try to resize the page - nothing. This is because the contain element has a fixed width. Let's change the css for the main selector:

```css
header, main {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
}
```

Let's test!

It works, but the text gets squished. This will not look good when there is lots to read.

#### Setting a min-width

Let's set a min-width instead to prevent this:

```css
main .column {
  float: left;
  width: 33.33%;
  min-width: 320px;
}
```

When there is not enough space for the 320px element to fit, it will now flow underneath the element to it's left, starting from the right to the left.

#### Why 320px?  

That's the width of an iPhone 5.

Okay, so that looks good when the screen is small and large but what about in the middle?


## Media queries - Intro (5 mins)

In order to target specific device/screen sizes, we need to use media-queries.

What the heck is a media query? From W3Schools:

"Media Queries is a CSS3 module allowing content rendering to adapt to conditions such as screen resolution (e.g. smartphone screen vs. computer screen)."

As there are lots of different devices, there can be lots of different media-queries.

- [CSS-Tricks](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) is a good resource for reading up and refreshing yourself on media-queries.

## Using media queries - Codealong (25 mins)

One way of doing this is by including `media` in your stylesheet link.

```html
<link rel='stylesheet' media='screen and (min-width: 701px) and (max-width: 900px)' href='css/medium.css' />
```
A nicer way is to have seperate css files, but do the query IN the CSS. This is the syntax:

#### Max-width 960px

```css
@media only screen and (max-width: 960px) {  
  /* style */
}
```

This will apply the styles inside the query *only* when the outer condition is true.

* Question: * Does this target the biggest size or the middle size?

We include this at the bottom of the page.

```css
@media only screen and (max-width: 960px) {  
  main .column {
    width: 50%;
  }
  main .column:last-child {
    width: 100%;
  }
}
```
In this case, we're targeting `max-width`. You can also use `min-width`, `-webkit-min-device-pixel-ratio` and other selectors, but just remember to use the same selector for all your media queries. In other words, if you mix one media query using `max-width` and target another size using `min-width`, you may get some unexpected results.

#### Max-width 640px

This looks good when the window is greater than 640px, but we'll need to add one more media query for when the window is smaller than this. Check it out in the browser and then add this:

```css
@media only screen and (max-width: 640px) {
  main .column {
    width: 100%;
  }
}
```

<!-- This is a great time for a brief Q&A.  -->


#### Style the header for medium and small screens

Our columns are now working but we need to do a little bit of work on our header.

Sometimes, with responsive design (specifically graceful degradation), we may decide to omit content from a site. This can sometimes mean that we are loading content on the mobile device that the user can't see - that will slow their page down - however, for this example, we will not worry about that.

```css
@media only screen and (max-width: 960px) {
  header nav ul li {
    display: none;
  }
  /* ... main .column, etc ... */
}
```

If we resize the page, everything in the header disappears. Let's just show the first li with the header and the last one with the menu:

```css
@media only screen and (max-width: 960px) {  
  header nav ul li {
    display: none;
  }

  header nav > ul > li:nth-child(1),
  header nav > ul > li:nth-child(4) {
    display: block;
  }

  /* ... main .column, etc ... */
}
```

This is a _little_ better.

#### Title

Now we want the title to change size depending on the browser size. Let's do the middle size first:

```css
@media only screen and (max-width: 960px) {  
  header nav ul li {
    display: none;
  }

  header nav > ul > li:nth-child(1),
  header nav > ul > li:nth-child(4) {
    display: block;
  }

  header nav > ul > li:nth-child(1) {
    text-align: center;
    padding: 30px 0;
  }

  header nav > ul > li:nth-child(1) h1 {
    font-size: 40px;
  }
  /* ... etc ... */
}
```

Now, let's do the smaller browser:

```css
@media only screen and (max-width: 640px) {
  header nav > ul > li:nth-child(1) {
    text-align: center;
    padding: 15px 0;
  }

  header nav > ul > li:nth-child(1) h1 {
    font-size: 30px;
  }
}
```

## On your phone

A few years ago, when we wanted to test our site on multiple operating systems, we'd have to upload the file to a webserver; but it has become very easy to run a little server from our computers and check out our site on our phones.

Run the following in the folder where you saved your index.html  

```bash
python -m SimpleHTTPServer  
```

To check it out on your computer go to:

```
http://0.0.0.0:8000
```

Great you are running a simple web server!

If your computer and phone share the same WiFi network, you can check out the site on your phone.  First, we need the IP address of our computer.

Type in `ifconfig` in the terminal. There should be something like:

```bash
inet 10.0.1.85
```

On your phone if you goto:

```
http://10.0.1.85:8000
```

and you should see your awesome website.

## Conclusion

As noted earlier in the lesson, since mobile is increasingly becoming the user default, any project should consider mobile styling from the start.  

Also, note that images and tables are often difficult to make responsive.

Since images sometimes stretch or "squish", `max-width` is your friend. Sometimes it may be more sensible to serve different images for different devise sizes: a 1200px image doesn't make sense to load on a mobile device.

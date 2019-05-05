# Tachyons React App [WIP]

This extends create-react-app to include Tachyons implemented with emotion +
styled-system. If you're familiar with Tachyons and are interested in
css-in-js, this is hopefully a helpful project. Can be used for anything you'd
use create-react-app for. While Tachyons is light-weight by default, using css-in-js will
result in increased css performance as you don't send unused styles down the wire. 

## Getting going

Clone the directory and cd into the root of the directory
```
git clone git@github.com:tachyons-css/tachyons-styled-react.git newProject && cd newProject
```

Install dependencies
```
yarn 
```

Start the dev environment
```
yarn start
```

This should start a development environment on ```localhost:3000```


## Elements 
```
src/elements/
```
This folder contains html elements wired up to styled system. Scales 
are defined and configurable in ```src/theme.js```

Not every element has every styling prop included. For instance I don't find it useful
to set fontSize on an img.

Elements can be composed together just like regular html elements to make more
complex components. 

## Pages

Add new pages / routes in src/App.js

You can copy src/pages/Example.js to get a new blank page to work with. Say we wanted
to create a view at localhost:3000/new-page and we wanted the page to be called NewPage.

Import it into App.js 
```
// import pages here 
import Styles from './pages/Styles'
import Home from './pages/Home'
import NewPage from './pages/NewPage'
```

Next add the route you want to use for that page

```
  <Router>
    <Route exact path='/' component={Home} />
    <Route path='/styles' component={Styles} />
    <Route path='/new-page' component={NewPage} />
  </Router>
```

## Theme

The theme file is 100% configurable. While Tachyons comes with some useful defaults, 
you can modify, extend, or reduce anything that's there to fit your needs. 

## Styled system

Styled system is well documented and I suggest checking out the official site
over at https://styled-system.com. In short - Styled system allows you to pass
arrays of values to style props like color, fontSize, display, and more that
map to a consistent set of breakpoints.  You can reference scales from a theme
file or pass in literal values. The output is a set of single purpose classes
for only the styles you need in your view.

I love styled system. I've been using it heavily for the last two years and I
think it is a great way to implement Tachyons. While many people think of
Tachyons as a css file, I think of it as a project. A whole bunch of modular
ideas with a common set of principals. 

The main Tachyons repo includes a bunch of terse naming schemes for a lot of
the classes, but that was never a core part of the project, which is why thanks
to [@hongkonggong](https://github.com/hongkonggong) there has been a verbose
version with longer class names we've supported. While the main version was
built with postcss, we've long supported a sass build as well. The stack has
never been the point. Tachyons for me have been centered around pushing the
envelope in css performance for both rendering and download speed while testing
the relationships between values in design primitives.

While trying to keep Tachyons small - it's important to limit
things like how large the color palette is. For every color there were
corresponding border,:hover,:focus classes. With styled-system and emotion this
isn't an issue. You can keep a more verbose color palette, without automatically 
creating a larger css foot-print. The only css that's generated is for the styles you are
using. While some people use something to strip out unused styles, I think this
model makes more sense and is less error prone.

While personally I don't have too much trouble parsing the same property being
spread out in a class string e.g. ```"f2 db di-ns f3-m f4-l"``` I think it's a
lot nicer to have properties automatically grouped together. You also aren't
dealing with repetitive name spacing in the class names e.g ```f6 f4-ns f3-l```
Each f is just indicating it's the font size property. I don't think I'm going
out on a limb to say that this is ~1000x nicer ```fontSize={[3,4,6]}```

If the transition to javascript style syntax scares you a bit, I can absolutely
relate. I am very limited in my javascript ability and this project is partly a
reflection of all the stuff I wish I had setup 2 years ago when I first started
to almost explicitly work in codebases that used a css-in-js solution for
styling. If you know html and css - I hope this serves as a gateway to play with 
react and css-in-js a bit. It's currently my favorite way to use Tachyons.

## Reference 

- https://styled-system.com
- https://styled-system.com/table
- https://emotion.sh
- https://github.com/facebook/create-react-app

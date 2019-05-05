# Tachyons React App [WIP]

This extends create-react-app to include Tachyons implemented with emotion +
styled-system. If you're familiar with Tachyons and are interested in
css-in-js, this is hopefully a helpful project. Can be used for anything you'd
use create-react-app for. While Tachyons is light-weight by default, using css-in-js can
allow you to only send needed styles down the wire to the user. This if often under 4kb. 

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

## Elements 
```
src/elements/
```
This folder contains html elements wired up to styled system. Scales 
are defined and configurable in ```src/theme.js```

Elements is meant to be customizable. By default they aren't very opinionated - but 
you could set your base reset / normalize styles here. 

Elements can be composed together just like regular html elements to make more
complex components. 

## Reference 

- (https://styled-system.com)
- [https://emotion.sh]
- [https://github.com/facebook/create-react-app]

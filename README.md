## React Embedded Twitter Timeline Component

A shortcut for embedding Twitter widgets with React.js. Note: Widgets must be pre-generated before usage.

<img src="/src/images/timeline-example.png" style="max-width:100%;">

## Installation
   
   Install using <a href="https://www.npmjs.com/">npm</a> 

  `npm install react-embedded-twitter-timeline`

## Usage

   1. Go to https://dev.twitter.com/web/embedded-timelines and create a new timeline widget. Grab the `data-widget-id` from the generated anchor tag (e.g `<a class="twitter-timeline" href="https://twitter.com/hashtag/reactjs" data-widget-id="`**123**`">#reactjs Tweets</a>`)

   2. import `Timeline` from `'react-embedded-twitter-timeline'` (`var Timeline = require('react-embedded-twitter-timeline'` or similar)

   3. Use `<Timeline username="" widgetId=""/>` with your widget's ID (plus additional `username` and `tagLine` props for filling in the no-js fallback anchor tag).
   
## License

   This project is licensed under the terms of the <a href="https://github.com/callemall/material-ui/blob/master/LICENSE">MIT license</a>

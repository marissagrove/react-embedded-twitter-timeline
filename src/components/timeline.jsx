var React = require('react');

var timelineDidMount = function(d,s,id) {
    var js
    , fjs = d.getElementsByTagName(s)[0]
    , head = d.getElementsByTagName("head")[0]
    , p = /^http:/.test(d.location)?'http':'https';
    
    js = d.createElement(s);
    js.id = id;
    js.src = p+"://platform.twitter.com/widgets.js";
    if (fjs) {
	fjs.parentNode.insertBefore(js,fjs);
    } else {
	// Handle the case where we're running in a test environemnt
	// and there isn't a script tag in the head element.
	head.appendChild(js);
    }
};

var Timeline = React.createClass({
    componentDidMount: function() {
        timelineDidMount(document,"script","twitter-wjs");

	// If we don't care about doing anything to the timeline after
	// it mounts, just return now
	if (!this.props.timelineDidMount)
	    return;
	timelineDidMount();

	// Else we have to loop until the timeline loads
        var detectLoaded = function() {
	    var twitterIframeEl = document.querySelector('iframe.twitter-timeline-rendered')
	    , twitterIsFinishedLoading = twitterIframeEl && twitterIframeEl.style.height == '600px' && twitterIframeEl.style.position == 'static';

	    // In order for style changes to apply we have to wait
	    // until the iframe has loaded to manipulate the js. Run
	    // twitterIsFishedLoading every 100 milliseconds until
	    // iframe is loaded and original styles are set, then run
	    // the code to change the styles through js.
	    if (twitterIsFinishedLoading) {
		// Timeline mounted and ran its javascript, now we can call
		// timelineDidMount. We can call it directly since we
		// checked above that it exists.
		this.props.timelineDidMount(twitterIframeEl);
	    } else {
		setTimeout(detectLoaded, 10);
	    };
	};
        detectLoaded();
    },
    componentWillUnmount: function() {
	var twitterScript = document.getElementById("twitter-wjs");
	var scriptParent = twitterScript.parentNode;
	scriptParent.removeChild(twitterScript);
    },
    render: function() {
	return (
		<div className="twitter-iframe-container">
		<a className="twitter-timeline" href={this.props.username} data-widget-id={this.props.widgetId}>{this.props.tagLine}</a>
		</div>
	);
    }
});

module.exports = Timeline;
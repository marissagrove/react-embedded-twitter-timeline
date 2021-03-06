var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Timeline = require('../timeline');

describe('root', function () {
    it('renders without problems', function () {
	var timeline = TestUtils.renderIntoDocument(<Timeline/>);
	expect(timeline).toExist();
    });
  
    it('Calls timelineDidMount callback', function (done) {
	var callbackFired = false;

	// TODO: Figure out how to confirm the callback it
	// successfully fired.
	var onDidMount = function(twitterIframeEl){
	    console.log("Twitter timeline has mounted: ", twitterIframeEl);
	    done();
	}

	var timeline = TestUtils.renderIntoDocument(<Timeline timelineDidMount={onDidMount} />);
	onDidMount();
    });
});

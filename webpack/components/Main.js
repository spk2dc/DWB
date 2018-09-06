import React, { Component } from "react";
import './assets/js/main.min.js';
import './assets/js/staticman/staticman-reviews.js';
import './assets/js/vendor/real-time/WebPushManager.js';
class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;

var Worker = require("worker-loader?name=hash.worker.js!./worker");
var worker = new Worker();
worker.postMessage("pageB");
worker.onmessage = function(event) {
	var templatepageB = event.data; // "This text was generated by template pageB"
};

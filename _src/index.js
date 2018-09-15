import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './Hello';
class App extends Component {
 render() {
 return (
 <Hello />
 )
 }
}
render(<App />, document.getElementById('initial-content'));

// CSS JS and SASS files
import './main.css';

import './Realtime';

import './WebPushManager';

import './Firebase';

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM('<html></html>');
var $ = require('jquery')(window);

require('lightgallery');
require('lazysizes');
require('lunr');
require('svg4everybody');
require('default-passive-events');
require('anchor-js');

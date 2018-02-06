var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName= 'Chijioke';
var firstMessage= 'my first msg';

ReactDOM.render(
	<Greeter name={firstName} message={firstMessage}/>,
	document.getElementById('app')
);

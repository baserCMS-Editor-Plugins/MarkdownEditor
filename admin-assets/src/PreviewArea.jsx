/**
 * @jsx React.DOM
 */

var React = require('react');
var Markdown = require('./Markdown.jsx');

var PreviewArea = React.createClass({
	render: function () {
		return (
			<Markdown raw={this.props.text} />
		);
	}
});

module.exports = PreviewArea;

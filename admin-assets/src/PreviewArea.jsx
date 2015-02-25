/**
 * @jsx React.DOM
 */

var marked = require('marked');
var React = require('react');

var PreviewArea = React.createClass({
	render: function () {
		return (
			<div dangerouslySetInnerHTML={{__html: marked(this.props.text)}} />
		);
	}
});

module.exports = PreviewArea;

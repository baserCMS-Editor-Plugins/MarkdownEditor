/**
 * @jsx React.DOM
 */

var React = require('react');

var InputArea = React.createClass({
	render: function () {
		return (
			<textarea defaultValue={this.props.text} onChange={this.props.onChange.bind(null, this)} onKeyDown={this.props.onKeyDown.bind(null, this)} />
		);
	}
});

module.exports = InputArea;

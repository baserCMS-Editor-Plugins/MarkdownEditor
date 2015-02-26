/**
 * @jsx React.DOM
 */

var React = require('react');

var InputArea = React.createClass({
	render: function () {
		return (
			<textarea name="data[Page][contents]" id="PageContents" defaultValue={this.props.text} onChange={this.props.onChange.bind(null, this)} onKeyDown={this.props.onKeyDown.bind(null, this)} onScroll={this.props.onScroll.bind(null, this)} />
		);
	}
});

module.exports = InputArea;

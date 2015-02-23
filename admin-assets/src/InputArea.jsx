/**
 * @jsx React.DOM
 */

var React = require('react');

var InputArea = React.createClass({
	render: function () {
		return (
			<div class="markdown-editor__input-area">
				<textarea defaultValue={this.props.text} onChange={this.props.onChange.bind(null, this)} onKeyDown={this.props.onKeyDown.bind(null, this)} />
			</div>
		);
	}
});

module.exports = InputArea;

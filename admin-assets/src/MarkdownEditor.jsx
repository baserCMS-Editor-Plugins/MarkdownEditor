/**
 * @jsx React.DOM
 */

var React = require('react');
var InputArea = require('./InputArea.jsx');
var PreviewArea = require('./PreviewArea.jsx');

var MarkdownEditor = React.createClass({
	getInitialState: function() {
		return {
			inputAreaValue: this.props.defaultValue
		};
	},
	handlerChange: function(component, event) {
		this.setState({ inputAreaValue: event.currentTarget.value });
	},
	handlerKeyDown: function(component, event) {
		if (event.key === 'Tab') {
			// Current Text
			var text = event.currentTarget.value;
			// Caret cursor start position by text length
			var from = event.currentTarget.selectionStart;
			// Caret cursor end position by text length
			var to = event.currentTarget.selectionEnd;

			// Add Tab Character (Replace Text)
			var textArray = text.split('');
			textArray.splice(from, to - from, "\t");
			var newText = textArray.join('');

			// Update state
			this.setState({ inputAreaValue: newText });

			// Update textarea value
			event.currentTarget.value = newText;
			// Move to position added tab character
			event.currentTarget.setSelectionRange(to + 1, to + 1);

			// Stop events
			event.stopPropagation();
			event.preventDefault();
		}
	},
	handlerScroll: function(component, event) {
		console.log(event);
	},
	render: function () {
		return (
			<div className="markdown-editor">
				<div className="markdown-editor__input-area">
					<InputArea text={this.state.inputAreaValue} onChange={this.handlerChange} onKeyDown={this.handlerKeyDown} onScroll={this.handlerScroll} />
				</div>
				<div className="markdown-editor__preview-area" >
					<PreviewArea text={this.state.inputAreaValue} />
				</div>
			</div>
		);
	}
});

module.exports = MarkdownEditor;

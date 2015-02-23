window.bcPluginMarkdownEditor = window.bcPluginMarkdownEditor || {};

$(function() {

	if (!window.bcPluginMarkdownEditor.embedded) {

		window.bcPluginMarkdownEditor.embedded = true;

		var React = require('react');
		var MarkdownEditor = require('./MarkdownEditor.jsx');

		var Main = React.createClass({
			onChange: function() {},
			render: function () {
				return (
					<div onChange={this.onChange} >
						<MarkdownEditor />
					</div>
				);
			}
		});

		var $markdownEditor = $('.editor-area');
		$markdownEditor.addClass('-bc-plugin-markdown-editor');

		React.render(<Main />, $markdownEditor[0]);

	}

});
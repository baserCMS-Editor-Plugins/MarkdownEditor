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
						<MarkdownEditor defaultValue={this.props.defaultValue} />
					</div>
				);
			}
		});

		var $markdownEditor = $('.editor-area');
		var $textarea = $markdownEditor.find('textarea');
		var defaultValue = $textarea.val();
		$markdownEditor.addClass('-bc-plugin-markdown-editor');

		React.render(<Main defaultValue={defaultValue} />, $markdownEditor[0]);

	}

});

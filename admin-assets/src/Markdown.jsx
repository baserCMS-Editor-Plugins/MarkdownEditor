/**
 * @jsx React.DOM
 */

var React = require('react');
var mdast = require('mdast');
var Highlight = require('./Highlight.jsx');

var $ = React.createElement;
var sanitize = null;

var toChildren = function(node, parentKey) {
	var child, i;
	return (function() {
		var _i, _len, _ref, _results;
		_ref = node.children;
		_results = [];
		for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
			child = _ref[i];
			_results.push(compile(child, parentKey + '_' + i));
		}
		return _results;
	})();
};

var compile = function(node, parentKey) {
	var dompurify, key, value;
	if (parentKey == null) {
		parentKey = '_start';
	}
	key = parentKey + '_' + node.type;
	switch (node.type) {
		case 'text':
			return node.value;
		case 'inlineCode':
			return $('code', {
				key: key,
				className: 'inlineCode',
				'data-line': node.position.start.line
			}, node.value);
		case 'code':
			return $(Highlight, {
				className: node.lang,
				'data-line': node.position.start.line
			}, node.value);
		case 'break':
			return $('br', {
				key: key,
				'data-line': node.position.start.line
			});
		case 'horizontalRule':
			return $('hr', {
				key: key,
				'data-line': node.position.start.line
			});
		case 'image':
			return $('img', {
				key: key,
				src: node.src,
				title: node.title,
				alt: node.alt,
				'data-line': node.position.start.line
			});
		case 'root':
			return $('div', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'strong':
			return $('strong', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'emphasis':
			return $('em', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'paragraph':
			return $('p', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'link':
			return $('a', {
				key: key,
				href: node.href,
				title: node.title,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'heading':
			return $('h' + node.depth.toString(), {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'list':
			return $((node.ordered ? 'ol' : 'ul'), {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'listItem':
			return $('li', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'blockquote':
			return $('blockquote', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'table':
			return $('table', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'tableHeader':
			return $('tr', {
				key: key,
				'data-line': node.position.start.line
			}, [
				$('th', {
					key: key + '_inner-th',
					'data-line': node.position.start.line
				}, toChildren(node, key))
			]);
		case 'tableRow':
			return $('tr', {
				key: key,
				'data-line': node.position.start.line
			}, [
				$('td', {
					key: key + '_inner-td',
					'data-line': node.position.start.line
				}, toChildren(node, key))
			]);
		case 'tableCell':
			return $('span', {
				key: key,
				'data-line': node.position.start.line
			}, toChildren(node, key));
		case 'html':
			return $('div', {
				key: key
			}, [
				$('div', {
					key: key + '_raw',
					'data-line': node.position.start.line,
					dangerouslySetInnerHTML: {
						__html: node.value
					}
				})
			]);
	}
};

var createComponent = function(raw) {
	ast = mdast.parse(raw, {
		gfm: true,
		breaks: true
	});
	return compile(ast);
};

var Markdown = React.createClass({
	render: function () {
		return React.DOM.div(null, createComponent(this.props.raw));
	}
});

module.exports = Markdown;

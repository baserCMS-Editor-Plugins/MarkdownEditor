<?php
/**
 * MarkdownEditor for baserCMS
 *
 * Copyright (c) 2015 Yusuke Hirao
 *
 * @copyright		Copyright 2013 Yusuke Hirao
 * @link			https://github.com/YusukeHirao/MarkdownEditor
 * @package			baser.plugins.htmleditor.config
 * @since			baserCMS v3.0.6
 * @version			v0.1.0
 * @license			MIT license
 *
 */

class MarkdownEditorHelper extends AppHelper {

	public $helpers = array('BcBaser','BcForm');

	public function editor($fieldName, $options) {
		$editor = $this->build($fieldName, $options);
		$textarea = $this->BcForm->textarea($fieldName);
		return $editor . $textarea;
	}

	protected function build($fieldName, $options = array()) {
		// JavaScriptファイルの読み込み
		$this->BcBaser->js(array(
			'MarkdownEditor.admin/markdown_editor/main.js',
		), false);
	}

}

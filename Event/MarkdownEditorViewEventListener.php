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

class MarkdownEditorViewEventListener extends BcViewEventListener {
/**
 * 登録イベント
 *
 * @var array
 */
	public $events = array('beforeLayout');

/**
 * beforeLayout
 *
 * @param CakeEvent $event
 * @return boolean
 */
	public function beforeLayout(CakeEvent $event) {
		$View = $event->subject;
		// 管理画面ではなにもしない
		if(BcUtil::isAdminSystem()) {
			// プレビューは適用
			if (
				($View->request['controller'] == 'pages' && $View->request['action'] == 'display')
				||
				($View->request['plugin'] == 'blog' && $View->request['action'] == 'archives')
			) {
			} else {
				return true;
			}
		}
		

		App::import('vendor', 'MarkdownEditor.erusev/parsedown/Parsedown');

		$Parsedown = new Parsedown();

		$View->output = $Parsedown->text($View->output);

		return true;

	}

}

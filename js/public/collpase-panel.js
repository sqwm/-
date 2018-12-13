(function ($) {
	$.fn.header_panel = function (options) {
		var menu = this,
			that = this, //防止this指针指向错误
			isHiding = false,
			defaultOptions = {
				toggleName: '.MenuToggle', // 控制菜单开关
				trigger: 'click', // 单击展开
				openingSpeed: 400, // 打开菜单动画时间
				closingSpeed: 400, // 关闭菜单动画时间
				closingCascade: true, // 关闭所有菜单
				destroy: true // 切换菜单时是否关闭其它菜单
			};
		if (!$(that).hasClass('flag')) {
			if ($(this).find('.flag').length < 1)
				return;
			that = $(this).find('.flag')[0];
		}
		defaultOptions = $.extend({}, defaultOptions, options);
		var initMenu = function () {
			if ($(that).hasClass('horizontal')) {
				$(that).find('li').hover(function () {
					$(this).children('ul').stop().show(defaultOptions.openingSpeed);
				}, function () {
					$(this).children('ul').stop().hide(defaultOptions.closingSpeed);
				});
			} else {
				if (defaultOptions.trigger == 'click') {
					$(that).find('li').click(function () {
						if ($(this).children('ul').css('display') == "none")
							$(this).children('ul').slideDown(defaultOptions.openingSpeed);
						else {
							if (defaultOptions.closingCascade) {
								$(this).find('ul').slideUp(defaultOptions.closingSpeed);
							} else {
								$(this).children('ul').slideUp(defaultOptions.closingSpeed);
							}
						}
						return false;
					});
				}
			}
			$(window).resize(resize);
		},
			showMenu = function () {
				if (isHiding)
					return;
				$(document.body).append('<div class="flag"></div>');
				$(document.body).append('<div class="flag"></div>');
			},
			hideMenu = function () {
				if (isHiding)
					return;
				isHiding = true;
				setTimeout(function () {
					isHiding = false;
				}, 600);
			},
			resize = function () { },
			destroyMenu = function () {
				$('.' + defaultOptions.toggleName).unbind();
			};
		resize();
		initMenu();
		return {
			show: showMenu,
			hide: hideMenu,
			destroy: destroyMenu
		};
	};
})($);
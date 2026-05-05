$(document).ready(function() {
$(window).on('scroll load', function(e) {
	var nowScrollTop = $(window).scrollTop(),
		nowScrollLeft = $(window).scrollLeft();
		quickMenuSelect(nowScrollTop);
});

var quickClickTF = false,
	quickOnClass = 'active';
var inViewCheck = function(el){
	var _this = el;
	var elementTop = _this.offset().top + ($(window).height() / 2);
	var elementBottom = elementTop + _this.outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};
var quickMenuSelect = function(st){
	var scrollTop = st;
	var elQuick1stLi = '.quick-1st > li';
	if (quickClickTF) return;
	if (!scrollTop) {
		$(elQuick1stLi).removeClass(quickOnClass).eq(0).addClass(quickOnClass);
	} else {
		$(elQuick1stLi).each(function(i, el) {
			var _this = $(el);
			var elSections = _this.children('a').attr('href');
			if (inViewCheck($(elSections))) {
				$(elQuick1stLi).removeClass(quickOnClass);
				_this.addClass(quickOnClass);
			}
		});
	}
};

$('.quick-menu li > a').on('click', function(e){
	e.preventDefault();
	var quickClickTime;
	var thisIndex = $(this).parent('li').index();
	var toGoTop = (thisIndex != 0) ? $($(this).attr('href')).offset().top - $('#page_top_sec').outerHeight() : 0;
	$(this).parent('li').addClass(quickOnClass).siblings('li').removeClass(quickOnClass);
	$('html, body').animate({
		scrollTop: toGoTop
	}, 250);
	quickClickTF = true;
	clearTimeout(quickClickTime);
	quickClickTime = setTimeout(function(){
		quickClickTF = false
	}, 300);
});
});
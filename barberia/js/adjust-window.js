// outerHeight es para barras de estado en iphone(search Bar)
wd = $(window).width();
hg = $(window).height();
$('body').attr('style','width:'+wd+'px; height:'+hg+'px');
$(window).resize(function() {
	wd = $(window).width();
	hg = $(window).height();
	$('body').attr('style','width:'+wd+'px; height:'+hg+'px');
});
window.skip = function() {
	if (i === 0) {
		var newcover = $('<div class="cover is_in" style="background-image:url(http://www.playthishiphop.com/wp-content/uploads/2012/10/kanye-west-graduation.jpg)"></div>');
		i = 1;
	} else {
		var newcover = $('<div class="cover is_in" style="background-image:url(http://skreened.com/render-product/k/o/c/kocybekgwkxytesekiap/image.w174h200f3.jpg)"></div>');
		i = 0;
	}
	var cover = $('.cover:first-of-type');
	cover.before(newcover);
	cover.addClass('is_fading');
	$('.wrapper').addClass('has_nudge');
	setTimeout(function(){
		$('.cover.is_fading').remove();
		$('.cover.is_in').removeClass('is_in');
		$('.wrapper').removeClass('has_nudge');
	},350);
}

window.i = 0;
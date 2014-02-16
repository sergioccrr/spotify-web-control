window.skip = function() {
	if (i === 0) {
		var newcover = $('<div class="cover is_in" style="background-image:url(http://www.playthishiphop.com/wp-content/uploads/2012/10/kanye-west-graduation.jpg)"></div>');
		var newi = $('<div class="indicator is_in"><h2 class="song">Breaking Free</h2><h3 class="artist">Santiago Lapresta</h3><h3 class="album">Breaking Free</h3><h3 class="time">5:32</h3><div class="progress"><div class="done" style="width:55%"></div></div></div>');
		i = 1;
	} else {
		var newcover = $('<div class="cover is_in"><div class="cover_loading" style="border-color:rgb('+(Math.ceil(Math.random()*100)+150)+','+(Math.ceil(Math.random()*100)+150)+','+(Math.ceil(Math.random()*100)+150)+');"></div></div>');
		var newi = $('<div class="indicator is_in"><h2 class="song">Fallen Angels</h2><h3 class="artist">Black Veil Brides</h3><h3 class="album">Fallen Angels</h3><h3 class="time">2:44</h3><div class="progress"><div class="done" style="width:55%"></div></div></div>');
		i = 0;
	}

	var cover = $('.cover:first-of-type');
	var indicator = $('.indicator:first-of-type');

	cover.before(newcover);
	indicator.before(newi);

	cover.addClass('is_fading');
	indicator.addClass('is_fading');

	$('.wrapper').addClass('has_nudge');
	setTimeout(function(){
		$('.cover.is_fading').remove();
		$('.cover.is_in').removeClass('is_in');
		$('.indicator.is_fading').remove();
		$('.indicator.is_in').removeClass('is_in');
		$('.wrapper').removeClass('has_nudge');
	},350);
}

window.i = 0;
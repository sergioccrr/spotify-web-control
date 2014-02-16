window.swc = {};
window.swc.song = function(song) {
	this.name = song.name;
	this.artist = song.artist;
	this.album = song.album;
	this.cover = song.cover;
	this.duration = song.duration;
	return this;
}
window.swc.next = function(song) {
	window.swc_.push(song,'next',function(){
		window.swc.play();
	});
}
window.swc.prev = function(song) {
	window.swc_.push(song,'prev',function(){
		window.swc.play();
	});
}
window.swc.play = function(){
	return window.swc_.setPlaybackState('playing');
}
window.swc.pause = function(){
	return window.swc_.setPlaybackState('paused');
}




window.swc_ = {};
window.swc_.setPlaybackState = function(state) {
	if(state === 'paused') {
		$('.player').addClass('is_paused');
	} else {
		$('.player').removeClass('is_paused');
	}
}
window.swc_.push = function(song,where,callback) {

	var extraClass = '';
	switch(where) {
		case undefined:
		case 'initial':
		case 'next':
			extraClass = ' to_next';
			break;
		case 'prev':
			extraClass = ' to_prev';
			break;
		default:
			throw 'invalid target';
			break;
	}

	var coverToInject = $(
		'<div class="cover is_in'+extraClass+'" style="background-image:url('+song.cover+')"></div>'
	);
	var indicatorToInject = $(
		'<div class="indicator is_in'+extraClass+'">'+
			'<h2 class="song">'+song.name+'</h2>'+
			'<h3 class="artist">'+song.artist+'</h3>'+
			'<h3 class="album">'+song.album+'</h3>'+
			'<h3 class="duration">'+song.duration+'</h3>'+
			'<div class="progress"><div class="done" style="width:55%"></div></div>'+
		'</div>'
	);

	var existingCover     = $('.cover:first-of-type');
	var existingIndicator = $('.indicator:first-of-type');

	existingCover.before(coverToInject);
	existingIndicator.before(indicatorToInject);

	existingCover.addClass('is_out'+extraClass);
	existingIndicator.addClass('is_out'+extraClass);

	setTimeout(function(){
		existingCover.remove();
		existingIndicator.remove();
		$('.is_in, .to_next, .to_prev').removeClass('is_in to_next to_prev');
		callback();
	},350);
}



window.skip = function() {

	if(i === 0) {
		i++;
		return window.swc.next(new window.swc.song({
			name: 'Santiago Fdez',
			artist: 'Santiago Fdez',
			cover: 'https://yt3.ggpht.com/-YDbigEGhkM8/AAAAAAAAAAI/AAAAAAAAAAA/gBV9VwVmOxc/s900-c-k-no/photo.jpg',
			duration: 'Santiago Fdez',
			album: 'Santiago Fdez'
		}));
	} else {
		i = 0;
		return window.swc.next(new window.swc.song({
			name: '2Santiago Fdez',
			artist: '2Santiago Fdez',
			cover: 'http://cdn.mos.musicradar.com/images/legacy/totalguitar/stone_temple_pilots_album_cover_Total_Guitar.JPG',
			duration: '2Santiago Fdez',
			album: '2Santiago Fdez'
		}));
	}

}
window.back = function() {

	if(j === 0) {
		j++;
		return window.swc.prev(new window.swc.song({
			name: 'Kamionka',
			artist: 'MKURLV',
			cover: 'https://yt3.ggpht.com/-YDbigEGhkM8/AAAAAAAAAAI/AAAAAAAAAAA/gBV9VwVmOxc/s900-c-k-no/photo.jpg',
			duration: '4:20',
			album: 'Uniform Title'
		}));
	} else {
		j = 0;
		return window.swc.prev(new window.swc.song({
			name: '2Santiago Fdez',
			artist: '2Santiago Fdez',
			cover: 'http://cdn.mos.musicradar.com/images/legacy/totalguitar/stone_temple_pilots_album_cover_Total_Guitar.JPG',
			duration: '2Santiago Fdez',
			album: '2Santiago Fdez'
		}));
	}

}
window.play = window.swc.play;
window.pause = window.swc.pause;

i = 0;j = 0;
# -*- coding: utf-8 -*-
from ScriptingBridge import *
from base64 import b64encode
from StringIO import StringIO
from PIL import Image
import json

spotify = SBApplication.applicationWithBundleIdentifier_('com.spotify.client')

def _convertImage(tiff_data):
	tiff_fh = StringIO()
	jpg_fh  = StringIO()
	tiff_fh.write(tiff_data)
	image = Image.open(tiff_fh)
	image.save(jpg_fh, format='jpg')
	jpg_b64 = b64encode(jpg_fh)
	return 'data:image/jpeg;base64,' + jpg_b64

def next():
	spotify.nextTrack()

def previous():
	spotify.previousTrack()

def pause():
	spotify.pause()

def play():
	spotify.play()

def currentTrack():
	data    = spotify.currentTrack()
	tiff = bytes(data.artwork().TIFFRepresentation())
	image   = 'data:image/tiff;base64,' + b64encode(tiff)
	result = {
		'uri'		:	data.spotifyUrl(),
		'artist'	:	data.artist(),
		'album'		:	data.album(),
		'name'		:	data.name(),
		'duration'	:	data.duration(),
		'artwork'	:	image,
	}
	return json.dumps(result)

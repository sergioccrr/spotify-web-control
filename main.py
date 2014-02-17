# -*- coding: utf-8 -*-
from flask import Flask, render_template
import spotify

app = Flask(__name__)



@app.route('/')
def homeHandler():
    return render_template('home.html')



@app.route('/api/previous')
def previousHandler():
	spotify.pause()
	spotify.previous()
	json = spotify.currentTrack()
	spotify.play()
	return json



@app.route('/api/play')
def playHandler():
	spotify.play()
	return spotify.currentTrack()



@app.route('/api/pause')
def pauseHandler():
	spotify.pause()
	return spotify.currentTrack()



@app.route('/api/next')
def nextHandler():
	spotify.pause()
	spotify.next()
	json = spotify.currentTrack()
	spotify.play()
	return json



@app.route('/api/current')
def currentHandler():
	return spotify.currentTrack()



if __name__ == '__main__':
    app.run(debug=True)

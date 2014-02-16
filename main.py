from flask import Flask, render_template
import spotify

app = Flask(__name__)



@app.route('/')
def homeHandler():
    return render_template('home.html')



@app.route('/api/a')
def previousHandler():
	spotify.pause()
	spotify.previous()
	a = spotify.currentTrack()
	spotify.play()
	return json



@app.route('/api/r')
def playHandler():
	spotify.play()
	return spotify.currentTrack()



@app.route('/api/p')
def pauseHandler():
	spotify.pause()
	return spotify.currentTrack()



@app.route('/api/s')
def nextHandler():
	spotify.pause()
	spotify.next()
	json = spotify.currentTrack()
	spotify.play()
	return json



@app.route('/api/c')
def currentHandler():
	return spotify.currentTrack()



if __name__ == '__main__':
    app.run(debug=True)

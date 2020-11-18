var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let vol= document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector('#slower').addEventListener("click", function(){
	video.playbackRate -= 0.1
	console.log("New Speed is " + video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate += 0.1
	console.log("New Speed is " + video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 5
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Current location " + video.currentTime)
});
	
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	} else if (video.muted == true){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}

});

document.querySelector("#volumeSlider").addEventListener("click", function(){
	console.log(this)
	console.log(this.value)
	let vol = document.querySelector('#volume').innerHTML = this.value + "%"
	video.volume = this.value/100
});

document.querySelector("#old").addEventListener("click", function(){
 	document.querySelector("#myVideo").classList.add("oldTime")
});

document.querySelector("#original").addEventListener("click", function(){
	document.querySelector("#myVideo").classList.remove("oldTime")
});

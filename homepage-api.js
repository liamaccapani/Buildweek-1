







let audioToPlay = document.getElementById('player')
     
let playAudio = function() {
  let playButton = document.getElementById('play-me')
  playButton.classList.toggle('playing')
  
  if (playButton.classList.contains('playing') === true) {
    audioToPlay.play()
  } else {
    audioToPlay.pause()
  }
 }
 // audioToPlay.ontimeupdate()

 let heart = document.getElementById('heart')
 
 heart.addEventListener('click', function() {
   heart.classList.toggle('green')
 })
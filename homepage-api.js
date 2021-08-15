// 🌍 Global variables
let albums = [] 
let error = false
const row = document.querySelector('.trendingRow')

window.onload = () => {
 getMusic('eminem')
//  getMusic('metallica')
//  getMusic('behemoth')
}

function getMusic(query){
  fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "9f5552359cmshed56aa6a434c099p12c1f9jsn9f075b9c7b2d",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(jsonAlbums => { //obj
    // console.log(jsonAlbums.data) //array
    
    //if promise is resolved and there are no quota limit errors =>
    if(jsonAlbums.data){
      albums = jsonAlbums.data
      console.log(albums)
      displayAlbums(albums)

    } else {
      //quota limit error = promise is resolved, but i still have an error. to catch it I can set it to false and change its value here and in catch
      error = true
      console.log(error)
    }
  })
  .catch(err => {
    console.error(err)
    error = true
  })
}

function displayAlbums(array){
  array.forEach(element => {
    row.innerHTML += `
    <div class="col album-card px-1">
      <div class="album-card-content">
        <img src=${element.album.cover} alt="${element.album.title}">
        <h5>${element.album.title}</h5>
        <p>${element.artist.name}</p>
      </div>
    </div>
    `
  });
}

// function displayAlbums(array){

// }









const audioToPlay = document.getElementById('player')
     
const playAudio = function() {
  let playButton = document.getElementById('play-me')
  playButton.classList.toggle('playing')
  
  if (playButton.classList.contains('playing') === true) {
    audioToPlay.play()
  } else {
    audioToPlay.pause()
  }
 }
 // audioToPlay.ontimeupdate()

const heart = document.getElementById('heart')
 
 heart.addEventListener('click', function() {
   heart.classList.toggle('green')
 })
const albumOverview = document.querySelector('.album-overview')
const parentDiv = document.querySelector('#tracklist-container')
let error = false

window.onload = () =>{
    const query = new URLSearchParams(window.location.search).get('albumId')
    console.log('the id/query is: ', query)
    getMusic(query)
}

function getMusic(query){
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "9f5552359cmshed56aa6a434c099p12c1f9jsn9f075b9c7b2d",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })       
    .then((response) => {
        //console.log(response) //body: ReadableStream 
        //console.log(response.json()) // Promise {<pending>}

        return response.json() // ✨ return ✨

    })
    .then((jsonAlbums) => { //aka response.json() content
        if(jsonAlbums.data){
            //console.log(jsonAlbums) //undefined if no return
            //OUTPUT {data: Array(25), total: 286, next: "https://api.deezer.com/sear...}
            console.log(jsonAlbums.data)

            displayTracks(jsonAlbums.data)

        } else {
            //quota limit error = promise is resolved, but i still have an error. to catch it I can set it to false and change its value here and in catch
            error = true
            console.log(error)
        }
    })
    .catch(err => {
        error = true
        console.error(err)
    })
}

function displayTracks (array){

    array.forEach(song => {
        // albumOverview.innerHTML = `
        // <div class="album-cover-info d-flex justify-content-start align-items-center">
        //     <div class="album-cover">
        //         <img src="assets/Pallbearer.jpg" alt="acdc">
        //     </div>

        //     <div class="album-title d-flex flex-column justify-content-end align-items-start pl-3">
        //         <p class="album mb-0"></p>
        //         <h2>Pallbearer</h2>
        //         <div class="album-infos-wrapper d-flex justify-content-start align-items-center">
        //             <div class="artist-img">
        //                 <img src="assets/diego.jpg" alt="">
        //             </div>
        //         </div>

        //         <div class="list pl-2">
        //             <span>Pallbearer</span>
        //             <span>2020</span>
        //         </div>
        //     </div>
                    
        // </div>
        // `

        parentDiv.innerHTML += `
        <div class="track--container d-flex justify-content-between align-items-center my-2">
            <div class="track-num-title">
                <div class="row align-items-center pt-1">
                    <div class="col-1 track-number"> <!--numero-->
                      <span>1</span>
                    </div>
                    <div class="col track-info px-0"> <!--titolo e artista-->
                      <h6 class="track-title mb-0">${song.title}</h6>
                      <p class="track-artist mb-0">${song.artist.name}</p>
                    </div>
                </div>
            </div>
    
            <div class="track-length">
                <span>${song.duration}</span>
            </div>
    
        </div>
        `
        return parentDiv
    });
}

/*
const audioToPlay = document.getElementById('player')
     
const playAudio = function() {
       const playButton = document.getElementById('play-me')
       playButton.classList.toggle('playing')
       
       if (playButton.classList.contains('playing') === true) {
         audioToPlay.play()
       } else {
         audioToPlay.pause()
       }
}
// audioToPlay.ontimeupdate()
*/

const heart = document.getElementById('heart')    
heart.addEventListener('click', function() {
        heart.classList.toggle('green')
})

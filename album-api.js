const parentDiv = document.querySelector('#tracklist-container')
let error = false

window.onload = () =>{
    const query = new URLSearchParams(window.location.search).get('albumId')
    console.log(query)
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
    .then((jsonAlbum) => { //aka response.json() content
        if(jsonAlbum.data){
            //console.log(jsonAlbum) //undefined if no return
            //OUTPUT {data: Array(25), total: 286, next: "https://api.deezer.com/sear...}
            console.log(jsonAlbum.data)

            // displayTracks(jsonAlbum.data)

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
    // array.map(track => {
    //     parentDiv.innerHTML += `
    //         <div class="track--container d-flex justify-content-between align-items-center my-2">
    //             <div class="track-num-title">
    //                 <div class="row align-items-center pt-1">
    //                     <div class="col-1 track-number"> <!--numero-->
    //                       <span>1</span>
    //                     </div>
    //                     <div class="col track-info px-0"> <!--titolo e artista-->
    //                       <h6 class="track-title mb-0">${track.title}</h6>
    //                       <p class="track-artist mb-0">${track.artist.name}</p>
    //                     </div>
    //                 </div>
    //             </div>
        
    //             <div class="track-length">
    //                 <span>${track.duration}</span>
    //             </div>
        
    //         </div>
    //     `
    // }).join()

    array.forEach(song => {
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

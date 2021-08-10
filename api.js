window.onload = () => {
    getMusic()
}

function getMusic(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=master%20of%20puppets", {
              "method": "GET",
              "headers": {
              "x-rapidapi-key": "9f5552359cmshed56aa6a434c099p12c1f9jsn9f075b9c7b2d",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            
    }).then((response) => {
        console.log(response) //body: ReadableStream 
        //console.log(response.json()) // Promise {<pending>}

        return response.json() // ✨ return ✨

    }).then((jsonDerulo) => { //aka response.json() content
        console.log(jsonDerulo) //undefined if no return
        //OUTPUT {data: Array(25), total: 286, next: "https://api.deezer.com/sear...}

        console.log(jsonDerulo.data)
        
        const parentDiv = document.querySelector('#tracklist-container')
        for (let song of jsonDerulo.data) {

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

                  </div>`
        };

        
    })
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


[
    {
        "id": 2114406,
        "readable": true,
        "title": "Nothing Else Matters",
        "title_short": "Nothing Else Matters",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114406",
        "duration": 388,
        "rank": 951872,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-bd4c3e7cd1a7ed330ffe5e212af5815e-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114399,
        "readable": true,
        "title": "Enter Sandman",
        "title_short": "Enter Sandman",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114399",
        "duration": 331,
        "rank": 937732,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-92d5bbb148445d41dc7be319744f1691-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114402,
        "readable": true,
        "title": "The Unforgiven",
        "title_short": "The Unforgiven",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114402",
        "duration": 386,
        "rank": 873313,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-7.dzcdn.net/stream/c-719c75fe7caa0355bb9a97cd7f5763e9-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114400,
        "readable": true,
        "title": "Sad But True",
        "title_short": "Sad But True",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114400",
        "duration": 323,
        "rank": 766651,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1747c1f71281e3c7fbdefee58523ef32-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114403,
        "readable": true,
        "title": "Wherever I May Roam",
        "title_short": "Wherever I May Roam",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114403",
        "duration": 403,
        "rank": 720634,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ad522bf832f0ba751de1a6d2c23d3dc-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 136340478,
        "readable": true,
        "title": "One",
        "title_short": "One",
        "title_version": "",
        "link": "https://www.deezer.com/track/136340478",
        "duration": 447,
        "rank": 786192,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-2.dzcdn.net/stream/c-272905d4ac48cd74748be5d890df2151-7.mp3",
        "md5_image": "95b8a54887369c8023ab293ba099dc0e",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 14581972,
            "title": "...And Justice For All",
            "cover": "https://api.deezer.com/album/14581972/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/95b8a54887369c8023ab293ba099dc0e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/95b8a54887369c8023ab293ba099dc0e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/95b8a54887369c8023ab293ba099dc0e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/95b8a54887369c8023ab293ba099dc0e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "95b8a54887369c8023ab293ba099dc0e",
            "tracklist": "https://api.deezer.com/album/14581972/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 136338506,
        "readable": true,
        "title": "Fade To Black (Remastered)",
        "title_short": "Fade To Black",
        "title_version": "(Remastered)",
        "link": "https://www.deezer.com/track/136338506",
        "duration": 417,
        "rank": 772979,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a3ff1e936f38193cf9e58dcd90ed1f30-7.mp3",
        "md5_image": "6d5f397660c6ec7a445f386edac05b9e",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 14581762,
            "title": "Ride The Lightning (Remastered)",
            "cover": "https://api.deezer.com/album/14581762/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "6d5f397660c6ec7a445f386edac05b9e",
            "tracklist": "https://api.deezer.com/album/14581762/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114570,
        "readable": true,
        "title": "Whiskey In The Jar",
        "title_short": "Whiskey In The Jar",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114570",
        "duration": 304,
        "rank": 800869,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-9418500d6156cd27f25fb479e902a3cb-7.mp3",
        "md5_image": "d6b738c64650ac1d5b73ca476b9198d3",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212391,
            "title": "Garage Inc.",
            "cover": "https://api.deezer.com/album/212391/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/1000x1000-000000-80-0-0.jpg",
            "md5_image": "d6b738c64650ac1d5b73ca476b9198d3",
            "tracklist": "https://api.deezer.com/album/212391/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 424562692,
        "readable": true,
        "title": "Master Of Puppets (Remastered)",
        "title_short": "Master Of Puppets",
        "title_version": "(Remastered)",
        "link": "https://www.deezer.com/track/424562692",
        "duration": 515,
        "rank": 766326,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 1,
        "preview": "https://cdns-preview-2.dzcdn.net/stream/c-294227b965bc2bc45f6c8dd84f4aeb1d-6.mp3",
        "md5_image": "291e2af9295ca885b154eee75dfa0432",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 51001232,
            "title": "Master Of Puppets (Deluxe Box Set / Remastered)",
            "cover": "https://api.deezer.com/album/51001232/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/1000x1000-000000-80-0-0.jpg",
            "md5_image": "291e2af9295ca885b154eee75dfa0432",
            "tracklist": "https://api.deezer.com/album/51001232/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 136338504,
        "readable": true,
        "title": "For Whom The Bell Tolls (Remastered)",
        "title_short": "For Whom The Bell Tolls",
        "title_version": "(Remastered)",
        "link": "https://www.deezer.com/track/136338504",
        "duration": 309,
        "rank": 776190,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-be747bdd310b7870b309758415bac67c-6.mp3",
        "md5_image": "6d5f397660c6ec7a445f386edac05b9e",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 14581762,
            "title": "Ride The Lightning (Remastered)",
            "cover": "https://api.deezer.com/album/14581762/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "6d5f397660c6ec7a445f386edac05b9e",
            "tracklist": "https://api.deezer.com/album/14581762/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114401,
        "readable": true,
        "title": "Holier Than Thou",
        "title_short": "Holier Than Thou",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114401",
        "duration": 227,
        "rank": 620667,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-5.dzcdn.net/stream/c-51ed0ada44d997ee222b486697c4deca-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114256,
        "readable": true,
        "title": "The Day That Never Comes",
        "title_short": "The Day That Never Comes",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114256",
        "duration": 476,
        "rank": 715250,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1ac04e42acd75db6e4184292f836a0de-6.mp3",
        "md5_image": "b0e17be162f5800159a107bc3ac01aa5",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212357,
            "title": "Death Magnetic",
            "cover": "https://api.deezer.com/album/212357/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/b0e17be162f5800159a107bc3ac01aa5/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/b0e17be162f5800159a107bc3ac01aa5/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/b0e17be162f5800159a107bc3ac01aa5/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/b0e17be162f5800159a107bc3ac01aa5/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b0e17be162f5800159a107bc3ac01aa5",
            "tracklist": "https://api.deezer.com/album/212357/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114407,
        "readable": true,
        "title": "Of Wolf And Man",
        "title_short": "Of Wolf And Man",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114407",
        "duration": 256,
        "rank": 595507,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-0.dzcdn.net/stream/c-018ae2cf435a9cde8be7b48e571fa393-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 136332702,
        "readable": true,
        "title": "Seek & Destroy (Remastered)",
        "title_short": "Seek & Destroy",
        "title_version": "(Remastered)",
        "link": "https://www.deezer.com/track/136332702",
        "duration": 414,
        "rank": 705423,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-e.dzcdn.net/stream/c-ed0f0ee58631f66dab9957213447031e-6.mp3",
        "md5_image": "f6d4ff72804ee17684a9b7b79a906898",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 14581190,
            "title": "Kill 'Em All (Remastered)",
            "cover": "https://api.deezer.com/album/14581190/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f6d4ff72804ee17684a9b7b79a906898/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f6d4ff72804ee17684a9b7b79a906898/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f6d4ff72804ee17684a9b7b79a906898/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f6d4ff72804ee17684a9b7b79a906898/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f6d4ff72804ee17684a9b7b79a906898",
            "tracklist": "https://api.deezer.com/album/14581190/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114404,
        "readable": true,
        "title": "Don't Tread On Me",
        "title_short": "Don't Tread On Me",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114404",
        "duration": 240,
        "rank": 582878,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-2.dzcdn.net/stream/c-258a74365c37fa70a0cbc151a8d262e9-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114517,
        "readable": true,
        "title": "The Unforgiven II",
        "title_short": "The Unforgiven II",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114517",
        "duration": 396,
        "rank": 683658,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3c007df85fc587b3e75ae573aa386636-6.mp3",
        "md5_image": "5bfc696a447f419d14b94ad348c2d91c",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212388,
            "title": "Reload",
            "cover": "https://api.deezer.com/album/212388/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/1000x1000-000000-80-0-0.jpg",
            "md5_image": "5bfc696a447f419d14b94ad348c2d91c",
            "tracklist": "https://api.deezer.com/album/212388/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114514,
        "readable": true,
        "title": "Fuel",
        "title_short": "Fuel",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114514",
        "duration": 269,
        "rank": 690659,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-4.dzcdn.net/stream/c-42eae1c1c9cc7bb510cdb65b0cf1cdc4-6.mp3",
        "md5_image": "5bfc696a447f419d14b94ad348c2d91c",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212388,
            "title": "Reload",
            "cover": "https://api.deezer.com/album/212388/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/5bfc696a447f419d14b94ad348c2d91c/1000x1000-000000-80-0-0.jpg",
            "md5_image": "5bfc696a447f419d14b94ad348c2d91c",
            "tracklist": "https://api.deezer.com/album/212388/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114408,
        "readable": true,
        "title": "The God That Failed",
        "title_short": "The God That Failed",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114408",
        "duration": 308,
        "rank": 548879,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8335e808f55d726db284cb115a765ab0-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114409,
        "readable": true,
        "title": "My Friend Of Misery",
        "title_short": "My Friend Of Misery",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114409",
        "duration": 407,
        "rank": 581321,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1ab04385d654dc439f0000051a35f2fa-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114405,
        "readable": true,
        "title": "Through The Never",
        "title_short": "Through The Never",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114405",
        "duration": 242,
        "rank": 550551,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-930edfc71ae4776499466a87452bd576-6.mp3",
        "md5_image": "f1c31620f0e108b707ce1a1af0954158",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212377,
            "title": "Metallica",
            "cover": "https://api.deezer.com/album/212377/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/f1c31620f0e108b707ce1a1af0954158/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f1c31620f0e108b707ce1a1af0954158",
            "tracklist": "https://api.deezer.com/album/212377/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 136332796,
        "readable": true,
        "title": "Hardwired",
        "title_short": "Hardwired",
        "title_version": "",
        "link": "https://www.deezer.com/track/136332796",
        "duration": 189,
        "rank": 676268,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b4b2af5618faf01e1d38cd6230b37b7d-6.mp3",
        "md5_image": "22df6212ca5a43b3ec83caa814e8da16",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 14581202,
            "title": "Hardwired…To Self-Destruct (Deluxe)",
            "cover": "https://api.deezer.com/album/14581202/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/22df6212ca5a43b3ec83caa814e8da16/1000x1000-000000-80-0-0.jpg",
            "md5_image": "22df6212ca5a43b3ec83caa814e8da16",
            "tracklist": "https://api.deezer.com/album/14581202/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114020,
        "readable": true,
        "title": "St. Anger",
        "title_short": "St. Anger",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114020",
        "duration": 441,
        "rank": 613050,
        "explicit_lyrics": true,
        "explicit_content_lyrics": 1,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-c.dzcdn.net/stream/c-c3e1d7f0380a2fa6fd436a1717f8a8d2-8.mp3",
        "md5_image": "c8b5cac8c93262cb9ffb06eaf195144a",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212328,
            "title": "St. Anger",
            "cover": "https://api.deezer.com/album/212328/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/c8b5cac8c93262cb9ffb06eaf195144a/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/c8b5cac8c93262cb9ffb06eaf195144a/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/c8b5cac8c93262cb9ffb06eaf195144a/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/c8b5cac8c93262cb9ffb06eaf195144a/1000x1000-000000-80-0-0.jpg",
            "md5_image": "c8b5cac8c93262cb9ffb06eaf195144a",
            "tracklist": "https://api.deezer.com/album/212328/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 424565222,
        "readable": true,
        "title": "Battery",
        "title_short": "Battery",
        "title_version": "",
        "link": "https://www.deezer.com/track/424565222",
        "duration": 312,
        "rank": 632999,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 1,
        "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f0c9b872325fa844478cc74d703caa73-10.mp3",
        "md5_image": "291e2af9295ca885b154eee75dfa0432",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 51001312,
            "title": "Master Of Puppets (Remastered)",
            "cover": "https://api.deezer.com/album/51001312/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/1000x1000-000000-80-0-0.jpg",
            "md5_image": "291e2af9295ca885b154eee75dfa0432",
            "tracklist": "https://api.deezer.com/album/51001312/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 2114565,
        "readable": true,
        "title": "Turn The Page",
        "title_short": "Turn The Page",
        "title_version": "",
        "link": "https://www.deezer.com/track/2114565",
        "duration": 366,
        "rank": 670875,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 0,
        "preview": "https://cdns-preview-1.dzcdn.net/stream/c-108fb6cd6b0dd5b1517db6e531864db2-6.mp3",
        "md5_image": "d6b738c64650ac1d5b73ca476b9198d3",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 212391,
            "title": "Garage Inc.",
            "cover": "https://api.deezer.com/album/212391/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/d6b738c64650ac1d5b73ca476b9198d3/1000x1000-000000-80-0-0.jpg",
            "md5_image": "d6b738c64650ac1d5b73ca476b9198d3",
            "tracklist": "https://api.deezer.com/album/212391/tracks",
            "type": "album"
        },
        "type": "track"
    },
    {
        "id": 424565252,
        "readable": true,
        "title": "Welcome Home (Sanitarium)",
        "title_short": "Welcome Home (Sanitarium)",
        "title_version": "",
        "link": "https://www.deezer.com/track/424565252",
        "duration": 387,
        "rank": 609927,
        "explicit_lyrics": false,
        "explicit_content_lyrics": 0,
        "explicit_content_cover": 1,
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-ac971bcf72c00ddd91bbe37a8f4a7288-9.mp3",
        "md5_image": "291e2af9295ca885b154eee75dfa0432",
        "artist": {
            "id": 119,
            "name": "Metallica",
            "link": "https://www.deezer.com/artist/119",
            "picture": "https://api.deezer.com/artist/119/image",
            "picture_small": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://cdns-images.dzcdn.net/images/artist/b4719bc7a0ddb4a5be41277f37856ae6/1000x1000-000000-80-0-0.jpg",
            "tracklist": "https://api.deezer.com/artist/119/top?limit=50",
            "type": "artist"
        },
        "album": {
            "id": 51001312,
            "title": "Master Of Puppets (Remastered)",
            "cover": "https://api.deezer.com/album/51001312/image",
            "cover_small": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/250x250-000000-80-0-0.jpg",
            "cover_big": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://cdns-images.dzcdn.net/images/cover/291e2af9295ca885b154eee75dfa0432/1000x1000-000000-80-0-0.jpg",
            "md5_image": "291e2af9295ca885b154eee75dfa0432",
            "tracklist": "https://api.deezer.com/album/51001312/tracks",
            "type": "album"
        },
        "type": "track"
    }
]
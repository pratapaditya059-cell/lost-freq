const button = document.getElementById("discoverBtn");

let songs = [];
let remainingSongs=[];

async function loadSongs() {
    const response = await fetch("songs.json");
    songs = await response.json();

    remainingSongs=[...songs];
}

button.addEventListener("click", function () {
    if (songs.length === 0) {
        console.log("No songs loaded yet!");
        return;
    }

    if (remainingSongs.length === 0) {
    remainingSongs = [...songs];
    }
    const randomIndex = Math.floor(Math.random() * remainingSongs.length);
    const song = remainingSongs.splice(randomIndex, 1)[0];

    document.getElementById("songTitle").textContent = song.title;
    document.getElementById("songArtist").textContent = song.artist;

    const playButton = document.getElementById("playOnYouTube");
    playButton.href = `https://www.youtube.com/watch?v=${song.videoId}`;
    playButton.hidden=false;
    console.log("Selected song:", song);
});

loadSongs();
const button = document.getElementById("discoverBtn");

let songs = [];

async function loadSongs() {
    const response = await fetch("songs.json");
    songs = await response.json();
}

button.addEventListener("click", function () {
    if (songs.length === 0) {
        console.log("No songs loaded yet!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];

    document.getElementById("songTitle").textContent = song.title;
    document.getElementById("songArtist").textContent = song.artist;

    const playButton = document.getElementById("playOnYouTube");
    playButton.href = `https://www.youtube.com/watch?v=${song.videoId}`;
    playButton.hidden=false;
    console.log("Selected song:", song);
});

loadSongs();

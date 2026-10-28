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

document.getElementById("songMeta").textContent =
    `${song.genre} · ${song.language}`;

const artwork = document.getElementById("songArtwork");
artwork.src = `https://img.youtube.com/vi/${song.videoId}/hqdefault.jpg`;
artwork.alt = `Artwork for ${song.title}`;

const playButton = document.getElementById("playOnYouTube");
playButton.href = `https://www.youtube.com/watch?v=${song.videoId}`;
playButton.hidden = false;

document.getElementById("musicCard").hidden = false;

console.log("Selected song:", song);

});

document.getElementById("closeMusicCard").addEventListener("click", function () {
    document.getElementById("musicCard").hidden = true;
});

loadSongs();
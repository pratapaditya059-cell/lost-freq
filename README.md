# LOST FREQ 🎧

> **Tune into the unknown.**

LOST FREQ is a music discovery website that helps you stumble upon songs you might never have found otherwise.

No accounts. No playlists to build. No algorithm deciding your taste. Just hit shuffle and let the road pick your next song.

🌐 **Live Website:** [lost-freq.vercel.app](https://lost-freq.vercel.app/)

---

## ✨ Features

- **Random Song Discovery** — Discover a random song with no repeats until every song in the current selection has been discovered.
- **Genre Filtering** — Choose a genre and explore music that matches your mood.
- **English & Hindi Music Library** — A growing collection of rock, alternative, indie, grunge, metal, Bollywood, Sufi and more.
- **YouTube Integration** — Open each discovered song directly on YouTube.
- **Cinematic Experience** — A midnight-highway aesthetic featuring a dark amber-and-black theme, atmospheric video background, glassmorphism and bold typography.
- **Underrated Gems** — Discover forgotten classics and lesser-known tracks alongside familiar favourites.

## 🎵 How It Works

All songs are stored in a simple `songs.json` file.

Each song follows a consistent six-field structure:

```json
{
  "title": "November Rain",
  "artist": "Guns N' Roses",
  "videoId": "8SbUC-UaAxE",
  "genre": "Rock",
  "category": "Rock",
  "language": "English"
}
```

### Song Data Structure

| Field | Description |
|---|---|
| `title` | Song title |
| `artist` | Artist name(s) |
| `videoId` | YouTube video ID |
| `genre` | Specific genre, e.g. Grunge, Dream Pop, Sufi |
| `category` | Broad category used for filtering |
| `language` | Song language, e.g. English or Hindi |

### Available Categories

Rock · Grunge · Metal · Alternative · Pop · Indie · Bollywood · Others

The discovery system maintains a pool of songs for the current selection. Once a song is discovered, it is removed from that pool until the selection runs out. The pool then resets.

## 🛠️ Built With

- **HTML5** — Website structure
- **CSS3** — Styling, animations and visual effects
- **JavaScript** — Discovery logic and interactive features
- **JSON** — Song database
- **YouTube** — External music links
- **Vercel** — Deployment and hosting

## 🚀 Running Locally

LOST FREQ is a static website, so no backend or package installation is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/lost-freq.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lost-freq
   ```

3. Start a local static server:

   ```bash
   npx serve .
   ```

4. Open the local URL displayed in your terminal.

Alternatively, use the **Live Server** extension in VS Code.

## 📁 Project Structure

```text
lost-freq/
│
├── index.html
├── style.css
├── script.js
├── songs.json
│
├── videos/
│   └── highway.mp4
│
├── README.md
└── .gitignore
```

## 🎼 Adding Songs

Want to contribute to the music library?

1. Find a song you think belongs on LOST FREQ.
2. Locate its correct YouTube recording.
3. Copy the video ID from the URL (`watch?v=VIDEO_ID`).
4. Verify that the ID opens the intended song.
5. Add the song to `songs.json` using the existing six-field structure.
6. Use one of the existing categories and provide the correct language tag.

**Important:** Always verify YouTube video IDs. An incorrect ID means the user discovers the wrong song.

Underrated gems are especially welcome!

## 🔮 What's Next?

Some ideas for future improvements:

- Language selection before music discovery.
- More languages and regional music.
- An expanded library of underrated classics and hidden gems.
- Additional discovery filters and moods.
- More ways to explore music beyond the mainstream.

## 🤝 Contributing

Found a song that fits the midnight-highway mood? Contributions are welcome!

Add your suggestions with accurate song information and verified YouTube IDs.

---

<p align="center">

**LOST FREQ**

*Somewhere between the songs you know and the ones you haven't found yet.*

</p>
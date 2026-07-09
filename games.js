// Add a new game by appending one object to this array.
// Fields:
//   name        — display name shown on the tile
//   description — one-line subtitle
//   url         — full URL the tile links to (opens in new tab)
//   icon        — emoji or short text rendered as the tile icon (shown when no thumbnail)
//   accentColor — CSS color used for hover glow and accent line
//   thumbnail   — (optional) path to a preview image, e.g. "thumbnails/mygame.svg"
//   comingSoon  — (optional) set to true to dim the tile and disable the link

const games = [
  {
    name: "Snake",
    description: "Classic snake — grow as long as you can without hitting the walls.",
    url: "https://snake.alfi3.com",
    icon: "🐍",
    accentColor: "#39d353",
    thumbnail: "thumbnails/snake.svg",
  },
  {
    name: "Afterglow",
    description: "A high-speed platformer built for speedrunners. Go fast.",
    url: "https://afterglow.alfi3.com",
    icon: "⚡",
    accentColor: "#ff6b35",
    thumbnail: "thumbnails/afterglow.svg",
  },
  {
    name: "Solitaire",
    description: "Classic Klondike solitaire. One card at a time.",
    url: "https://solitaire.alfi3.com",
    icon: "🃏",
    accentColor: "#7c6fff",
    thumbnail: "thumbnails/solitaire.svg",
  },
  {
    name: "Pac-Man",
    description: "Eat all the dots, dodge the ghosts. Waka waka.",
    url: "https://pacman.alfi3.com",
    icon: "👾",
    accentColor: "#ffcc00",
    thumbnail: "thumbnails/pacman.svg",
  },
];

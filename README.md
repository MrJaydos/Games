# alfi3 · Game Launcher

A self-hosted game launcher homepage — a dark-themed dashboard that links out to games running on the homelab. Deployed via Coolify watching this repo.

## Running locally

No build step required. Open `index.html` directly in a browser:

```bash
open index.html          # macOS
# or serve it with any static file server, e.g.:
npx serve .
python3 -m http.server 8080
```

Or build and run the Docker image:

```bash
docker build -t game-launcher .
docker run -p 8080:80 game-launcher
# then visit http://localhost:8080
```

## Adding a new game

Edit **`games.js`** — that's the only file you touch. Append one object to the `games` array:

```js
{
  name: "My Game",
  description: "One-line description shown under the title.",
  url: "https://mygame.alfi3.com",
  icon: "🎮",            // emoji (or short text)
  accentColor: "#ff4499", // CSS color for glow + accent stripe
},
```

Then commit and push:

```bash
git add games.js
git commit -m "add My Game"
git push
```

Coolify picks up the push, rebuilds the Docker image, and redeploys — no manual steps.

## Deploy flow (Coolify)

1. Coolify watches the `main` branch of this repo.
2. On every push, it runs `docker build` using the `Dockerfile`.
3. The built image is deployed; nginx serves the static files on port 80.
4. Coolify handles TLS termination upstream — the container itself only speaks HTTP.

## File structure

```
├── index.html      — shell, loads scripts
├── styles.css      — all styling
├── games.js        — game config (the only file you edit to add games)
├── app.js          — renders tiles from games.js
├── Dockerfile      — nginx:alpine image
├── nginx.conf      — gzip + cache headers
├── .dockerignore
└── .gitignore
```

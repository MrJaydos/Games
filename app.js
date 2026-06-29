const grid = document.getElementById("game-grid");

games.forEach((game) => {
  const a = document.createElement("a");
  a.href = game.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "tile";
  a.style.setProperty("--accent", game.accentColor);

  a.innerHTML = `
    <span class="tile-icon" aria-hidden="true">${game.icon}</span>
    <span class="tile-name">${game.name}</span>
    <span class="tile-desc">${game.description}</span>
    <span class="tile-arrow" aria-hidden="true">↗</span>
  `;

  grid.appendChild(a);
});

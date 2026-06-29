const grid = document.getElementById("game-grid");

games.forEach((game) => {
  const a = document.createElement("a");
  a.href = game.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "tile";
  a.style.setProperty("--accent", game.accentColor);

  const thumb = game.thumbnail
    ? `<div class="tile-thumb"><img src="${game.thumbnail}" alt="" aria-hidden="true" loading="lazy" /></div>`
    : '';

  const icon = game.thumbnail
    ? ''
    : `<span class="tile-icon" aria-hidden="true">${game.icon}</span>`;

  a.innerHTML = `
    ${thumb}
    <div class="tile-body">
      ${icon}
      <span class="tile-name">${game.name}</span>
      <span class="tile-desc">${game.description}</span>
      <span class="tile-arrow" aria-hidden="true">↗</span>
    </div>
  `;

  grid.appendChild(a);
});

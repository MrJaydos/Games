const grid = document.getElementById("game-grid");

games.forEach((game, i) => {
  const a = document.createElement("a");
  a.style.setProperty("--accent", game.accentColor);
  a.style.setProperty("--i", i);

  if (game.comingSoon) {
    a.className = "tile tile--coming-soon";
    a.setAttribute("aria-disabled", "true");
    a.setAttribute("aria-label", `${game.name} — coming soon`);
  } else {
    a.href = game.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "tile";
  }

  const thumb = game.thumbnail
    ? `<div class="tile-thumb"><img src="${game.thumbnail}" alt="" aria-hidden="true" loading="lazy" /></div>`
    : '';

  const icon = game.thumbnail
    ? ''
    : `<span class="tile-icon" aria-hidden="true">${game.icon}</span>`;

  const badge = game.comingSoon
    ? '<span class="tile-badge">Coming soon</span>'
    : '';

  const arrow = game.comingSoon
    ? ''
    : '<span class="tile-arrow" aria-hidden="true">↗</span>';

  a.innerHTML = `
    ${thumb}
    <div class="tile-body">
      ${icon}
      <div class="tile-header">
        <span class="tile-name">${game.name}</span>
        ${badge}
      </div>
      <span class="tile-desc">${game.description}</span>
      ${arrow}
    </div>
  `;

  if (game.thumbnail) {
    a.querySelector('img').addEventListener('error', () => {
      a.querySelector('.tile-thumb').remove();
      const iconSpan = document.createElement('span');
      iconSpan.className = 'tile-icon';
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = game.icon;
      a.querySelector('.tile-body').prepend(iconSpan);
    });
  }

  grid.appendChild(a);
});

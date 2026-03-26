// Shared utilities: navbar, footer, theme toggle, active link highlighting

// ── Theme ──────────────────────────────────────────────────────────────────
const THEME_KEY = 'theme';

function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀ light' : '◑ dark';
}

function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

// Apply immediately (before DOM paint) to avoid flash
applyTheme(getTheme());

// ── Navbar ─────────────────────────────────────────────────────────────────
function getBaseName() {
  const path = window.location.pathname;
  return path.split('/').pop() || 'index.html';
}

function renderNav() {
  const current = getBaseName();
  const links = [
    { href: 'index.html', label: '~/home' },
    { href: 'about.html', label: '~/about' },
    { href: 'projects.html', label: '~/projects' },
    { href: 'skills.html', label: '~/skills' }
  ];

  const nav = document.getElementById('navbar');
  if (!nav) return;

  const currentTheme = getTheme();

  nav.innerHTML = `
    <a class="nav-logo" href="index.html">
      <span>&lt;</span>ka /<span>&gt;</span>
    </a>
    <div style="display:flex;align-items:center;gap:0.5rem;">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
        ${currentTheme === 'dark' ? '☀ light' : '◑ dark'}
      </button>
      <button class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <ul class="nav-links" id="nav-links">
      ${links.map(l => `
        <li>
          <a href="${l.href}" class="${current === l.href ? 'active' : ''}">
            ${l.label}
          </a>
        </li>
      `).join('')}
    </ul>
  `;

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });
}

// ── Footer ─────────────────────────────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  const { github, linkedin } = portfolioData.personal;
  footer.innerHTML = `
    <span class="footer-text">Made with 💖 Karthikeshwar Ananthapur</span>
    <div class="footer-links">
      <a href="${github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${linkedin}" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});

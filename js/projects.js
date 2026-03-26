// Renders project cards for projects.html

function buildCard(project) {
  return `
    <article class="project-card">
      <div class="project-card-header">
        <div class="project-icon">⌘</div>
        <h3 class="project-title">${project.title}</h3>
      </div>
      <p class="project-desc">${project.description}</p>
      <div class="tech-stack">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="card-actions">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-outline">
          ↗ GitHub
        </a>
        <a href="project-detail.html?id=${project.id}" class="btn btn-primary">
          Details →
        </a>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const projects = portfolioData.projects;
  grid.innerHTML = projects.map(buildCard).join('');
});

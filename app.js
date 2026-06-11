// Рендер хронологии. Функции чистые и тестируемые: данные приходят аргументом.
// Бутстрап (вызов рендера на реальных данных) живёт в index.html.

function sortByYear(milestones) {
  return [...milestones].sort((a, b) => a.year - b.year);
}

function createCard(milestone) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.tag = milestone.tag;
  card.dataset.year = String(milestone.year);

  const year = document.createElement('div');
  year.className = 'card__year';
  year.textContent = milestone.yearLabel || String(milestone.year);
  card.appendChild(year);

  const tag = document.createElement('span');
  tag.className = 'card__tag';
  tag.textContent = milestone.tag;
  card.appendChild(tag);

  const title = document.createElement('h2');
  title.className = 'card__title';
  title.textContent = milestone.title;
  card.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'card__desc';
  desc.textContent = milestone.description;
  card.appendChild(desc);

  return card;
}

function renderTimeline(milestones, container) {
  if (!container) {
    return container;
  }
  container.textContent = '';
  for (const milestone of sortByYear(milestones)) {
    container.appendChild(createCard(milestone));
  }
  return container;
}

function renderFilters(paradigms, container, onFilter) {
  if (!container) return;
  container.textContent = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'Все';
  const buttons = [allBtn];

  allBtn.onclick = () => {
    buttons.forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    onFilter(null);
  };
  container.appendChild(allBtn);

  paradigms.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = p;
    btn.onclick = () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onFilter(p);
    };
    container.appendChild(btn);
    buttons.push(btn);
  });
}

function initCursor() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    if (!spotlight.classList.contains('visible')) {
      spotlight.classList.add('visible');
    }
  });
}

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const textNode = themeToggle.querySelector('.theme-toggle__text');
  const savedTheme = localStorage.getItem('theme');

  const updateUI = (isLight) => {
    document.documentElement.classList.toggle('light-theme', isLight);
    if (textNode) {
      textNode.textContent = isLight ? 'Темная тема' : 'Светлая тема';
    }
  };

  if (savedTheme === 'light') {
    updateUI(true);
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateUI(isLight);
  });
}

// Инициализация темы при загрузке (если мы в браузере)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursor();
  });
}

// Node/тесты (CommonJS): отдаём функции наружу. В браузере они остаются глобальными.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortByYear, createCard, renderTimeline, renderFilters };
}

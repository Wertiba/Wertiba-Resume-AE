const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const resume = ref(RESUME_DATA);

    onMounted(() => {
      // IntersectionObserver для запуска глитч-эффекта при появлении в области видимости
      const observerOptions = {
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('glitch');
            // Убираем эффект через секунду, чтобы не отвлекал постоянно
            setTimeout(() => {
              entry.target.classList.remove('glitch');
            }, 1000);
          }
        });
      }, observerOptions);

      // Находим все элементы для глитча
      const glitchElements = document.querySelectorAll('.glitch-trigger');
      glitchElements.forEach(el => observer.observe(el));

      // Дополнительно запускаем глитч при резком скролле
      let lastScrollTop = 0;
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(st - lastScrollTop) > 50) { // Если скролл достаточно быстрый
          const randomEl = glitchElements[Math.floor(Math.random() * glitchElements.length)];
          if (randomEl && !randomEl.classList.contains('glitch')) {
            randomEl.classList.add('glitch');
            setTimeout(() => randomEl.classList.remove('glitch'), 500);
          }
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }, { passive: true });
    });

    return {
      resume
    };
  }
});

// Монтируем приложение
app.mount('#app');

// Вспомогательные функции для обратной совместимости
function sortByYear(milestones) {
  return [...milestones].sort((a, b) => a.year - b.year);
}

function renderTimeline(milestones, container) {
  if (!container) return container;
  container.textContent = 'Vue 3 is handling the render with scroll effects.';
  return container;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortByYear, renderTimeline };
}

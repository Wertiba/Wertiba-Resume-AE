const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const resume = ref(RESUME_DATA);
    const selectedItem = ref(null);

    const openModal = (item) => {
      selectedItem.value = item;
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      selectedItem.value = null;
      document.body.style.overflow = '';
    };

    return {
      resume,
      selectedItem,
      openModal,
      closeModal
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
  container.textContent = 'Vue 3 is handling the render.';
  return container;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortByYear, renderTimeline };
}

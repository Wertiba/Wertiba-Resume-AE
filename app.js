const { createApp, ref, onMounted, onUnmounted } = Vue;

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

    const handleKeydown = (e) => {
      if (e.key === 'Escape' && selectedItem.value) {
        closeModal();
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown);
    });

    return {
      resume,
      selectedItem,
      openModal,
      closeModal
    };
  }
});

// Mount the application
app.mount('#app');

// Helper functions for backward compatibility
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

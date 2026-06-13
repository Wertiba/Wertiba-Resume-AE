const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const resume = ref(RESUME_DATA);

    return {
      resume
    };
  }
});

app.mount('#app');

function sortByYear(milestones) {
  return [...milestones].sort((a, b) => a.year - b.year);
}

function renderTimeline(milestones, container) {
  if (!container) return container;
  container.textContent = 'Vue 3 is handling the render now.';
  return container;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortByYear, renderTimeline };
}

import { describe, it, expect } from 'vitest';
import { RESUME_DATA } from '../data.js';

describe('Resume Data', () => {
  it('should have the correct structure', () => {
    expect(RESUME_DATA).toHaveProperty('name');
    expect(RESUME_DATA).toHaveProperty('title');
    expect(RESUME_DATA).toHaveProperty('links');
    expect(RESUME_DATA).toHaveProperty('achievements');
    expect(RESUME_DATA).toHaveProperty('projects');
  });

  it('should have at least one project and achievement', () => {
    expect(RESUME_DATA.projects.length).toBeGreaterThan(0);
    expect(RESUME_DATA.achievements.length).toBeGreaterThan(0);
  });
});

describe('Vue Rendering (Indirect check via data)', () => {
  // Since we are using Vue 3 global and no build step,
  // full component testing with Vitest might be complex without proper setup.
  // We can at least check if the data is available for Vue.

  it('data fields should not be empty', () => {
    expect(RESUME_DATA.name.length).toBeGreaterThan(0);
    expect(RESUME_DATA.bio.length).toBeGreaterThan(0);
  });
});

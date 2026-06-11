import { describe, it, expect, beforeEach } from 'vitest';
import { MILESTONES, PARADIGMS } from '../data.js';
import { sortByYear, renderTimeline, renderFilters } from '../app.js';

describe('данные хронологии (data.js)', () => {
  it('это непустой массив вех', () => {
    expect(Array.isArray(MILESTONES)).toBe(true);
    expect(MILESTONES.length).toBeGreaterThan(0);
  });

  it('у каждой вехи есть год, заголовок, описание и тег', () => {
    for (const milestone of MILESTONES) {
      expect(typeof milestone.year, `год вехи "${milestone.title}"`).toBe('number');
      expect(Number.isFinite(milestone.year)).toBe(true);
      expect(milestone.title.trim().length).toBeGreaterThan(0);
      expect(milestone.description.trim().length).toBeGreaterThan(0);
      expect(milestone.tag.trim().length).toBeGreaterThan(0);
    }
  });

  it('тег каждой вехи входит в список парадигм', () => {
    for (const milestone of MILESTONES) {
      expect(PARADIGMS, `тег вехи "${milestone.title}"`).toContain(milestone.tag);
    }
  });
});

describe('сортировка (sortByYear)', () => {
  it('возвращает вехи по возрастанию года', () => {
    const years = sortByYear(MILESTONES).map((m) => m.year);
    const expected = [...years].sort((a, b) => a - b);
    expect(years).toEqual(expected);
  });

  it('не мутирует исходный массив', () => {
    const before = MILESTONES.slice();
    sortByYear(MILESTONES);
    expect(MILESTONES).toEqual(before);
  });
});

describe('рендер (renderTimeline)', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('создаёт по одной карточке на каждую веху', () => {
    renderTimeline(MILESTONES, container);
    expect(container.querySelectorAll('.card').length).toBe(MILESTONES.length);
  });

  it('размещает карточки по возрастанию года', () => {
    renderTimeline(MILESTONES, container);
    const years = [...container.querySelectorAll('.card')].map((el) =>
      Number(el.dataset.year),
    );
    const expected = [...years].sort((a, b) => a - b);
    expect(years).toEqual(expected);
  });

  it('заполняет заголовок, описание и тег карточки', () => {
    renderTimeline(MILESTONES, container);
    const card = container.querySelector('.card');
    expect(card.querySelector('.card__title').textContent.length).toBeGreaterThan(0);
    expect(card.querySelector('.card__desc').textContent.length).toBeGreaterThan(0);
    expect(card.querySelector('.card__tag').textContent.length).toBeGreaterThan(0);
  });

  it('очищает контейнер перед повторным рендером', () => {
    renderTimeline(MILESTONES, container);
    renderTimeline(MILESTONES, container);
    expect(container.querySelectorAll('.card').length).toBe(MILESTONES.length);
  });
});

describe('фильтры (renderFilters)', () => {
  let container;
  const mockParadigms = ['P1', 'P2'];

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('создаёт кнопку "Все" и по кнопке на каждую парадигму', () => {
    renderFilters(mockParadigms, container, () => {});
    const buttons = container.querySelectorAll('.filter-btn');
    expect(buttons.length).toBe(mockParadigms.length + 1);
    expect(buttons[0].textContent).toBe('Все');
  });

  it('вызывает onFilter(null) при клике на "Все"', () => {
    let selected = 'initial';
    renderFilters(mockParadigms, container, (p) => { selected = p; });
    container.querySelectorAll('.filter-btn')[0].click();
    expect(selected).toBe(null);
  });

  it('вызывает onFilter(paradigm) при клике на кнопку парадигмы', () => {
    let selected = null;
    renderFilters(mockParadigms, container, (p) => { selected = p; });
    container.querySelectorAll('.filter-btn')[1].click();
    expect(selected).toBe('P1');
  });

  it('переключает класс active', () => {
    renderFilters(mockParadigms, container, () => {});
    const buttons = container.querySelectorAll('.filter-btn');

    expect(buttons[0].classList.contains('active')).toBe(true);

    buttons[1].click();
    expect(buttons[0].classList.contains('active')).toBe(false);
    expect(buttons[1].classList.contains('active')).toBe(true);
  });
});

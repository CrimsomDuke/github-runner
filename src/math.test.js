import { describe, it, expect } from 'vitest';
import { sum } from './math';

describe('sum function', () => {
  it('adds two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds negative numbers correctly', () => {
    expect(sum(-1, -5)).toBe(-6);
  });

  it('handles zero properly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(0, 0)).toBe(0);
  });

  it('adds floating-point numbers accurately', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

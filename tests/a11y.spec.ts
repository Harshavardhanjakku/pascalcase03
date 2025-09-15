import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home has no critical accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  const critical = results.violations.filter(v => v.impact === 'critical');
  expect(critical).toEqual([]);
});



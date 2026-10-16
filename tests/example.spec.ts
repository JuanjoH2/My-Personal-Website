import { test, expect } from "@playwright/test";

test("Homepage visual layout remains unchanged", async ({ page }) => {
  // Replace with your actual local dev URL or built app URL
  await page.goto("http://localhost:4321");

  await page.waitForLoadState("networkidle");

  // This takes a screenshot and compares it to the baseline
  await expect(page).toHaveScreenshot("homepage-layout.png", {
    maxDiffPixels: 100,
    timeout: 15000,
  });
});

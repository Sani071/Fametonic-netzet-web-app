// e2e/home.spec.ts
import { test, expect } from "@playwright/test";

test("homepage renders key content", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(/Turn Social Media Into a Profitable Career/i)
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Get Started/i })
  ).toBeVisible();
});

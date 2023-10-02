import { test } from '@playwright/test'

test.describe('Landing Page Health Check', () => {
  test('should navigate to Privacy Policy and Terms of Use pages', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Navigate to Privacy Policy and verify
    await page.getByRole('link', { name: 'Privacy Policy' }).click()
    await page.waitForSelector('text=Retroloop Privacy Policy')

    // Go back to the homepage and navigate to Terms of Use
    await page.goBack()
    await page.getByRole('link', { name: 'Terms of Use' }).click()
    await page.waitForSelector('text=Retroloop Terms of Service')
  })

  test('should verify main navigation links and buttons', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    // Verify main navigation links
    page.locator('nav').filter({ hasText: 'Dashboard' }).getByRole('link').first()
    page.locator('nav').filter({ hasText: 'Profile' }).getByRole('link').first()
    page.locator('nav').filter({ hasText: 'Login' }).getByRole('link').first()

    // Verify page buttons
    page.locator('button').filter({ hasText: 'Get Started' }).first()
    page.locator('button').filter({ hasText: 'Login' }).first()
    page.locator('button').filter({ hasText: 'Github' }).first()
  })
})

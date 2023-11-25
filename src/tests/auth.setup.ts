import { expect, test as setup } from '@playwright/test'
import * as dotenv from 'dotenv'

dotenv.config()

const authFile = 'playwright/.auth/user.json'
const username = process.env.GOOGLE_E2E_USERNAME
const password = process.env.GOOGLE_E2E_PASSWORD

if (typeof username === 'undefined' || typeof password === 'undefined') {
  throw new Error('Environment variables GOOGLE_E2E_USERNAME or GOOGLE_E2E_PASSWORD are not set.')
}

setup('authenticate', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page.getByRole('button', { name: 'Sign in with Google' })).toBeVisible()
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Sign in with Google' }).click()

  await page.getByLabel('Email or phone').fill(username)
  await page.getByRole('button', { name: 'Next' }).click()
  await page.waitForTimeout(2000)

  await page.getByLabel('Enter your password').fill(password)
  await page.getByRole('button', { name: 'Next' }).click()
  await page.waitForTimeout(2000)

  await page.waitForURL('/dashboard')
  await expect(page.getByRole('button', { name: 'Start retro' })).toBeVisible()

  await page.context().storageState({ path: authFile })
})

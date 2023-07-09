import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import { afterEach, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'

import { ThemeDropdown } from '@/app/components/menu-bar/components/theme-dropdown/theme-dropdown'

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}))

test('ThemeDropdown', () => {
  describe('ThemeDropdown', () => {
    let useThemeMock

    let ThemeDropdownMounted: RenderResult

    beforeEach(() => {
      ThemeDropdownMounted = render(<ThemeDropdown />)
    })

    afterEach(() => {
      ThemeDropdownMounted.unmount()
    })

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useThemeMock = vi.spyOn(require('next-themes'), 'useTheme')

      useThemeMock.mockImplementation(() => ({
        theme: 'light',
        resolvedTheme: 'light',
      }))

      render(<ThemeDropdown />)
    })

    test('renders dropdown menu', () => {
      const triggerElement = screen.getByRole('button', { name: '' })
      expect(triggerElement).toBeDefined()

      const portalElement = screen.getByRole('region', { name: 'RadixDropdownMenuPortal' })
      expect(portalElement).toBeDefined()
    })

    test('renders menu items with proper styling', () => {
      const lightItem = screen.getByRole('button', { name: 'Light' })
      expect(lightItem).toBeDefined()
      expect(lightItem).toContain('font-bold')

      const darkItem = screen.getByRole('button', { name: 'Dark' })
      expect(darkItem).toBeDefined()
      expect(darkItem).not.toContain('font-bold')

      const systemItem = screen.getByRole('button', { name: 'System' })
      expect(systemItem).toBeDefined()
      expect(systemItem).not.toContain('font-bold')
    })

    test('calls setTheme function when menu item is clicked', () => {
      const lightItem = screen.getByRole('button', { name: 'Light' })
      expect(lightItem).toBeDefined()

      fireEvent.click(lightItem)

      const darkItem = screen.getByRole('button', { name: 'Dark' })
      expect(darkItem).toBeDefined()

      fireEvent.click(darkItem)

      const systemItem = screen.getByRole('button', { name: 'System' })
      expect(systemItem).toBeDefined()

      fireEvent.click(systemItem)
    })
  })
})

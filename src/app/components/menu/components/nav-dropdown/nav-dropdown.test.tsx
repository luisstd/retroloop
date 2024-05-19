import { render, RenderResult, screen } from '@testing-library/react'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'

import { NavigationDropdown } from '@/app/components/menu/components/nav-dropdown/nav-dropdown'

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}))

test('NavigationDropdown', () => {
  describe('NavigationDropdown', () => {
    let NavDropdownMounted: RenderResult

    beforeEach(() => {
      NavDropdownMounted = render(<NavigationDropdown />)
    })

    afterEach(() => {
      NavDropdownMounted.unmount()
    })

    let useRouterMock

    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      useRouterMock = vi.spyOn(require('next/router'), 'useRouter')
      useRouterMock.mockImplementation(() => ({
        pathname: '/dashboard',
      }))

      render(<NavigationDropdown />)
    })

    test('renders dropdown menu', () => {
      const triggerElement = screen.getByRole('button', { name: '' })
      expect(triggerElement).toBeDefined()

      const portalElement = screen.getByRole('region', {
        name: 'RadixDropdownMenuPortal',
      })
      expect(portalElement).toBeDefined()
    })

    test('renders menu items with proper styling', () => {
      const dashboardItem = screen.getByRole('menuitem', { name: 'Dashboard' })
      expect(dashboardItem).toBeDefined()
      expect(dashboardItem).toContain('font-bold')

      const profileItem = screen.getByRole('menuitem', { name: 'Profile' })
      expect(profileItem).toBeDefined()
      expect(profileItem).not.toContain('font-bold')
    })

    test('renders menu item links', () => {
      const dashboardLink = screen.getByRole('link', { name: 'Dashboard' })
      expect(dashboardLink).toBeDefined()

      const profileLink = screen.getByRole('link', { name: 'Profile' })
      expect(profileLink).toBeDefined()
    })

    test('renders menu item icons', () => {
      const squareIcon = screen.getByTestId('icon-square')
      expect(squareIcon).toBeDefined()

      const dotsCircleHorizontalIcon = screen.getByTestId(
        'icon-dots-circle-horizontal',
      )
      expect(dotsCircleHorizontalIcon).toBeDefined()
    })
  })
})

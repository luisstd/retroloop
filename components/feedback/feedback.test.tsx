import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Feedback } from './feedback'

test('renders feedback button', () => {
  const mockEmail = 'test@example.com'

  render(<Feedback userEmail={mockEmail} />)

  const feedbackButton = screen.getByRole('button', { name: /Send feedback/i })

  expect(feedbackButton).toBeDefined()
})

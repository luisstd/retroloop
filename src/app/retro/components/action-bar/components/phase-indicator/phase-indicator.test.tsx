import { Retrospective } from '@prisma/client'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import { PhaseIndicator } from '@/app/retro/components/action-bar/components/phase-indicator/phase-indicator'

test('PhaseIndicator', () => {
  const handleUpdateRetroMock = vi.fn()

  const retrospective: Retrospective = {
    id: '1',
    phase: 'WRITING',
    name: 'Test Retro',
    createdAt: new Date(),
    date: new Date(),
    timerExpiration: new Date(),
  }

  test('renders phase indicators with active and clickable first phase', () => {
    render(
      <PhaseIndicator retrospective={retrospective} handleUpdateRetro={handleUpdateRetroMock} />
    )

    const writePhaseIndicator = screen.getByText('01) Write')
    expect(writePhaseIndicator).toBeDefined()
    expect(writePhaseIndicator).toContain('text-lg')
    expect(writePhaseIndicator).not.toContain('text-gray-500')

    fireEvent.click(writePhaseIndicator)
    expect(handleUpdateRetroMock).toHaveBeenCalledWith({
      ...retrospective,
      phase: 'WRITING',
    })
  })

  test('renders phase indicators with inactive and clickable second phase', () => {
    retrospective.phase = 'VOTING'

    render(
      <PhaseIndicator retrospective={retrospective} handleUpdateRetro={handleUpdateRetroMock} />
    )

    const votePhaseIndicator = screen.getByText('02) Vote')
    expect(votePhaseIndicator).toBeDefined()
    expect(votePhaseIndicator).toContain('text-lg')
    expect(votePhaseIndicator).toContain('text-gray-500')

    fireEvent.click(votePhaseIndicator)
    expect(handleUpdateRetroMock).toHaveBeenCalledWith({
      ...retrospective,
      phase: 'VOTING',
    })
  })

  test('renders phase indicators with inactive third phase', () => {
    retrospective.phase = 'DISCUSSING'

    render(
      <PhaseIndicator retrospective={retrospective} handleUpdateRetro={handleUpdateRetroMock} />
    )

    const discussPhaseIndicator = screen.getByText('03) Discuss')
    expect(discussPhaseIndicator).toBeDefined()
    expect(discussPhaseIndicator).toContain('text-lg')
    expect(discussPhaseIndicator).toContain('text-gray-500')
  })
})

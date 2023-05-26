import { useCallback } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

export function usePageHeader() {
  const isCharacterPage = useMatch('/character/:id')
  const navigate = useNavigate()
  const goBack = useCallback(() => navigate('/'), [navigate])

  return {
    isCharacterPage,
    goBack,
  }
}

import { useContext } from 'react'
import { CharacterModuleContext } from './interface/character-module-context'

export function useCharacterModuleContext() {
  const context = useContext(CharacterModuleContext)

  if (context === undefined || context === null) {
    throw new Error('useCharacterModuleContext must be used within CharacterModuleContextProvider')
  }
  return context
}

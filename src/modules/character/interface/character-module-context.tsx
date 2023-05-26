import { createContext } from 'react'
import { useCharacterModule } from './use-character-module'

type ContextArgs = ReturnType<typeof useCharacterModule>

// let's believe that our context alway exist 
// else we get error from src/module/character/use-character-module-context.tsx
// throw new Error('useTestContext must be used within CharacterModuleContextProvider')
// also it is easiest way for typing our context
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const CharacterModuleContext = createContext<ContextArgs>(null!)

export function CharacterModuleContextProvider({ children }: { children: React.ReactNode }) {
  const value = useCharacterModule()

  return (
    <CharacterModuleContext.Provider value={value}>
      {children}
    </CharacterModuleContext.Provider>
  )
}

import { createContext } from 'react'
import { usePeopleModule } from './use-people-module'

type ContextArgs = ReturnType<typeof usePeopleModule>

// let's believe that our context alway exist 
// else we get error from src/module/people/use-people-module-context.tsx
// throw new Error('useTestContext must be used within PeopleModuleContextProvider')
// also it is easiest way for typing our context
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const PeopelModuleContext = createContext<ContextArgs>(null!)

export function PeopleModuleContextProvider({ children }: { children: React.ReactNode }) {
  const value = usePeopleModule()

  return (
    <PeopelModuleContext.Provider value={value}>
      {children}
    </PeopelModuleContext.Provider>
  )
}

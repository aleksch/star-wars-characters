import { useContext } from 'react'
import { PeopelModuleContext } from './interface/people-module-context'

export function usePeopleModuleContext() {
  const context = useContext(PeopelModuleContext)

  if (context === undefined || context === null) {
    throw new Error('usePeopleModuleContext must be used within PeopleModuleContextProvider')
  }
  return context
}

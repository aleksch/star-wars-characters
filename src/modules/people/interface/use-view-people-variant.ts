import { useState } from 'react'

export enum ViewVariant {
  CardsView = 'cards-view',
  TableView = 'table-view'
}

export function useViewPeopleVariant() {
  const [viewVariant, setViewVariant] = useState<ViewVariant>(ViewVariant.CardsView)

  return {
    viewVariant,
    setViewVariant,
  }
}

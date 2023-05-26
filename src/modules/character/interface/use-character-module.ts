import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterValueObject } from '../../infra/value-objects'
import { CharacterAdapter } from '../character.adapter'

const characterAdapter = new CharacterAdapter()

export function useCharacterModule() {
  const { characterId } = useParams<{characterId: string}>()

  const [character, setCharacter] = useState<Partial<CharacterValueObject>>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const loadCharacterData = useCallback(async () => {
    setIsLoading(true)
    const characterData = await characterAdapter.getCharacter(Number(characterId))
    setCharacter(characterData)
    setIsLoading(false)
  }, [characterId])

  useEffect(() => {
    loadCharacterData()
  }, [loadCharacterData])

  const onChangeCharacterField = useCallback((fieldName: keyof CharacterValueObject, fieldValue: string) => {
    setCharacter(prevState => {
      const isNewData = prevState[fieldName] !== fieldValue
      const newCharacterData = {
        ...prevState,
        [fieldName]: fieldValue,
      }
      if (isNewData) {
        newCharacterData.isChangedByUser = isNewData
      }
      if (newCharacterData && prevState.characterId && isNewData) {
        characterAdapter.saveCharacterById(prevState.characterId, newCharacterData as CharacterValueObject)
      }
      return newCharacterData
    })
  }, [])

  const handleResetUserInfo = useCallback(async(characterId: number) => {
    characterAdapter.removeSavedDataByCharacterId(characterId)
    loadCharacterData()
  }, [loadCharacterData])

  return {
    character,
    isLoading,
    onChangeCharacterField,
    handleResetUserInfo,
  }
}

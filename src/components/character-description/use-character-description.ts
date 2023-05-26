import { useCharacterModuleContext } from '../../modules'
import { CharacterValueObject } from '../../modules/infra/value-objects'

export function useCharacterDescription() {
  const {
    character,
    isLoading,
    onChangeCharacterField,
    handleResetUserInfo,
  } = useCharacterModuleContext()

  const onChangeField = (fieldName: keyof CharacterValueObject) =>
    (value: string) => onChangeCharacterField(fieldName, value)

  const onReset = () => {
    if (character.characterId) handleResetUserInfo(character.characterId)
  } 

  return {
    character,
    onChangeField,
    isLoading,
    onReset,
  }
}
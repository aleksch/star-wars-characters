import { Card, Tooltip } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { CharacterValueObject } from '../../modules/infra/value-objects'

type Props = CharacterValueObject

export function PeopleCard({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  gender,
  isChangedByUser
}: Props) {
  const cardExtra = (isChangedByUser ? (
    <Tooltip title="This data edited by user">
      <SaveOutlined spin />
    </Tooltip>
  ) : null)

  return (
    <Card size='small' title={name} hoverable extra={cardExtra}>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair color: {hairColor}</p>
      <p>Skin color: {skinColor}</p>
      <p>Eye color: {eyeColor}</p>
      <p>Birth year: {birthYear}</p>
      <p>Gender: {gender}</p>
    </Card>
  )
}

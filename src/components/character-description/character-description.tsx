import { Descriptions, Spin, Typography } from 'antd'
import { useCharacterDescription } from './use-character-description'
import { DescriptionExtra } from './description-extra'

const { Paragraph } = Typography

export function CharacterDescription() {
  const { character, isLoading, onChangeField, onReset } = useCharacterDescription()

  return (
    <Spin spinning={isLoading}>
      <DescriptionExtra isUpdatedByUser={character.isChangedByUser} onReset={onReset} />
      <Descriptions
        bordered
        column={1}
        layout='vertical'
        size='small'
        className='character-description'
      >
        <Descriptions.Item label="Name">
          <Paragraph style={{ paddingTop: '1em', alignItems: 'center' }} editable={{ onChange: onChangeField('name') }}>{character.name}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Height">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('height') }}>{character.height}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Mass">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('mass') }}>{character.mass}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Hair color">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('hairColor') }}>{character.hairColor}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Eye color">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('eyeColor') }}>{character.eyeColor}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Birth year">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('birthYear') }}>{character.birthYear}</Paragraph>
        </Descriptions.Item>

        <Descriptions.Item label="Gender">
          <Paragraph style={{ paddingTop: '1em' }} editable={{ onChange: onChangeField('gender') }}>{character.gender}</Paragraph>
        </Descriptions.Item>
    </Descriptions>
    </Spin>
  )
}

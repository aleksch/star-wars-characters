import { Button, Divider, Space } from 'antd'

type Props = {
  isUpdatedByUser?: boolean
  onReset: () => void
}

export function DescriptionExtra({ isUpdatedByUser, onReset }: Props) {
  const text = isUpdatedByUser ? 'Character information updated by user' : 'Character information'

  return (
    <Divider orientation='left' style={{ lineHeight: '3em' }}>
      <Space>
        {text}
        {isUpdatedByUser && <Button onClick={onReset} danger>Reset</Button>}
      </Space>
    </Divider>
  )
}

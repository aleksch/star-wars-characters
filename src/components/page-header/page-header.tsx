import { Button, Col, Row, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'
import { usePageHeader } from './use-page-header'

const headerStyle: React.CSSProperties = {
  backgroundColor: '#7dbcea',
}

const headerTextStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: '64px'
}

export function PageHeader() {
  const { isCharacterPage, goBack } = usePageHeader()

  return (
    <Header style={headerStyle}>
      <Row>
        <Col span={2} offset={1}>
          {isCharacterPage && (
            <Button shape="circle" size="large" onClick={goBack}>
              <LeftOutlined />
            </Button>
          )}
        </Col>
        <Col style={{ textAlign: 'center' }} flex="auto">
          <Typography.Title level={1} style={headerTextStyle}>
            Star Wars
          </Typography.Title>
        </Col>
        <Col span={3} />
      </Row>
    </Header>
  )
}

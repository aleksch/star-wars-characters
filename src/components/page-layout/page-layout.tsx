import { Col, ColProps, Layout, Row } from 'antd'
import { PropsWithChildren } from 'react'
import { PageHeader } from '..'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  color: '#000',
  margin: '1em 0',
}

const colConfig: ColProps = {
  span: 20,
  offset: 2,
  md: { span: 20, offset: 2 },
  sm: { span: 22, offset: 1 },
  xs: { span: 22, offset: 1 }
}

type Props = PropsWithChildren

export function PageLayout({ children }: Props) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <PageHeader />
        <Content style={contentStyle}>
          <Row>
            <Col {...colConfig}>
              {children}
            </Col>
          </Row>
        </Content>
    </Layout>
  )
}

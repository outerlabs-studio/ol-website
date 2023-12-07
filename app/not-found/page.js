import { Layout } from 'layouts/default'
import { Container } from 'styles'
import { ContentWrapper, MainText, PageWrapper } from './components'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFoundPage() {
  return (
    <Layout>
      <PageWrapper>
        <Container>
          <ContentWrapper>
            <MainText>404</MainText>
          </ContentWrapper>
          <h2>Page Not Found</h2>
        </Container>
      </PageWrapper>
    </Layout>
  )
}

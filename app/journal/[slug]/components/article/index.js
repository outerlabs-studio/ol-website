import Markdown from 'markdown-to-jsx'
import { HugeText, MediumText, NormalText } from 'styles'
import { ArticleTextWrapper } from './styles'

const h1Tag = ({ children }) => <HugeText $m={`3vw 0 0 0`}>{children}</HugeText>
const h2Tag = ({ children }) => <MediumText>{children}</MediumText>
const pTag = ({ children }) => <NormalText>{children}</NormalText>
const liTag = ({ children }) => (
  <li>
    <NormalText>{children}</NormalText>
  </li>
)

const Article = ({ data }) => {
  return (
    <ArticleTextWrapper>
      {data?.article?.map((block, index) => {
        if (block.__component === 'blog.text') {
          return (
            <Markdown
              key={index}
              options={{
                overrides: {
                  h1: {
                    component: h1Tag,
                  },
                  h2: {
                    component: h2Tag,
                  },
                  p: {
                    component: pTag,
                  },
                  li: {
                    component: liTag,
                  },
                },
              }}
            >
              {block.text}
            </Markdown>
          )
        }
      })}
    </ArticleTextWrapper>
  )
}

export default Article

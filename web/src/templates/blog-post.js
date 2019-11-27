import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { toPlainText } from '../lib/helpers'
// lesson: sanityLesson: {eq: $id}) {
//   id
//   createdAt: _createdAt
//   title
//   header {
//     title
//     level
//     duration
//     knowledge
//     compatibility
//   }
//   _rawOverview
//   objectives {
//     title
//     description
//   }
//   keyVocabulary {
//     title
//     description
//   }
//   resourcesEquipment {
//     title
//     description
//   }
//   readings {
//     title
//     description
//   }
//   planActivities {
//     title
//     description
//   }
//   challenges {
//     title
//     description
//   }
// }
export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    lesson: sanityLesson(id: { eq: $id }) {
      title
      id
      createdAt: _createdAt
      title
      header {
        title
        level
        duration
        knowledge
        compatibility
      }
      _rawOverview
      objectives {
        _id
        title
        description
      }
      keyVocabulary {
        _id
        title
        description
      }
      resourcesEquipment {
        _id
        title
        description
      }
      readings {
        _id
        title
        description
      }
      planActivities {
        _id
        title
        description
      }
      challenges {
        _id
        title
        description
      }
    }
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  console.log('BlogPostTemplate', { data })
  //  const post = data && data.post
  const lesson = data && data.lesson
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {/* {post && (
        <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />
      )} */}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {lesson && <BlogPost {...lesson} />}
    </Layout>
  )
}

export default BlogPostTemplate

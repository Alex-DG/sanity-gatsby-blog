const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { format } = require('date-fns')

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityLesson {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  // const result = await graphql(`
  //   {
  //     allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
  //       edges {
  //         node {
  //           id
  //           publishedAt
  //           slug {
  //             current
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  console.log('!!!!!!!! =>', result)
  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityLesson || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.createdAt))
    .forEach((edge, index) => {
      const { id } = edge.node
      const path = `/lesson/${id}/`

      reporter.info(`Creating lesson page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id },
      })
    })

  // const postEdges = (result.data.allSanityPost || {}).edges || []

  // postEdges
  //   .filter(edge => !isFuture(edge.node.publishedAt))
  //   .forEach((edge, index) => {
  //     const { id, slug = {}, publishedAt } = edge.node
  //     const dateSegment = format(publishedAt, 'YYYY/MM')
  //     const path = `/blog/${dateSegment}/${slug.current}/`

  //     reporter.info(`Creating blog post page: ${path}`)

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/blog-post.js'),
  //       context: { id },
  //     })
  //   })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
}

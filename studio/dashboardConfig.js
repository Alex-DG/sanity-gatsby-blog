export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dde39b2f6d535b153949eca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jwxcerws',
                  apiId: '665faf03-2e46-438b-bcef-52f9f023c503'
                },
                {
                  buildHookId: '5dde39b3d8f625e8b81ad0fe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-15qv2toy',
                  apiId: '1bacf15f-07ca-4619-b81c-9390d9f2f9e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alex-DG/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-15qv2toy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

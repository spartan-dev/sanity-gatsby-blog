export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8fb593c7637a6f2889d33b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-najxnehm',
                  apiId: 'cd754604-77ac-472c-8308-b5eb39009fbc'
                },
                {
                  buildHookId: '5f8fb593a2b9e668cf4bd2e1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jn3osi1u',
                  apiId: 'c35a6092-9f68-48ae-a240-6653bb144799'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spartan-dev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jn3osi1u.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

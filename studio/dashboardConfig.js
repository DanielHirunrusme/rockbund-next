export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '606bc61e0c0fb07eee7e2375',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-682tbghw',
                  apiId: '77ff918e-1788-45ee-867b-b65548d249f2'
                },
                {
                  buildHookId: '606bc61f0c0fb07c807e23ac',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qesiuj6n',
                  apiId: 'e70a9d5a-90bc-4fed-b80d-7fcb30325c9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'Gitee repo',
            value: 'https://gitee.com/lidachao1122/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio.21cloudbox.com/',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

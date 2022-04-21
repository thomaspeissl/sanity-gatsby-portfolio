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
                  buildHookId: '62619b740645b62cf464c5db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jjnm7qv4',
                  apiId: 'fa501b64-d194-40c7-a10d-86fa504cf64a'
                },
                {
                  buildHookId: '62619b75bbe1d927f418239e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vbn9mpmb',
                  apiId: '04e586e6-80b1-45dc-9f00-302a64ad635a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/treffner/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vbn9mpmb.netlify.app',
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

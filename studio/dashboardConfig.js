export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    },
    {name: 'project-users', layout: {height: 'auto'}},
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
                  buildHookId: '6046435fc21ff309e265bd3b',
                  title: 'Sanity Studio',
                  name: 'studio-lakayan-admin',
                  apiId: '8b4542d3-c297-409d-9b45-8eefc524f932'
                },
                {
                  buildHookId: '6046435f5891730f51c18b0a',
                  title: 'Blog Website',
                  name: 'studio-lakayan',
                  apiId: 'e0f440b4-f8e3-4339-a30b-a6daf2b6a854'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elisejakob/studio-lakayan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://studio-lakayan.netlify.app', category: 'apps'}
        ]
      }
    }
  ]
}

export default {
  name: 'general',
  type: 'document',
  title: 'General',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'intro',
      type: 'simplePortableText',
      title: 'Intro',
      description: 'The introduction to Studio Lakayan. The first things visitors see when they visit the front page.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'footertext',
      type: 'simplePortableText',
      title: 'Footer',
      description: 'Text at the bottom of the page.'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    }
  ]
}

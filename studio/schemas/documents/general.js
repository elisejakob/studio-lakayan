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
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    }
  ]
}

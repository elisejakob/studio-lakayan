export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'lead',
      type: 'text',
      title: 'Lead'
    },
    {
      name: 'bio',
      type: 'simplePortableText',
      title: 'Biography'
    }
  ]
}

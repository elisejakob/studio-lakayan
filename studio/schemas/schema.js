// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import general from './documents/general'
import about from './documents/about'
import project from './documents/project'
import category from './documents/category'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import simplePortableText from './objects/simplePortableText'
import mainImage from './objects/mainImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    general,
    project,
    category,
    about,
    mainImage,
    bodyPortableText,
    simplePortableText

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

import lesson from './documents/lessonDocs/lesson'
import challenge from './documents/lessonDocs/challenge'
import objective from './documents/lessonDocs/objective'
import planActivity from './documents/lessonDocs/planActivity'
import reading from './documents/lessonDocs/reading'
import resourceEquipment from './documents/lessonDocs/resourceEquipment'
import vocabulary from './documents/lessonDocs/vocabulary'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

import lessonHeader from './objects/lessonObjects/lessonHeader'
import lessonOverview from './objects/lessonObjects/lessonOverview'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    lesson,
    lessonHeader,
    lessonOverview,
    challenge,
    objective,
    planActivity,
    reading,
    resourceEquipment,
    vocabulary
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})

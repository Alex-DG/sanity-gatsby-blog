export default {
  name: 'lesson',
  type: 'document',
  title: 'Lesson',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Main Title'
    },
    {
      name: 'header',
      type: 'lessonHeader',
      title: 'Header'
    },
    {
      name: 'overview',
      type: 'lessonOverview',
      title: 'Overview',
      description: "Present the lesson's content"
    },
    {
      name: 'objectives',
      type: 'array',
      title: 'Learning Objectives',
      of: [
        {
          type: 'reference',
          to: {
            type: 'objective'
          }
        }
      ]
    },
    {
      name: 'keyVocabulary',
      type: 'array',
      title: 'Key Vocabulary',
      of: [
        {
          type: 'reference',
          to: {
            type: 'vocabulary'
          }
        }
      ]
    },
    {
      name: 'resourcesEquipment',
      type: 'array',
      title: 'Resources & Equipment',
      of: [
        {
          type: 'reference',
          to: {
            type: 'resourceEquipment'
          }
        }
      ]
    },
    {
      name: 'readings',
      type: 'array',
      title: 'Additional Reading',
      of: [
        {
          type: 'reference',
          to: {
            type: 'reading'
          }
        }
      ]
    },
    {
      name: 'planActivities',
      type: 'array',
      title: 'Learning Plan & Activities',
      of: [
        {
          type: 'reference',
          to: {
            type: 'planActivity'
          }
        }
      ]
    },
    {
      name: 'challenges',
      type: 'array',
      title: 'Additional Challenges',
      of: [
        {
          type: 'reference',
          to: {
            type: 'challenge'
          }
        }
      ]
    }
  ]
}

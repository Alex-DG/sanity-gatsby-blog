export default {
  name: 'lessonHeader',
  type: 'object',
  title: 'Header',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'level',
      type: 'string',
      title: 'Education Level',
      validation: Rule => Rule.error('You have to fill out the education level text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Lesson Duration',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'knowledge',
      type: 'string',
      title: 'Prerequisite Knowledge',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'compatibility',
      type: 'string',
      title: 'Device Compatibility',
      options: {
        isHighlighted: true
      }
    }
  ]
}

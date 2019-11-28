export default {
  name: 'tableRow',
  type: 'object',
  title: 'Table Row',
  fields: [
    {
      name: 'cell1',
      type: 'string',
      title: 'Cell 1',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'cell2',
      type: 'array',
      title: 'Cell 2',
      description: 'You can add 1 or more cells by row',
      of: [
        {
          name: 'value',
          type: 'string',
          title: 'Value',
        },
      ],
    },
    {
      name: 'cell3',
      type: 'booleanCell',
      title: 'Cell 3',
    },
  ],
}

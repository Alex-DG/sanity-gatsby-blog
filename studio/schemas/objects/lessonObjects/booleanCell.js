export default {
  name: 'booleanCell',
  type: 'object',
  title: 'Cell 3',
  fields: [
    {
      name: 'booleanCell',
      type: 'boolean',
      title: 'Addresses Benchmark?',
      description: 'Check for fully addresses benchmark or uncheck if partially',
      options: {
        layout: 'checkbox',
        isHighlighted: true,
      },
    },
  ],
}

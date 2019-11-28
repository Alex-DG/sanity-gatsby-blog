export default {
  name: 'benchmarkTable',
  type: 'document',
  title: 'Benchmark Table',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Table's main title",
    },
    {
      name: 'columns',
      type: 'tableColumns',
      title: 'Columns',
      description: "Add column's name",
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Rows',
      description: 'Add rows with data',
      of: [
        {
          type: 'tableRow',
        },
      ],
    },
  ],
}

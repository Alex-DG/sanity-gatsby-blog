import TableInput from '../../../components/TableInput'

export default {
  title: 'Table',
  name: 'customTable',
  type: 'object',
  fields: [
    {
      name: 'rows',
      type: 'rows',
      title: 'Row',
    },
  ],
  inputComponent: TableInput,
}

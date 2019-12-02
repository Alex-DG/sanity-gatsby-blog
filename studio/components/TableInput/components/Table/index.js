import React from 'react'
import PropTypes from 'prop-types'
import styles from './table.css'

const Table = ({ rows, updateCell, addNestedCell, removeNestedCell, removeColumn, removeRow }) => {
  console.log('TABLE YAY!!', { rows })
  if (!rows || !rows.length) return null

  // Button to remove row
  const renderRowRemover = index => (
    <td className={styles.rowDelete}>
      <span onClick={() => removeRow(index)} />
    </td>
  )

  // Button to remove column
  const renderColumnRemover = index => (
    <td key={index} className={styles.colDelete}>
      <span onClick={() => removeColumn(index)} />
    </td>
  )

  const renderColumnRemovers = row => <tr>{row.nestedCells.map((c, i) => renderColumnRemover(i))}</tr>

  const renderRowCell = rowIndex => (nestedCells = [], cellIndex) => (
    <td key={`cell-${cellIndex}`} className={styles.cell}>
      {nestedCells &&
        nestedCells.map((cell, index) => (
          <>
            <input
              key={index + 999}
              className={styles.input}
              type="text"
              value={cell}
              onChange={e => updateCell(e, rowIndex, cellIndex, index)}
            />
          </>
        ))}
      <div>
        <button onClick={e => addNestedCell(e, rowIndex, cellIndex)}>+</button>
        {nestedCells.length > 1 && <button onClick={e => removeNestedCell(e, rowIndex, cellIndex)}>-</button>}
      </div>

      {/* <input className={styles.input} type="text" value={cell} onChange={e => updateCell(e, rowIndex, cellIndex)} />
      <input className={styles.input} type="text" value={cell} onChange={e => updateCell(e, rowIndex, cellIndex)} /> */}
    </td>
  )

  const renderRow = (row, rowIndex) => {
    const renderNestedCell = renderRowCell(rowIndex)
    return (
      <tr key={`row-${rowIndex}`}>
        {row.nestedCells.map(renderNestedCell)}
        {renderRowRemover(rowIndex)}
      </tr>
    )
  }

  return (
    <table className={styles.table}>
      <tbody>
        {rows.map(renderRow)}
        {renderColumnRemovers(rows[0])}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  rows: PropTypes.array,
  updateCell: PropTypes.func,
  removeNestedCell: PropTypes.func,
  addNestedCell: PropTypes.func,
  removeColumn: PropTypes.func,
  removeRow: PropTypes.func,
}

export default Table

import React from 'react';

function dynamicComponent(row, header) {
  const DynamicComp = header.component;
  return (<td key={header.title}>{DynamicComp ? <DynamicComp data={row[header.field]} /> :
    row[header.field]}</td>)
}

const Grid = ({ config, data }) => {

  const objValuesConfig = Object.values(config)
  const renderTableHeaders = header => <th key={header.title}>{header.title}</th>
  const renderTableCells = (row, header) => dynamicComponent(row, header)

  return (<table>
    <thead>
      <tr>
        {objValuesConfig.map(header => renderTableHeaders(header))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => <tr key={i} >
        {objValuesConfig.map(header => renderTableCells(row, header))}
      </tr>)}
    </tbody>
  </table>)
}

export default Grid;
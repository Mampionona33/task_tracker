import React from 'react';

export default function TableRow(props) {
  const typeTrav = props.fiche.typeTrav;
  const numFiche = props.fiche.numFiche;
  //   console.log(fiche);
  return (
    <tr>
      <td className='taskTable-body-data'>{typeTrav}</td>
      <td className='taskTable-body-data'>{numFiche}</td>
    </tr>
  );
}

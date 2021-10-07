import React from 'react';

import db from '../db.json';

const typeTrav = db.fiche.map((TypeTrav) => {
  return TypeTrav.typeTrav;
});

const numFiche = db.fiche.map((Numfiche) => {
  return Numfiche.numFiche;
});

export default function TableRow(props) {
  //   console.log(fiche);
  return (
    <tr>
      <td className='taskTable-body-data'>{typeTrav}</td>
      <td className='taskTable-body-data'>{numFiche}</td>
    </tr>
  );
}

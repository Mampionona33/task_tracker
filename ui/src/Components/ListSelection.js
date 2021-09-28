import React from 'react';

export default function ListSelection(props) {
  return (
    <option value={props.value} key={props.index}>
      {props.txt}
    </option>
  );
}

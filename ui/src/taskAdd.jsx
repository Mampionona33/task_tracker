class TaskAdd extends React.Component {
  render() {
    const rowStyle = { border: '1.5px solid silver', padding: 4 };
    return (
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={rowStyle}>type de travail</th>
            <th style={rowStyle}>booth number</th>
            <th style={rowStyle}>status com</th>
            <th style={rowStyle}>status ivpn</th>
            <th style={rowStyle}>url fiche</th>
            <th style={rowStyle}>état</th>
            <th style={rowStyle}>nb avant</th>
            <th style={rowStyle}>nb apres</th>
            <th style={rowStyle}>date début</th>
            <th style={rowStyle}>date validation</th>
            <th style={rowStyle}>durée de production</th>
          </tr>
        </thead>
      </table>
    );
  }
}

module.exports = TaskAdd;

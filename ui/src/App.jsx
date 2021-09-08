class HelloWorld extends React.Component {
  render() {
    const continent = ['Africa', 'Asia', 'Erope', 'Madagascar'];
    const helloContinents = Array.from(continent, (c) => `Hello ${c}!`);
    const message = helloContinents.join(' ');

    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}
const element = <HelloWorld />;

ReactDOM.render(element, document.getElementB
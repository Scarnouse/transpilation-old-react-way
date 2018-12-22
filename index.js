//line 1
class Es6Component extends React.Component {
  //line 2
  render() {
    return <div onClick={this._handleClick}>
      Hi There, I am learning ES6 in React.</div>;
  }

  _handleClick() {
    console.log("hi");
  }
}

ReactDOM.render(<Es6Component />, document.getElementById('react-content'));
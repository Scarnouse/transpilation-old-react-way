class Counter extends React.Component {
  /* The constructor of the newly created React clas, Counter.
  There are the following things to be noted:
  Call to super(props) and instead of calling getInitialState()
  lifecycle method React team used the instance property called
  this.state() */
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  tick() {
    this.setState({count: this.state.count +1});
  }

  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

/* For validation and default values purposes propTypes and
defaultProps are inbuilt within React's component. Here the
propTypes an defaultProps are defined as properties on the
constructor instead within the class body. */

// Declares the React's class Counter property types as number
Counter.propTypes = { initialCount: React.PropTypes.number };

/* sets the defaultProps for the Counter React class as
initialCount being 0. These values are passed as super(props)*/
Counter.defaultProps = { initialCount: 0 };

ReactDOM.render(<Counter/>, document.getElementById('react-content'));
import React from "react";

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log("Lifecycle constructor!!");
  }

  componentDidMount() {
    //we want to load base component first before we start and fetching data and updating our component so that it looks different than base state.//latency might be slow or connection be low
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("Lifecycle component render!");
    return (
      <div className="lifecycles">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;

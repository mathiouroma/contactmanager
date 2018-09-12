import React, { Component } from "react";

class Test extends Component {
  //Lifecycle Methods
  //   componentWillMount will be deprecated in next versions
  //   componentWillReceiveProps will be deprecated in next versions
  //   componentWillUpdatewill be deprecated in next versions

  state = {
    title: "",
    body: "Test"
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title
          //   body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate...");
  //   }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps...");
  //   }

  //NEW FUNCTIONS IN LIFECYCLE

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     //a state or null must always return
  //     return {
  //       test: "Something"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;

import React from "react";

type Props = {
  count: number;
};

type State = {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState: State) => ({ count: prevState.count + 1 }));
  }

  decremtnt() {
    this.setState((prevState: State) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        counter value {this.state.count}
        <button onClick={() => this.increment()}>increment</button>
        <button onClick={() => this.decremtnt()}>decrement</button>
      </div>
    );
  }
}

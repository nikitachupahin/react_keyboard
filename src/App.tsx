import React from 'react';

interface State {
  pressedKey: KeyboardEvent | null;
}
export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  keyPressedHandler = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyPressedHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyPressedHandler);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

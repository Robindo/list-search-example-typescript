import * as React from 'react';

interface ExampleProps {
  test: number;
}

class Example extends React.Component<ExampleProps> {
  constructor(props: ExampleProps) {
    super(props);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render = () => <div> Example component {this.props.test}</div>;
}

export default Example;

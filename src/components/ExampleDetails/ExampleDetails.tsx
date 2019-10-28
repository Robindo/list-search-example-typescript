import * as React from 'react';

class ExampleDetails extends React.Component<
  ExampleDetailsProps,
  ExampleDetailsState
> {
  render(): {} {
    return <h1>Details</h1>;
  }
}

export default ExampleDetails;

interface ExampleDetailsProps {}

interface ExampleDetailsState {
  name: string;
}

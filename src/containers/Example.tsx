import * as React from 'react';
import ExampleFormFields from '../components/ExampleForm/ExampleFormFields';
import ExampleResults from '../components/ExampleResults/ExampleResults';

const Example: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <ExampleFormFields />
    <ExampleResults />
  </React.Fragment>
);

export default Example;

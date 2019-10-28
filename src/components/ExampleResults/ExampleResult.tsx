import * as React from 'react';
import { Details } from '../../types/Details';

const ExampleResult: React.FunctionComponent<Details> = (props: Details) => (
  <React.Fragment>{props.title}</React.Fragment>
);

export default ExampleResult;

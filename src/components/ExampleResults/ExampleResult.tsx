import * as React from 'react';
import { Details } from '../../types/Details';
import { Genre, Title, Description } from './ExampleResultsStyle';

const ExampleResult: React.FunctionComponent<Details> = (props: Details) => (
  <Genre>
    <Title>{props.title}</Title>
    <Description>{props.description['en']}</Description>
  </Genre>
);

export default ExampleResult;

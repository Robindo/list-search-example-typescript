import * as React from 'react';
import Example from './Example';

const test = 23423;

interface AppProps {
  name: string;
}

const App = ({ name }: AppProps) => (
  <React.Fragment>
    <h1>Hi my name is? whaat? my name is? whaat? tjsikke tsjikke {name}</h1>
    <Example test={test} />
  </React.Fragment>
);

export default App;

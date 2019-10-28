import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import Container from './Container';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;

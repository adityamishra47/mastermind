import React from 'react';
import Home from './src/screen/Home';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './src/reducer/reducer';

const store = createStore(reducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;

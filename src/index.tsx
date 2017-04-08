import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';
import App from './components/App/App';

const store = configureStore();

// tslint:disable-next-line:variable-name
function renderMain(App: React.ReactType) {
  return (
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  );
}

render(renderMain(App), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(renderMain(require('./components/App/App').default), document.getElementById('root'));
  });
}

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'config/ReactotronConfig';
import GlobalStyle from 'styles/global';
import Routes from 'routes';
import Header from 'components/Header/Header';
import { Provider } from 'react-redux';
import store from 'store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
};

export default App;

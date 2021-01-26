import { FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import '../styles/global.css';

import store from '../store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;

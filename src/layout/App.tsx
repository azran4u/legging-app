import Layout from './Layout';
import AppTheme from '../shared/AppTheme';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <Layout />
      </AppTheme>
    </Provider>
  );
}

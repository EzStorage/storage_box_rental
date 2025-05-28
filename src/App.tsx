import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider } from 'react-router';
import router from './router';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

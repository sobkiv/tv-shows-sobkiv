import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/HomePage';
import Show from './components/ShowPage';
import { Provider } from 'react-redux';
import store from './store';

const theme = {
  mainColors: {
    green: '#3da96d',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/show/:id" element={<Show />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

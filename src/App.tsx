import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <Form/>
    </div>
    </ThemeProvider>
  );
}

export default App;

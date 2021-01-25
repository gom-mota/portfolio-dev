import { useEffect, useState, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../styles/theme';

export const ThemeModeContext = createContext({});


export const ThemeModeProvider = (props) => {
  // initial value for default theme
  const [theme, setTheme] = useState('dark');
  
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');
  }, []);

  const themeMode = theme === 'dark' ? DarkTheme : LightTheme;

  return (
    <ThemeModeContext.Provider value={{theme, setTheme, toggleTheme}}>
      <ThemeProvider theme={themeMode}>
        {props.children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext);
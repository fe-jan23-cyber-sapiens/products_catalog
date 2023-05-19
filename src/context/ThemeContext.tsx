import { createContext, FC, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      { children }
    </ThemeContext.Provider>
  );
};

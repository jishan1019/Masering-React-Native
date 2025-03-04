import React, {createContext, useState} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    );
  }

  return context;
};

type ThemProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

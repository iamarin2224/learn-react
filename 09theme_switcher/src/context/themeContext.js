import { createContext, useContext } from "react";

export const ThemeContext = createContext({//can pass default values
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}
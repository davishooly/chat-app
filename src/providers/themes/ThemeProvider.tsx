import React, { useState }  from "react";

import ThemeContext from "./context";
import { darkTheme, lightTheme } from "./themes";

/**
 *  Handles theme change of the application
 */

const ThemeProvider  = (props : any) => {

    const [ theme, changeTheme] = useState(darkTheme);
    const handleThemeChange = () => {
        changeTheme( theme.type === "dark"? lightTheme : darkTheme)
    };

    return (
        <ThemeContext.Provider value = {{
            theme,
            handleThemeChange
        }}>
            { props.children }
        </ThemeContext.Provider>
    )

};

export default ThemeProvider;

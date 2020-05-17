import React, { useState }  from "react";

import ThemeContext from "./context";
import { darkTheme } from "./themes";

/**
 *  Handles theme change of the application
 */

const ThemeProvider  = (props : any) => {
    const [ theme, changeTheme] = useState(darkTheme);

    return (
        <ThemeContext.Provider value = {{
                theme,
                changeTheme
            }}>
            { props.children }
        </ThemeContext.Provider>
    )

};

export default ThemeProvider;

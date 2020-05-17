import React, { useContext } from "react";
import { MainPageComponent } from "./styles";
import ThemeContext from '../../providers/themes/context';

/**
 *  Displays the main chat section
 */

const MainPage = (props: any) => {

    const {theme, handleThemeChange} = useContext(ThemeContext);

    return (
        <>
            <MainPageComponent themes={theme}/>
        </>
    );
};

export default MainPage;

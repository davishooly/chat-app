import React, { useContext } from "react";
import { MainPageComponent } from "./styles";
import ThemeContext from '../../providers/themes/context'


const MainPage = (props: any) => {

    const { theme, handleThemeChange } = useContext(ThemeContext);

    return (
        <MainPageComponent themes = { theme } >
        </MainPageComponent>
    )
};

export default MainPage;


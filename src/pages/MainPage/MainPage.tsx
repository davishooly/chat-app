import React, { useContext } from "react";
import { MainPageComponent } from "./styles";
import ThemeContext from '../../providers/themes/context'


const MainPage = (props: any) => {

    // @ts-ignore
    const { theme } = useContext(ThemeContext);
    return (
        <MainPageComponent themes = {theme} >
            kimame
        </MainPageComponent>
    )
};

export default MainPage;


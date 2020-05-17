import React, { useContext } from "react";
import { MainPageComponent } from "./styles";
import ThemeContext from '../../providers/themes/context';
import HeaderLayout from "../../components/layout/Header";


const MainPage = (props: any) => {

    const {theme, handleThemeChange} = useContext(ThemeContext);

    return (
        <>
            <HeaderLayout/>
            <MainPageComponent themes={theme}>
            </MainPageComponent>
        </>
    );
};

export default MainPage;

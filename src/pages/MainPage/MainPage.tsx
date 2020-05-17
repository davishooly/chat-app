import React, { useContext, lazy, Suspense } from "react";
import { MainPageComponent } from "./styles";
import ThemeContext from '../../providers/themes/context';
const  HeaderLayout = lazy(() =>  import( "../../components/layout/Header"));


const MainPage = (props: any) => {

    const {theme, handleThemeChange} = useContext(ThemeContext);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
            <HeaderLayout/>
            </Suspense>
            <MainPageComponent themes={theme}>
            </MainPageComponent>
        </>
    );
};

export default MainPage;

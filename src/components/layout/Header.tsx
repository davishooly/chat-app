import React, { useContext, useState } from "react";
import { HeaderComponent } from "./styles";
import PopContainer from "../Pop/index";

import context from "../../providers/themes/context";


const navItems = {
    product: "Product",
    pricing: "Pricing",
    support: "Support",
    workSpaces: "Your workspaces"
};

const Header = () => {

    const {theme} = useContext(context);

    const [isOpen, setOpenPop] = useState(false);

    const handleNavigation = (value: string) => {
        if(value === "Your workspaces")  setOpenPop(!isOpen);
    };

    return (
        <HeaderComponent {...theme}>
            <div className="logo__section">
                <img src="" alt="logo"/>
                <p> Chat </p>
            </div>
            <div className="nav__section">
                {
                    Object.values(navItems).map(item => (
                        <span
                            onClick={() => handleNavigation(item)}
                            key={item}>
                            {item}
                        </span>
                    ))
                }
            </div>
            <PopContainer {...{ isOpen, setOpenPop}}>
                kimME
            </PopContainer>
        </HeaderComponent>
    );

};

export default Header;

import React, { useContext } from "react";
import { HeaderComponent } from "./styles";

import context from "../../providers/themes/context";


const navItems = {
    product: "Product",
    pricing: "Pricing",
    support: "Support",
    workSpaces: "Your workspaces"
};

const Header = () => {

    const { theme } = useContext(context);

    return (
        <HeaderComponent {...theme}>
            <div className="logo__section">
                <img src="" alt="logo"/>
                <p> Chat </p>
            </div>
            <div className="nav__section">
                {
                    Object.values(navItems).map(item => (
                        <span key={item}> {item}</span>
                    ))
                }
            </div>
        </HeaderComponent>
    );

};

export default Header;

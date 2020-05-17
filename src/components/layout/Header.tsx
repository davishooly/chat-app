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
        <HeaderComponent themes={theme}>
            <div className="logo--section">
                <img src="" alt="logo"/>
                <p> Chat </p>
            </div>
            <div className="nav--section">
                {
                    Object.values(navItems).map(item => (
                        <span> {item}</span>
                    ))
                }
            </div>
        </HeaderComponent>
    );

};

export default Header;

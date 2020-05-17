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

interface popDetails {
    image?: string;
    name: string;
}

const popData = [
    {image: '', name: 'iCube'},
    {image: '', name: 'developerISH'},
    {image: '', name: 'Sign into another workspace'},
    {image: '', name: 'Create a new workspace'},
];


const popContent = (workspaces: Array<popDetails>) => {
    return (
        <div className="pop__content--container">
            {
                workspaces.length
                &&
                workspaces.map(({image, name}) => (
                    <div className="workspace">
                        <img src={image} alt="icon"/>
                        <span> {name}</span>
                    </div>
                ))
            }
        </div>
    );
};

const Header = () => {

    const {theme} = useContext(context);

    const [isOpen, setOpenPop] = useState(false);

    const handleNavigation = (value: string) => {
        if (value === "Your workspaces") setOpenPop(!isOpen);
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
            <PopContainer {...{isOpen, setOpenPop}}>
                {popContent(popData)}
            </PopContainer>
        </HeaderComponent>
    );

};

export default Header;

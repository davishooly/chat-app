import React, { useContext } from "react";
import { FooterComponent } from "./styles";
import context from "../../providers/themes/context";

const footerSection = {
    "usage": "USING CHAT",
    "chat": "CHAT",
    "legal": "LEGAL",
    "links": "HANDY LINKS"
};

const Footer = () => {

    const {theme} = useContext(context);

    return (
        <FooterComponent {...theme} >
            <div className="footer__content">
                {
                    Object.values(footerSection).map(value => (
                        <div key={value}>
                            <span> {value}</span>
                        </div>
                    ))
                }
            </div>
            <div className="foot__note">
                <div className="footer__note--container">
                    <img src='' alt="logo"/>
                    <div className="contact">
                        <span>Contact us </span>
                    </div>
                </div>
            </div>
        </FooterComponent>
    );
};

export default Footer;
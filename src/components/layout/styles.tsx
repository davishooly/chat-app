import styled from "styled-components";

import { ThemesType } from "../../providers/themes/themesType";

const HeaderComponent = styled.div<ThemesType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.text};
  box-shadow: 0 1px 1px ${props => props.textBackground};
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  z-index:99;
  
  .logo__section {
       display: flex;
       width: 10%;
       align-items: center;
       justify-content: center;
     }
    .nav__section {
     display: flex;
      width: 20%;
      justify-content: space-around;
       align-items: center;
       span {
         padding: 6px;
       }
       span:hover {
       cursor: pointer;
       background: ${props => props.textBackground};
       border-radius: 6px;
    }
  }
`;


const FooterComponent = styled.div<ThemesType>`
  width: 100%;
  display: flex;
  flex-direction:column;
  position: fixed;
  bottom: 0;
  font-size: 11px;
  border-top: 1px solid #ddd;
  padding: 40px 0 0;
  height: 200px;
  color: ${props => props.text};
  
  .footer__content {
    display: flex;
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .footer__note {
    width: 50%;
    margin: auto  auto 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;


export { HeaderComponent, FooterComponent };

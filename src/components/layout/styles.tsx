import styled from "styled-components";

const HeaderComponent = styled.div<any>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.themes.text};
  box-shadow: 0 1px 1px ${props => props.themes.textBackground};
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  z-index:99;
  
  .logo--section {
       display: flex;
       width: 10%;
       align-items: center;
       justify-content: center;
     }
    .nav--section {
     display: flex;
      width: 20%;
      justify-content: space-around;
       align-items: center;
       span {
         padding: 6px;
       }
       span:hover {
       cursor: pointer;
       background: ${props => props.themes.textBackground};
       border-radius: 6px;
    }
  }
`;


const FooterComponent = styled.div`
  width: 50%;
  display: flex;
  margin: 0 auto; 
`;


export { HeaderComponent, FooterComponent };

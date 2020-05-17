import Styled,  { css } from 'styled-components';

export const PopContainer =  Styled.div<any>`
  height: 200px;
  box-shadow: 0 2px 6px ${props => props.popShadow};
  z-index: 999;
  position: absolute;
  min-width: 200px;
  max-width: 365px;
  right: 1%;
  background-color: #FFFFFF;
  border-radius: 4px;
  
  ${props => props.logout && css `
     top: 130%;
  `}
  .ant-popover-arrow {
    right: 10%; 
    transform: translateX(-50%) rotate(45deg);
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background: #fff;
    border-style: solid;
    border-width: 4.24264069px;
    top: -6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
`;

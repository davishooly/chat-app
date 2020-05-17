import styled from 'styled-components';


export const MainPageComponent =  styled.div<any>`
  background: ${props => props.themes.messageBackgroundColor };
  color:  ${props => props.themes.primaryLightColor };
`;


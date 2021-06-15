import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};
    html,
    body{
        width:100%;
        height:100%;
        font-size: 10px;
        font-family: 'Spoqa Han Sans Neo','sans-serif';
    }
    * {
        box-sizing: border-box;
    }
`;
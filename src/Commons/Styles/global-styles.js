import { createGlobalStyle } from 'styled-components';
import CovidImg from '.../Assets/Images/covid.jpeg'
import configOverrides from '../../config-overrides';

const globalStyle = createGlobalStyle`
    *{
    outline: none;
    box-sizing: border-Box; 
 
}

body{
    line-height: normal;
}

html, body{
    width: 100%;
    min-height: 100%;
    display: flex ; 
    padding: 0;
    margin: 0; 
}

#root {

    background: url(s(CovidImg));
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
}
.mb-2 {
    margin-bottom:16px;

}

.pt {
    padding-top:16px;
}

.cursor{
    cursos:pointer;
}
`
    export default globalStyle

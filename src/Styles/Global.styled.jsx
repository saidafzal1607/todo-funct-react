import  { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`


    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:border-box;

    }

    html{
        font-size:25px;
    }

    body{
        font-family: 'DM Mono', monospace;
    }

    li{
        list-style:none;
    }

    a{
        text-decoration:none;
    }




` 
export default GlobalStyled
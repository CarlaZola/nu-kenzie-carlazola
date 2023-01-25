import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    :root{
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secundary: #03B898;
        
        --color-grey-4: #212529;
        --color-grey-3: ##868E96;
        --color-grey-2: ###E9ECEF;
        --color-grey-1: #F8F9FA;

    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

`


export default Global
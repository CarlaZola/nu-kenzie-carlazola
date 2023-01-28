import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

    :root{    
        
        --colorPrimary: #FD377E;
        --colorPrimary2: #E34981;
        --colorSecundary: #03B898;

        --colorGrey1: #212529;
        --colorGrey2: #868E96;
        --colorGrey3: #E9ECEF;
        --colorGrey4: #F8F9FA;

        --title1: 2.375rem; 
        --title2: 1.75rem;
        --title3: 1.375rem;
        --fontDefault: 1rem;
        --font1: 0.875rem;
        --font2: 0.75rem;
        --font3: .625rem;
    }
    

    body, main, h1, h2, h3, h4, aside, section, p, a, ul, li, span, header, nav, div{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body{
        min-height: 100vh;
        min-width: 100%;
    }

    a{
        text-decoration: none;
        color: var( --colorGrey4)
    }

    li{
        list-style: none;
        color: var(--color-grey-4);
    }

    p{
        color: var(--color-grey-4);
    }

`

export default Global
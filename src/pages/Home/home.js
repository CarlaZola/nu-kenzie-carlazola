import styled from "styled-components";

const MainHome = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem .5rem .5rem;
    background-color: var(--colorGrey1);
    gap: 1rem;
    overflow-x: hidden;

    .content{
        display: flex;
        flex-direction: column;
        gap: .938rem;
        width: 95%;   
    }

    h2{
        font-size: var(--title2);
        color: var(--colorGrey4);
        width: 85%;
    }

    p{
        color: var(--colorGrey4);
    }

    div{
        display: flex;
        justify-content: center;
    }

    .button_navigate{
        width: 100%;
        /* max-width: 15.063rem; */
        height: 3rem;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: var(--colorPrimary);
        cursor: pointer;
        border-radius: .5rem;
    }

    .img{
        max-width: 80%;
        height: 21.75rem;
    }

    .img > img {
        width: 100%;
        object-fit: contain;
    }
`

export default MainHome
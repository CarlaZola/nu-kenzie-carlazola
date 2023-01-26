import styled from "styled-components";

const MainHome = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem .5rem .5rem;
    background-color: var(--colorGrey1);
    gap: 2.5rem;
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
        max-width: 85%;
        height: 21.75rem;
    }

    .img > img {
        width: 100%;
        object-fit: contain;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        height: 100vh;
        padding: 1rem 1.5rem 0;
        gap: 1.5rem;

        .content{
            width: 40%;
            height: 50%;
            gap: 2rem;
        }

        div{
            justify-content: flex-start;
        }

        .button_navigate{
           width: 80%;
        }

        .img{
            width: 40%;
            height: unset;
        }

    }
`

export default MainHome
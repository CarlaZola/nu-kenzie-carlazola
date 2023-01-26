import styled from "styled-components";

const MainHome = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem 0.5rem;
    background-color: var(--colorGrey1);

    .content{
        display: flex;
        flex-direction: column;
        gap: .938rem;
    }
    h2{
        font-size: var(--title2);
        color: var(--colorGrey4);
    }

    p{
        color: var(--colorGrey4);
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
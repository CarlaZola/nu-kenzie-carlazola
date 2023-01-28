import styled from "styled-components";

const StyleListTransaction = styled.section`
    margin: 0 auto ;
    width: 95%;
    padding-bottom: 1.5rem;
    
    ul{
        display: flex;
        flex-direction: column;
        gap: 1.1875rem;
    }

    h2{
        color: ${({theme}) => theme.colors.colorGrey1};
        text-align: center;
        
    }

`

export default StyleListTransaction
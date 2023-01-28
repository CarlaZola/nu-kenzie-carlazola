import styled from "styled-components";

 const StyledDashboard = styled.main`
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${({theme}) => theme.colors.colorGrey4};
    display: flex;
    flex-direction: column;

    .container{
        min-height: 100vh;
        min-width: 100vw;
        background-color: ${({theme}) => theme.colors.colorGrey4};
    }

   @media(min-width: 768px){
        .container{
            display: flex;
            justify-content: center;
            min-width: 100vw;
            gap: .5rem;
            margin-top: 1rem;          
        }

        .box_left{
            width: 45%;      
        }

        .box_rigth{
            width: 55%;          
        }
   }

   @media(min-width: 1024px){
    .box_left{
            width: 40%; 
        }
   }
`


export default StyledDashboard
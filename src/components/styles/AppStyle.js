import styled from "styled-components";
import logo from "../../images/logo.svg"
export const Container=styled.div`
    display:flex;
    background-color:white;
    padding:20px;
    border-radius:15px;
    box-shadow:0 0 10px hsl(184, 14%, 56%);

@media (max-width:700px){
    flex-direction:column;
    max-width:400px;   
    margin-top:140px;
    border-radius:15px 15px 0 0;
}
`

export const Main=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    background-image:url(${logo});
    background-repeat:no-repeat;
    background-position: center top 100px;
    background-size:60px; 

@media (max-width:700px){
    background-size:80px; 
    background-position: center top 50px;
}
`
import styled from "styled-components";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";

function image(img){
    if(img==="dollar"){
        return dollar;
    }else{
        return person;
    }
}

export const Main= styled.div`
    display:flex;
    flex-direction:column;
    font-family:Space Mono;
    padding:0px 10px;
    margin-right:15px;
    justify-content: space-between;

@media (max-width:700px){
    margin:0px;
    margin-bottom:20px;
    padding:0px;
}
` 
export const TopContainer= styled.div`
    display:flex;
    flex-direction:column;
` 
export const Header= styled.div`
    display:flex;
    color:hsl(186, 14%, 43%);
    flex-direction:row;
    font-size:12px;
    justify-content:space-between;
    margin-bottom:10px;
` 
export const InputDiv= styled.div`
` 
export const Input= styled.input`
    background-color:hsl(189, 41%, 97%);
    background-image:url(${function(prop){
        if(prop.img==="dollar"){
           return image("dollar");
        }else if(prop.img==="person"){
           return image("person");
        }
    }});
    background-position: left 10px  center;
    background-repeat: no-repeat;
    border: 1px solid hsl(189, 41%, 97%);
    color:hsl(183, 100%, 15%);
    transition: 1s;
    outline: none;
    text-align:right;
    border-radius:5px;
    width:99%;
    padding:2px 5px 2px 0;
    font-size:20px;
    &::placeholder{
        font-size:16px;
        text-align:center;
    }
    cursor:pointer;
    font-family:Space Mono;
    &:focus{
    border: 1px solid hsl(172, 67%, 45%);
    }
    
` 
export const MiddleContainer= styled.div`
    display:flex;
    margin:25px 0;
    flex-direction:column;
` 
export const TipContainer= styled.div`
    display:grid;
    color:white;
    text-align:center;
    grid-template-columns:repeat(3,90px);
    grid-gap:10px;
    
@media (max-width:700px){
    grid-template-columns:repeat(2,1fr);
}
` 

export const Tip= styled.div`
    padding:5px;
    font-size:20px;
    border-radius:5px; 
    display:flex;
    cursor:pointer;
    background-color:hsl(183, 100%, 15%);
    color:white;
    flex-direction:column;
`

export const BottomContainer= styled.div`
    display:flex;
    flex-direction:column;
` 
export const Error= styled.div`
    color:red;
    display:none;
` 
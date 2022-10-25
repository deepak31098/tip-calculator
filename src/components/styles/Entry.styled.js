import styled from "styled-components";
import dollar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";
//want to pass image source as prop but unable to do so image not showing when 
// passed from Entry.js and neither import from public is working.how actually this 
// import from these sources are working
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
// in input if 100% applied then border making them out of order if not applied they dont cover the whole
// width. Also grids are not able to set them
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

${'' /* if i apply 1fr then input takes all space make all grid distort
if 50% is applied then it is going out of order. So hard code seems to 
to last option is there better way to takle this */}
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
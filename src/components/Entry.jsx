import React, { useEffect, useState } from 'react';
import {Main,TopContainer,Error,Input,TipContainer,Header,InputDiv,MiddleContainer,Custom,Tip,BottomContainer} from './styles/Entry.styled'

function Entry(props){
    let intial={5: false,10:false,15:false,20:false,50:false}

    const [target,setState]=useState({});
    const [errorStyle,setErrorstyle]=useState(false);
    const[Bill,setBill]=useState("0.00");
    // this will be handled in both click and onchange function
    const[Custom,setCustom]=useState("0.00");
    const[People,setPeople]=useState("-1");

    function handleClick(event){
        let str=event.target.innerText;
        setCustom(str.slice(0,str.length-1));
        let num=Number(str.slice(0,str.length-1));
        // change initial value of styles based on click
        setState({
              ...intial,
              [num]:true
            }
        )}

        // object to style tip based on user input
        function styling(num){
            return ({
             backgroundColor:target[num] ? "hsl(185, 41%, 84%)" :"#00494d",
             color:target[num] ? "hsl(183, 100%, 15%)" :"white"
         })}

    // calculate the value when the user enter the number of person
    useEffect(() => {
        props.amt(((((Number)(Bill)+((Number)(Bill)*(Number)(Custom))/100))/(Number)(People)).toFixed(2))
        props.ttl(((((Number)(Bill)*(Number)(Custom))/100)/(Number)(People)).toFixed(2))
    },[People]);



    function handleChange(event){
        const target = event.target.name;
        if(target==="Bill"){
            setBill(event.target.value);
        }
        else if(target==="Custom"){
            setCustom(event.target.value);
        }
        else if(target==="person"){
            setPeople(event.target.value);
        }
        if(event.target.placeholder==="Custom"){
            setState(intial);
        }
        if(target==="person" && event.target.value==="0"){
            setErrorstyle(true);
        }else{
            setErrorstyle(false)
        }
    }

    return(
        <Main>
            <TopContainer>
                <Header><span>Bill</span></Header>
                <InputDiv><Input name="Bill" onChange={handleChange} img="dollar" ></Input></InputDiv>
            </TopContainer>

            <MiddleContainer>
                <Header><span>Select Tip %</span></Header>
                <TipContainer >
                    <Tip style={styling(5)} onClick={handleClick} ><span>5%</span></Tip>
                    <Tip style={styling(10)} onClick={handleClick}><span>10%</span></Tip>
                    <Tip style={styling(15)} onClick={handleClick}><span>15%</span></Tip>
                    <Tip style={styling(20)} onClick={handleClick}><span>20%</span></Tip>
                    <Tip style={styling(50)} onClick={handleClick}><span>50%</span></Tip>
                    <Input name="Custom" onChange={handleChange} placeholder='Custom' ></Input>
                </TipContainer>
            </MiddleContainer>

            <BottomContainer>
                <Header>
                    <div><span>Number of People</span></div>
                    <Error style={{display:errorStyle && "block"}}><span>Can't be zero</span></Error>
                </Header>
                <InputDiv>
                    <Input  style={{borderColor:errorStyle &&"red"}} name="person" onChange={handleChange} img="person"></Input>
                </InputDiv>
            </BottomContainer>
        </Main>
    )    
}
export default Entry;
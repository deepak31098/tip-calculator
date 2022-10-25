import React, { useEffect, useState } from 'react';
import {Main,TopContainer,Error,Input,TipContainer,Header,InputDiv,MiddleContainer,Custom,Tip,BottomContainer} from './styles/Entry.styled'

function Entry(props){
    let intial={5: false,10:false,15:false,20:false,50:false}
    const [target,setState]=useState({});
    const [errorStyle,setErrorstyle]=useState(false);
    const[Bill,setBill]=useState("0.00");
    const[Custom,setCustom]=useState("0.00");
    const[People,setPeople]=useState("1");
    // tried to use this useState to update style
    // const[style,setsStyle]=useState({backgroundColor:"red"});
    // Then used this function to change the color to change the style once the function is triggered
    // in handle click and want to set it as an oject in the tip
    // function styling(){
    //     var s={backgroundColor:"red"}===style?{backgroundColor:"blue"}:{backgroundColor:"red"};
    //     console.log(style);
    //     setsStyle(s);
    // }
    function handlereset(){
        console.log(props.resetting+" in entry.jsx");
    }

    function value(){
        console.log(Bill+" "+Custom+" "+People+" in value function");
        props.cal(Bill,Custom,People);
    }
    function handleClick(event){
        let str=event.target.innerText;
        // value("",(str.slice(0,str.length-1)),"");
        setCustom(str.slice(0,str.length-1));
        value();
        let num=Number(str.slice(0,str.length-1));
        setState(prevValue=>{
           return {
              ...intial,
              [num]:true
            }
        
        })
        // styling(); This is function which will be called
    }
    useEffect(()=>{
        value();
        // why in console before even starting to execute the program it log three times why is that
        // i havent performed any clicked or changed anything
    });

    function handleChange(event){

        // I am trying to receive value there in app.js but it is giving one less
        // ex if 2 pressed nothing if 22 pressed 2 if 222 pressed 22 like that
   
        console.log(event.target.value+" in handleChange just begining");
        if(event.target.name==="Bill"){
            setBill(event.target.value);
            
        }
        else if(event.target.name==="Custom"){
            setCustom(event.target.value);
        }
        else if(event.target.name==="person"){
            setPeople(event.target.value);
            
        }
        console.log(Bill+" "+Custom+" "+People+" in handleChange before call");

        value();
        if(event.target.placeholder==="Custom"){
            //i made typo here in custom and tried to access intial but it started showing not defined here why
            setState(intial);
        }
        if(event.target.name==="person" && event.target.value==="0"){
            setErrorstyle(true);
        }else{
            setErrorstyle(false)
        }
    }
    return(
        <Main>
            <TopContainer>
                <Header><span>Bill</span></Header>
                <InputDiv>
                    <Input name="Bill" onChange={handleChange} img="dollar"  ></Input>
                </InputDiv>
            </TopContainer>
            <MiddleContainer>
                <Header>
                    <span>Select Tip %</span>
                </Header>
                <TipContainer >
 {/* Tried to trigger this function but it was not working */}
                <Tip style={{backgroundColor:target[5]&&"hsl(185, 41%, 84%)",color:target[5]&&"hsl(183, 100%, 15%)"}} onClick={handleClick}/*style={style}*/ ><span>5%</span></Tip>
                <Tip style={{backgroundColor:target[10]&&"hsl(185, 41%, 84%)",color:target[10]&&"hsl(183, 100%, 15%)"}} onClick={handleClick}><span>10%</span></Tip>
                <Tip style={{backgroundColor:target[15]&&"hsl(185, 41%, 84%)",color:target[15]&&"hsl(183, 100%, 15%)"}} onClick={handleClick}><span>15%</span></Tip>
                <Tip style={{backgroundColor:target[20]&&"hsl(185, 41%, 84%)",color:target[20]&&"hsl(183, 100%, 15%)"}} onClick={handleClick}><span>20%</span></Tip>
                <Tip style={{backgroundColor:target[50]&&"hsl(185, 41%, 84%)",color:target[50]&&"hsl(183, 100%, 15%)"}} onClick={handleClick}><span>50%</span></Tip>
                <Input name="Custom" onChange={handleChange} placeholder='Custom'></Input>
                </TipContainer>
            </MiddleContainer>
            <BottomContainer>
                <Header>
                <div><span>Number of People</span></div>
                <Error style={{display:errorStyle&& "block"}}><span>Can't be zero</span></Error>
                </Header>
                <InputDiv>
                    <Input style={{borderColor:errorStyle&&"red"}} name="person" onChange={handleChange} img="person"></Input>
                </InputDiv>
            </BottomContainer>
        </Main>
    )    
}
export default Entry;
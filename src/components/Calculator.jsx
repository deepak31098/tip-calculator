import React, { useState } from 'react';
import {Main,Reset,Person,Header,Money,Aggregate,Box,TopContainer,BottomContainer} from './styles/Calculator.styled';

function Calculator(props){
    const [bg,setBg]=useState("hsl(172, 67%, 45%)")

    function handleClick(){
        console.log(props.resetfunc())

        setBg("hsl(185, 41%, 84%)");
        // setTimeout(setBg("hsl(172, 67%, 45%)"),1000);//why this is not working afterall
        // it takes a function ans setbg is a function

        // but this works what is the difference
        setTimeout(function(){
            setBg("hsl(172, 67%, 45%)")
        },200);
    }
    return(
        <Main>
           <TopContainer>
           <Box>
                <Aggregate>
                    <Header>
                    <span>Tip Amount</span>
                    </Header>
                    <Person>
                    <span>/ person </span>
                    </Person>
                </Aggregate>
                <Money>
                    <span>${props.total}</span>
                </Money>
            </Box>
            <Box>
                <Aggregate>
                    <Header>
                    <span>Total</span>
                    </Header>
                    <Person>
                    <span>/ person </span>
                    </Person>
                </Aggregate>
                <Money>
                    <span>${props.amount}</span>
                </Money>
            </Box>
           </TopContainer>
            <BottomContainer>
            <Reset style={{backgroundColor:bg}}onClick={handleClick}>
                <span>RESET</span>
            </Reset>
            </BottomContainer>
        </Main>
    )
        

    
}

export default Calculator;
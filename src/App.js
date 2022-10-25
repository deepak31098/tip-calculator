import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Entry from './components/Entry';
import {Container,Main} from './components/styles/AppStyle'
import { Person } from './components/styles/Calculator.styled';
import GlobalStyles from './components/styles/Global'

function App() {
  const[amount, setAmount]=useState();
  const[total, setTip]=useState()
  

  function calculate(bill,custom,people){
    let Bill=Number(bill);
    let Custom=Number(custom);
    let People=Number(people);
    console.log(Bill+" "+Custom+" "+People+" in calculator");
    var ttlamt=(((Bill+(Bill*Custom)/100))/People).toFixed(2);
    var tip=(((Bill*Custom)/100)/People).toFixed(2);
    // console.log(tip)
    // console.log(ttlamt)
    setAmount(ttlamt);
    setTip(tip);
  }
  

  function resetting(){
    window.location.reload();
    
  }

  return (
    <>
    <GlobalStyles/>
    <Main>
      <Container>
        <Entry resetfunc={resetting}  cal={calculate}/>
        <Calculator resetfunc={resetting} amount={amount} total={total} />
      </Container>
    </Main>  
    </>
  );
}

export default App;

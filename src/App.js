import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Entry from './components/Entry';
import {Container,Main} from './components/styles/AppStyle'
// import { Person } from './components/styles/Calculator.styled';
import GlobalStyles from './components/styles/Global'

function App() {
  const[amount, setAmount]=useState();
  const[total, setTip]=useState()

  function resetting(){
    window.location.reload();
  }

  return (
    <>
    <GlobalStyles/>
    <Main>
      <Container>
        <Entry amt={setAmount} ttl= {setTip} />
        <Calculator resetfunc={resetting} amount={amount} total={total} />
      </Container>
    </Main>  
    </>
  );
}

export default App;

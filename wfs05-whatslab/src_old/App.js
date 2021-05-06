import React from 'react';
import styled from 'styled-components';
import CampoMensagem from './componentes/CampoMensagem/CampoMensagem';
import {BalaoConversa} from './componentes/BalaoConversa/BalaoConversa';

const BodyContainer = styled.div`
width: 35vw;
height: 98vh;
margin: 0 auto;
display: flex;
justify-content: center;
flex-direction: column;
`
const MainContainer = styled.div`
display: flex;
justify-content: center;
height: 90%;
width: 100%;
border: 2px solid black;
border-radius: 8px;
align-items: end;
background-color: #D1EEEE;
`
const BottomContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`


class App extends React.Component{


  renderizarMensagem = () => {

  }
  render() {
    return(
      <BodyContainer>
        <MainContainer>
          <BalaoConversa></BalaoConversa>
        </MainContainer>
        <BottomContainer>
          <CampoMensagem />
        </BottomContainer>
      </BodyContainer>
  )}

}

export default App;

import React from 'react';
import styled from 'styled-components';
import CampoMensagem from './componentes/CampoMensagem/CampoMensagem';

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
align-items: center;
background-color: #D1EEEE;
`
const BottomContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`


class App extends React.Component{
  render() {
    return(
      <BodyContainer>
        <MainContainer>
          <p>ambiente de mensagens</p>
        </MainContainer>
        <BottomContainer>
          <CampoMensagem />
        </BottomContainer>
      </BodyContainer>
  )}

}

export default App;

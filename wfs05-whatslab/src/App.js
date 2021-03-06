import React from 'react';
import styled from 'styled-components';
import BalaoConversa from './components/BalaoConversa/BalaoConversa';

const BodyContainer = styled.div`
width: 360px;
height: 660px;
margin: 0 auto;
display: flex;
justify-content: center;
flex-direction: column;
`
const AmbienteMensagem = styled.div`
display: flex;
flex-direction: column-reverse;
align-items: center;
height: 95%;
width: 100%;
border: 2px solid black;
border-radius: 8px;
background-color: black;
overflow-y: auto;
`
const AmbienteInputs = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top: 5px
`
const MainContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
border-radius: 8px;
height: 4vh;
`
const InputMensagem = styled.input`
display: flex;
width: 60%;
border: 0;
border-bottom: 1px solid black;
margin: 3px 0 3px 3px;
outline: none;
`
const InputNome = styled.input`
width: 20%;
margin-right: 5px;
border: 0;
border-bottom: 1px solid black;
margin: 3px 0 3px 3px;
outline: none;
`
const InputBotao = styled.button`
width: 20%;
border: 1px solid black;
margin: 3px 0 3px 3px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
`
class App extends React.Component {
  state = {
    mensagensEnviadas: [],
    valorRemetente: '',
    valorMensagem: '',
  }
  onChangeMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value })
  }
  onChangeRemetente = (event) => {
    this.setState({ valorRemetente: event.target.value })
  }
  enviarMensagem = () => {
    if (this.state.valorMensagem !== "" && this.state.valorRemetente !== "") {
      const novaMensagem = {
        remetente: this.state.valorRemetente,
        mensagem: this.state.valorMensagem
      };
      this.setState({
        mensagensEnviadas: [novaMensagem, ...this.state.mensagensEnviadas],
        valorMensagem: ''
      });
    }
    this.handleFocusMsg();
  };
  renderizarMensagem = () => { //comando para renderizar mensagem
    return this.state.mensagensEnviadas.map((info,index) => {
      return (<BalaoConversa
        key={index}
        bRemetente = {info.remetente}
        bMensagem = {info.mensagem}
        onDoubleClick = {() => {
          const caixaConfirmacao = window.confirm(`Deletar ${info.mensagem}?`)
          if(caixaConfirmacao === true){this.deletarMensagem(index)};
        }}  //fechamento doubleclick
        />) //fechamento balaoconversa
    })
  }
  pressionouEnter = (event) => {
    if (event.which === 13) {
      this.enviarMensagem();
    }
  }
  handleFocusMsg = () => {
    this.inputMsg.focus()
  }
  deletarMensagem = (index) => {
    const deletarMsg = this.state.mensagensEnviadas.filter((_,id) => {
      return id !== index;
    });
    this.setState({mensagensEnviadas: deletarMsg})
  }
  render() {
    return (
      <BodyContainer>
        <AmbienteMensagem>
          {this.renderizarMensagem()}
        </AmbienteMensagem>
        <AmbienteInputs>
          <MainContainer>
            <InputNome
              placeholder={'Nome'}
              value={this.state.valorRemetente}
              onChange={this.onChangeRemetente}
            />
            <InputMensagem
              ref = {(input) => {this.inputMsg = input;}}
              placeholder={'Mensagem...'}
              value={this.state.valorMensagem}
              onChange={this.onChangeMensagem}
              onKeyUp={this.pressionouEnter}
            />
            <InputBotao onClick={this.enviarMensagem}>Enviar</InputBotao>
          </MainContainer>
        </AmbienteInputs>
      </BodyContainer>
    )
  }

}

export default App;

import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
border: 2px solid black;
border-radius: 8px;
height: 4vh;
`
const InputMensagem = styled.input`
display: flex;
width: 60%;
border: 1px solid black;
margin: 3px 0 3px 0;
`
const InputNome = styled.input`
width: 20%;
margin-right: 5px;
border: 1px solid black;
margin: 3px 0 3px 0;
`


class AmbienteMensagem extends React.Component{
    state = {
        valorRemetente: '',
        valorMensagem: '',
    }

    onChangeMensagem = (event) => {
        this.setState({valorMensagem: event.target.value})
    }

    onChangeRemetente = (event) => {
        this.setState({valorRemetente: event.target.value})
    }
    enviarMensagem = () => {
        console.log('Mensagem enviada!')
        this.setState({valorMensagem: ''})
    }
    
    render(){
        return(
            <MainContainer>
                <InputNome 
                placeholder = {'Nome'}
                value = {this.state.valorRemetente}
                onChange = {this.onChangeRemetente}
                />
                <InputMensagem 
                placeholder = {'Mensagem...'}
                value = {this.state.valorMensagem}
                onChange = {this.onChangeMensagem}
                />
                <button onClick = {this.props.enviarMensagem}>Enviar</button>
            </MainContainer>
        )
    }
}

export default AmbienteMensagem
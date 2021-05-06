import React from "react";
import styled from "styled-components";

const ContainerConversa = styled.div`
background-color: black;
border-radius: 10%;
padding: 12px;
display: flex;
justify-content: start;
`
const LinhaRemetente = styled.p`
font: bold 14px Arial, sans-serif;
font-color: smokewhite;
`
const LinhaMensagem = styled.p`
font: 12px Arial, sans-serif;
font-color: smokewhite;
`

class BalaoConversa extends React.Component{
    render(){
        return(
            <ContainerConversa>
                <LinhaRemetente>{this.props.Remetente}</LinhaRemetente>
                <LinhaMensagem>{this.props.Mensagem}</LinhaMensagem>
            </ContainerConversa>
        )
    }
}

export default BalaoConversa
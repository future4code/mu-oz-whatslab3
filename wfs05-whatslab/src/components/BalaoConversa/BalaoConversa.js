import React from "react";
import styled from "styled-components";

const ContainerConversa = styled.div`
background-color: white;
border-radius: 8px;
padding: 4px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
width: 94%;
margin-bottom: 8px;
`
const LinhaRemetente = styled.span`
margin: 0 0 5px 8px;
font: bold 14px Arial, sans-serif;
font-color: white;
`
const LinhaMensagem = styled.span`
margin: 0 0 5px 12px;
font: 12px Arial, sans-serif;
font-color: white;
`

class BalaoConversa extends React.Component{
    render(){
        return(
            <ContainerConversa>
                <LinhaRemetente>{this.props.bRemetente}</LinhaRemetente>
                <LinhaMensagem>{this.props.bMensagem}</LinhaMensagem>
            </ContainerConversa>
        )
    }
}

export default BalaoConversa
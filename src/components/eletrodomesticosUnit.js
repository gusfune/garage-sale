import React, { Component } from "react"

class EletrodomesticosUnit extends Component {
  render() {
    return (
      <div>
        <p>{this.props.content.Name}</p>
        <p>{this.props.content.Ano}</p>
        <p>{this.props.content.Descricao}</p>
        <p>{this.props.content.Especificacoes}</p>
        <p>{this.props.content.Modelo}</p>
        <p>{this.props.content.Preco}</p>
        <p>{this.props.content.Voltagem}</p>
      </div>
    )
  }
}

export default EletrodomesticosUnit

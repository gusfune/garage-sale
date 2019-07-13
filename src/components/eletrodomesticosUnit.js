import React, { Component } from "react"
import {
  Badge,
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

class EletrodomesticosUnit extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <Card key={this.props.index}>
          <CardHeader tag="h4">{this.props.content.Name}</CardHeader>
          <img src="https://via.placeholder.com/600x400?text=Imagem" className="card-img-top" alt="img" />
          <CardBody>
            {this.props.content.Marca && (
              <CardSubtitle>
                <h5>{this.props.content.Marca}</h5>
              </CardSubtitle>
            )}
            <CardText>
              {this.props.content.Ano && (
                <p>
                  <strong>Ano:</strong> {this.props.content.Ano}
                </p>
              )}
              {this.props.content.Modelo && (
                <p>
                  <strong>Modelo:</strong> {this.props.content.Modelo}
                </p>
              )}
              {this.props.content.Especificacoes && (
                <p>
                  <a
                    href={this.props.content.Especificacoes}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Especificações Técnicas
                  </a>
                </p>
              )}
              {this.props.content.Voltagem && (
                <p>
                  <strong>Voltagem:</strong> {this.props.content.Voltagem}
                </p>
              )}
              {this.props.content.Descricao && (
                <p>{this.props.content.Descricao}</p>
              )}
              <h1>
                <Badge color="primary">R$ {this.props.content.Preco}</Badge>
              </h1>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default EletrodomesticosUnit

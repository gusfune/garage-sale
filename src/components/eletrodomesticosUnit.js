import React, { Component } from "react"
import {
  Badge,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./eletrodomesticosUnit.scss"
import ReadMore from "./ReadMore"
import Gallery from "./Gallery"


class EletrodomesticosUnit extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4" key={this.props.index}>
        <Card>
          <CardHeader tag="h4">{this.props.content.Name}</CardHeader>

          <Gallery images={this.props.content.Fotos.localFiles} />

          <CardBody>
            {this.props.content.Marca && (
              <CardSubtitle>
                <h5>{this.props.content.Marca}</h5>
              </CardSubtitle>
            )}

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
                <ReadMore lines={1}>{this.props.content.Descricao}</ReadMore>
              )}
              <h1>
                <Badge color="primary">R$ {this.props.content.Preco}</Badge>
              </h1>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default EletrodomesticosUnit

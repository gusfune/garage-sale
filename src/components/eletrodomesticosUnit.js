import React, { Component } from "react"
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
} from "reactstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./eletrodomesticosUnit.scss"
import ReadMore from "./ReadMore"
import Gallery from "./Gallery"

export default class EletrodomesticosUnit extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4" key={this.props.id}>
        <Card key={"card" + this.props.id}>
          <CardHeader tag="h1">{this.props.content.Name}</CardHeader>

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
              <div>
                <h3>Mais informações</h3>
                <ReadMore lines={1}>{this.props.content.Descricao}</ReadMore>
              </div>
            )}
            <h2 className="price">
              <Badge color="success">R$ {this.props.content.Preco}</Badge>
            </h2>
            <p>
              <Button color="primary" onClick={this.props.modalPass}>
                Tenho interesse
              </Button>{" "}
            </p>
          </CardBody>
        </Card>
      </div>
    )
  }
}

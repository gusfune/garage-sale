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
import { Carousel } from "react-responsive-carousel"
import "./eletrodomesticosUnit.scss"

const statusFormatter = (current, total) => (
  <div>
    {current} de {total}
  </div>
)

class EletrodomesticosUnit extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4">
        <Card key={this.props.index}>
          <CardHeader tag="h4">{this.props.content.Name}</CardHeader>
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            statusFormatter={statusFormatter}
          >
            {this.props.content.fileNode.map(node => (
              <div>
                <img src={node.url} className="card-img-top" alt="img" />
              </div>
            ))}
          </Carousel>

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

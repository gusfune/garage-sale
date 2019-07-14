import React, { Component } from "react"
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardSubtitle,
} from "reactstrap"
import ReadMore from "./ReadMore"
import Gallery from "./Gallery"
import "./ProductUnit.scss"

export default class ProductUnit extends Component {
  render() {
    return (
      <div
        className="col-xs-12 col-sm-6 col-md-4 productUnit"
        key={this.props.id}
        itemscope
        itemtype="http://schema.org/Product"
      >
        <Card key={"card" + this.props.id}>
          <CardHeader tag="h2" itemprop="name">
            {this.props.content.Name}
          </CardHeader>

          {this.props.content.Fotos && (
            <Gallery images={this.props.content.Fotos.localFiles} />
          )}
          {!this.props.content.Fotos && (
            <img
              src="https://via.placeholder.com/550x400.png?text=Foto+em+breve"
              alt="Em breve"
              className="card-img-top"
              width="100%"
              height="200"
            />
          )}

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
              <div itemprop="description">
                <h3>Mais informações</h3>
                <ReadMore lines={2}>{this.props.content.Descricao}</ReadMore>
              </div>
            )}
            {this.props.content.Preco && (
              <h2
                className="price"
                itemprop="offers"
                itemscope
                itemtype="http://schema.org/Offer"
              >
                <Badge
                  color="success"
                  itemprop="priceCurrency"
                  content="BRL"
                  itemprop="price"
                  content={this.props.content.Preco}
                  itemprop="availability"
                  href="http://schema.org/InStock"
                >
                  R$ {this.props.content.Preco}
                </Badge>
              </h2>
            )}
            <p>
              <Button
                color="primary"
                onClick={this.props.modalPass}
                id={"interest_" + this.props.id}
                aria-label="Tenho Interesse"
              >
                Tenho interesse
              </Button>{" "}
            </p>
          </CardBody>
        </Card>
      </div>
    )
  }
}

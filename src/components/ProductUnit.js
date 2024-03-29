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
        itemScope
        itemType="http://schema.org/Product"
      >
        <Card key={this.props.content.Slug} id={this.props.content.Slug}>
          <CardHeader tag="h2" itemProp="name">
            {this.props.content.Name}
          </CardHeader>

          {this.props.content.Fotos && (
            <Gallery
              images={this.props.content.Fotos.localFiles}
              slug={this.props.content.Slug}
            />
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
              <p itemProp="model" content={this.props.content.Modelo}>
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
                <ReadMore lines={2}>{this.props.content.Descricao}</ReadMore>
              </div>
            )}
            {this.props.content.Preco && (
              <h2
                className="price"
                itemProp="offers"
                itemScope
                itemType="http://schema.org/Offer"
              >
                {/* eslint-disable */}
                <Badge color="primary">
                  <span itemProp="priceCurrency" content="BRL" />
                  <span itemProp="price" content={this.props.content.Preco}>
                    R$ {this.props.content.Preco}
                  </span>
                  <link
                    itemProp="availability"
                    href="https://schema.org/InStock"
                  />
                </Badge>
                {/* eslint-enable */}
              </h2>
            )}
            <p>
              <Button
                color="danger"
                onClick={this.props.modalPass}
                id={"interest_" + this.props.content.Slug}
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

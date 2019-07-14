import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Alert } from "reactstrap"
import ProductUnit from "./ProductUnit"
import Soon from "./Soon"

export default class EletrodomesticosSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Eletrodomesticos {
            allAirtable(
              filter: {
                table: { eq: "Eletrodomesticos" }
                data: { O_que_fazer: { eq: "A Venda" } }
              }
              sort: { order: ASC, fields: data___Name }
            ) {
              edges {
                node {
                  id
                  data {
                    Ano
                    Descricao
                    Especificacoes
                    Fotos {
                      localFiles {
                        childImageSharp {
                          fixed(width: 400, height: 250) {
                            ...GatsbyImageSharpFixed
                            originalName
                          }
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                        id
                        url
                      }
                    }
                    Marca
                    Modelo
                    Name
                    Preco
                    Voltagem
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="container">
            <div className="row">
              {data.allAirtable.edges.map((node, index) => (
                <ProductUnit
                  content={node.node.data}
                  index={index}
                  id={node.node.id}
                  key={"electro" + node.node.id}
                  modalPass={this.props.modalPass}
                />
              ))}
              {data.allAirtable.edges.length === 0 && <Soon />}
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <br />
                <Alert color="primary">Em breve mais itens disponíveis!</Alert>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

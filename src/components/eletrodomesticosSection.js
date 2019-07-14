import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductUnit from "./ProductUnit"

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
                          fixed(width: 400, height: 300) {
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
                  key={"unit" + node.node.id}
                  modalPass={this.props.modalPass}
                />
              ))}
            </div>
          </div>
        )}
      />
    )
  }
}

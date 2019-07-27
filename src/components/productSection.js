import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductUnit from "./ProductUnit"
import Soon from "./Soon"

export default class ProductSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Products {
            allAirtable(
              filter: {
                table: { in: ["Eletrodomesticos", "Moveis"] }
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
                            originalName
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
                    Slug
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
          </div>
        )}
      />
    )
  }
}

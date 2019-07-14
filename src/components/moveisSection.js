import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductUnit from "./ProductUnit"

export default class EletrodomesticosSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Moveis {
            allAirtable(
              sort: { order: ASC, fields: data___Name }
              filter: { table: { eq: "Moveis" } }
            ) {
              edges {
                node {
                  id
                  data {
                    Name
                    Descricao
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
                    Preco
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
                  key={"movel" + node.node.id}
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

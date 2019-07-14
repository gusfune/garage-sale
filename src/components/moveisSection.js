import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Alert } from "reactstrap"
import ProductUnit from "./ProductUnit"
import Soon from "./Soon"

export default class MoveisSection extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query Moveis {
            allAirtable(
              sort: { order: ASC, fields: data___Name }
              filter: {
                table: { eq: "Moveis" }
                data: { O_que_fazer: { eq: "A Venda" } }
              }
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
                            originalName
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

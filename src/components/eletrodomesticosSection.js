import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EletrodomesticosUnit from "./eletrodomesticosUnit"

export default () => (
  <StaticQuery
    query={graphql`
      query Eletrodomesticos {
        allAirtable(
          filter: {
            table: { eq: "Eletrodomesticos" }
            data: { O_que_fazer: { eq: "A Venda" } }
          }
        ) {
          edges {
            node {
              data {
                Ano
                Descricao
                Especificacoes
                Fotos {
                  filename
                  thumbnails {
                    small {
                      url
                    }
                  }
                  url
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
            <EletrodomesticosUnit content={node.node.data} index={index} />
          ))}
        </div>
      </div>
    )}
  />
)

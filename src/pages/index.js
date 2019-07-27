import React from "react"
import ReactModal from "react-modal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import ProductSection from "../components/productSection"

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <p>
          Estamos indo embora do país e vamos vender várias coisas que temos em
          casa. Aqui estão os itens já catalogados. Estamos adicionando itens
          aos poucos aqui.
        </p>
        <p>
          Interessado em algo? &nbsp;
          <button onClick={this.handleOpenModal} id="firstLink">
            Clique aqui
          </button>
          , preencha o formulário em um minuto e retornaremos em breve.
        </p>
        <p>
          <span role="img" aria-label="camera">
            📷
          </span>{" "}
          A qualidade das fotos não estão boas devido a correria, caso queira
          mais fotos de algum produto é só avisar.
        </p>
        <p>
          O catálogo de itens disponíveis está abaixo, caso tenha interesse
          envie uma mensagem pelo{" "}
          <button onClick={this.handleOpenModal} id="secondLink">
            formulário de contato
          </button>
          , ok?
        </p>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Fechar Janela"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
          style={{
            overlay: {
              background: `rgba(0, 0, 0, 0.8)`,
            },
            content: {
              overflow: `hidden`,
              padding: `0`,
            },
          }}
        >
          <iframe
            className="airtable-embed airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrYnhFtNTXu5GiTC?backgroundColor=purple"
            frameBorder="0"
            width="100%"
            height="100%"
            title="contato"
            style={{
              background: `transparent`,
              height: `100%`,
              overflow: `hidden`,
            }}
          />
          <p className="close">
            <button onClick={this.handleCloseModal} aria-label="fechar janela">
              Fechar [x]
            </button>
          </p>
        </ReactModal>

        <ProductSection modalPass={this.handleOpenModal} />
      </Layout>
    )
  }
}

export default IndexPage

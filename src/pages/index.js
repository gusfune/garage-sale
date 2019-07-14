import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import ReactModal from "react-modal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-tabs/style/react-tabs.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import EletrodomesticosSection from "../components/eletrodomesticosSection"

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
          <button onClick={this.handleOpenModal}>Clique aqui</button>, preencha
          o formulário em um minuto e retornaremos em breve.
        </p>
        <p>
          O catálogo de itens disponíveis está abaixo. Esta parte abaixo é
          apenas um catálogo, caso tenha interesse envie uma mensagem pelo{" "}
          <button onClick={this.handleOpenModal}>formulário de contato</button>,
          ok?
        </p>
        <ReactModal
          isOpen={this.state.showModal}
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
            <button onClick={this.handleCloseModal}>Fechar [x]</button>
          </p>
        </ReactModal>

        <Tabs>
          <TabList>
            <Tab key="Tab0">Eletrônicos & Eletrodomésticos</Tab>
            <Tab key="Tab1" disabled={true}>
              Móveis (em breve)
            </Tab>
            <Tab key="Tab2" disabled={true}>
              Diversos (em breve)
            </Tab>
          </TabList>

          <TabPanel key="TabPanel0">
            <EletrodomesticosSection modalPass={this.handleOpenModal} />
          </TabPanel>
          <TabPanel key="TabPanel1">
            <h3>Em breve</h3>
            {/*}
            <iframe
              className="airtable-embed" 
              src="https://airtable.com/embed/shrPQlNvbmpGXAEeM?backgroundColor=purple"
              frameborder="0"
              width="100%"
              height="533"
              title="moveis"
              style={{ background: `transparent`, border: `1px solid #ccc` }}
            />
            {*/}
          </TabPanel>
          <TabPanel key="TabPanel2">
            <h3>Em breve</h3>
            {/*}
            <iframe
              className="airtable-embed" 
              src="https://airtable.com/embed/shrEB5MVwvtWZAhjv?backgroundColor=purple"
              frameBorder="0"
              width="100%"
              height="533"
              title="diversos"
              style={{ background: `transparent`, border: `1px solid #ccc` }}
            />
            {*/}
          </TabPanel>
        </Tabs>
      </Layout>
    )
  }
}

export default IndexPage

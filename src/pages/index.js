import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Estamos indo embora do país e vamos vender várias coisas que temos em casa. Aqui estão os itens já catalogados. Em breve vamos adicionar mais coisas.</p>
    <p>Interessado em algo? Manda um whatsapp pra <a href="tel:+5561982109400">(61) 98210-9400</a>.</p>
    <iframe
      class="airtable-embed" 
      src="https://airtable.com/embed/shrHykWNSJy1HhZQS?backgroundColor=purple"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: `transparent`, border: `1px solid #ccc` }}
      />
  </Layout>
)

export default IndexPage

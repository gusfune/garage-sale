import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Estamos indo embora do país e vamos vender várias coisas que temos em casa. Aqui estão os itens já catalogados. Em breve vamos adicionar mais coisas.</p>
    <p>Interessado em algo? Manda um whatsapp pra <a href="tel:+5561982109400">(61) 98210-9400</a>.</p>
    <Tabs>
      <TabList>
        <Tab>Eletrônicos & Eletrodomésticos</Tab>
        <Tab>Móveis</Tab>
        <Tab>Diversos</Tab>
      </TabList>

    <TabPanel>
      <iframe
        class="airtable-embed" 
        src="https://airtable.com/embed/shrHykWNSJy1HhZQS?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: `transparent`, border: `1px solid #ccc` }}
      />
    </TabPanel>
    <TabPanel>
      <iframe
        class="airtable-embed" 
        src="https://airtable.com/embed/shrPQlNvbmpGXAEeM?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: `transparent`, border: `1px solid #ccc` }}
      />
    </TabPanel>
    <TabPanel>
      <iframe
        class="airtable-embed" 
        src="https://airtable.com/embed/shrEB5MVwvtWZAhjv?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style={{ background: `transparent`, border: `1px solid #ccc` }}
      />
    </TabPanel>
  </Tabs>
  </Layout>
)

export default IndexPage

import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/paprika-internet.jpg'

const imgStyle = {
  maxWidth: '60%',
  margin: '0 auto',
}

const pFontSize = '1.5em'
const pStlye1 = { fontSize: pFontSize, color: '#ff3188' }
const pStlye2 = { fontSize: pFontSize, color: '#9c4aff' }
const pStlye3 = { fontSize: pFontSize, color: '#46ee46' }
const pStlye4 = { fontSize: pFontSize, color: 'orange' }

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Acerca de" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" style={imgStyle} />
            </span>
            <p style={pStlye1}>
              Desde el fondo del mundo subcibernético renace una cultura
              torrentera cinéfila.
            </p>
            <p style={pStlye2}>
              En busca de nuevas experiencias, nuevas ideas y nuevas amistades
              nos hemos ido congregando en tiempos pandémicos para seguir
              haciéndole frente a la vida.
            </p>
            <p style={pStlye3}>
              Disfrutamos del arte, el gore, el absurdo y la birra.
            </p>
            <p style={pStlye4}>Cuando quieras pasate y serás bienvenide.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

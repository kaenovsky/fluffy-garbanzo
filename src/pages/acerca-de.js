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
              Desde un mundo subcibernético renace la cultura
              torrentera cinéfila.
            </p>
            <p style={pStlye2}>
              En busca de nuevas experiencias, ideas y afectos
              nos hemos congregado en tiempos pandémicos para seguir
              haciéndole frente a la vida desde el compartir y abrir espacios.
            </p>
            <p style={pStlye3}>
              Disfrutamos del arte, el gore, el absurdo, la birra y el vino.
            </p>
            <p style={pStlye4}>Cuando quieras pasate por nuestro canal de Telegram y serás bienvenide.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic

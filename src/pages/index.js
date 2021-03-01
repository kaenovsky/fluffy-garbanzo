import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import pic05 from '../assets/images/stalker.jpg'
import picKaen from '../assets/images/avatars/kaen.jpg'
import picSaio from '../assets/images/avatars/saio.jpg'
import picJules from '../assets/images/avatars/jules.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Tweet from '../components/Tweet'
import Gifs from '../components/Gifs'

import Flyers from '../components/Flyers'
import 'antd/dist/antd.css';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }


  render() {
    return (
      <Layout>
        <Helmet title="/CDP - Cine Debate Pandemia" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>

        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="tweets" className="main">
            <div className="tweet-list">
              <Tweet
                direction='left'
                title='kaen'
                img={picKaen}
                text='Ah we alta peli' />
              <Tweet
                direction='right'
                title='saio'
                img={picSaio}
                text='La verdad que todas las pelis muy chotas :)' />
              <Tweet
                direction='left'
                title='jules'
                img={picJules}
                text='El tiempo en esta película es suspendido' />
            </div>
          </section>

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ciclo CDP</h2>
                </header>
                <p>
                  Todos los viernes una peli
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/acerca-de" className="button">
                      Sobre /CDP
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <Flyers />

          <Gifs />

          <section id="cta" className="main special">
            <header className="major">
              <h2>Sumate a nuestro grupo de Telegram</h2>
              <a href="https://t.me/CineDebatePandemia" target='_blank' className="button special button-sumate">
                    Unirse a Telegram /CDP
              </a>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

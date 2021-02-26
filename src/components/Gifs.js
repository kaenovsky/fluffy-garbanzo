import React, { useState, useEffect } from 'react';

import pic02 from '../assets/images/militar.gif'
import pic03 from '../assets/images/zombies.gif'
import pic04 from '../assets/images/run.gif'

import zama1 from '../assets/images/gifs/zama-1.gif'
import zama2 from '../assets/images/gifs/zama-2.gif'
import zama3 from '../assets/images/gifs/zama-3.gif'
import zama4 from '../assets/images/gifs/zama-4.gif'
import zama5 from '../assets/images/gifs/zama-5.gif'
import zama6 from '../assets/images/gifs/zama-6.gif'
const zamaPics = [
  zama1, zama2, zama3, zama4, zama5, zama6
]

const Gifs = props => {
  return (
    <section id="gifs" className="main special">
      <header className="major">
        <h2>Todes amamos los gifs</h2>
      </header>
      <ul className="features-custom">
        {/*<li>
          <h3></h3>
          <span className="image">
            <img src={pic02} alt="" />
          </span>
        </li>
        <li>
          <h3></h3>
          <span className="image">
            <img src={pic03} alt="" />
          </span>
        </li>
        <li>
          <h3></h3>
          <span className="image">
            <img src={pic04} alt="" />
          </span>
        </li>*/}
        {zamaPics.map((pic, i) =>
          <li key={i}>
            <h3></h3>
            <span className="image">
              <img src={pic} alt="" />
            </span>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Gifs

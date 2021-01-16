import React from 'react'

import logo from '../assets/images/logo-cdp-circle.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>/CDP</h1>
        <p>Nos juntamos virtualmente a ver pelis y debatirlas.</p>
    </header>
)

export default Header

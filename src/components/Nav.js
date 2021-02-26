import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['tweets', 'intro', 'gifs', 'cta', 'flyers'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="tweets">
                    <a href="#">la crítica</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">intro</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="gifs">
                    <a href="#">gifs</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">unir</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="flyers">
                    <a href="#">flyers</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav

import React from 'react';

import image1 from '../assets/images/frames/amabilidad_1.jpg'
import image2 from '../assets/images/frames/esperanzazama_1.jpg'
import image3 from '../assets/images/frames/fuego.jpg'
import image4 from '../assets/images/frames/hijo2_2.jpg'
import image5 from '../assets/images/frames/loop.jpg'
import image6 from '../assets/images/frames/pincel_1.jpg'
import image7 from '../assets/images/frames/zama_god.j_viejo.jpg'
import image8 from '../assets/images/frames/zama_libertad_sintesis.jpg'
import image9 from '../assets/images/frames/zama_libro_sintesis.jpg'
import image10 from '../assets/images/frames/zama_licor_1.jpg'
import image11 from '../assets/images/frames/zama_pez_sintesis.jpg'

import '../assets/scss/components/_grid.scss';

function Flyers() {


  return (
      <div className="grid">
        <div className="grid-item"> 
            <img className="grid-image" src={image1} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image2} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image3} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image4} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image5} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image6} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image7} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image8} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image9} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image10} /> 
        </div>
        <div className="grid-item"> 
            <img className="grid-image" src={image11} /> 
        </div>
      </div>
  );
}

export default Flyers;

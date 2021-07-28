import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
import iphone12pro from '../images/12pro.png';
import iphone12 from '../images/12.png';
import iphone11pro from '../images/11pro.png';
import iphone11 from '../images/11.png';
import iphonese from '../images/se.png';
import iphoneXR from '../images/xr.png';

function Cards() {
    return (
        <div className="cards">
            <h1>Let's Shop</h1>
            <div className="cards__container">
                <div className="cardss__wrapper">
                    <ul className="cards__items">
                        <Carditem
                            src={iphone12pro}
                            text="iPhone 12 pro"
                            label="1 159 €"
                            path="/"
                        />
                        <Carditem
                            src={iphone12}
                            text="iPhone 12"
                            label="809 €"
                            path="/"
                        />
                        <Carditem
                            src={iphone11pro}
                            text="iPhone 11 pro"
                            label="1 159 €"
                            path="/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src={iphone11}
                            text="iPhone 11"
                            label="689 €"
                            path="/"
                        />
                        <Carditem
                            src={iphonese}
                            text="iPhone SE"
                            label="489 €"
                            path="/"
                        />
                        <Carditem
                            src={iphoneXR}
                            text="iPhone XR"
                            label="589 €"
                            path="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

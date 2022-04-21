

import  React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="CardHolder">
            <div className="CardNumber">{props.cardNumber}</div>
            
            <div className="CardValidity">Valid upto: {props.cardExpiry}</div>
            <div className="CardCvv">CVV: {props.cardCvv}</div>
            <div className="CardBrand">NeoBank {props.cardBrand}</div>
        </div>


    );
}

export default Card;
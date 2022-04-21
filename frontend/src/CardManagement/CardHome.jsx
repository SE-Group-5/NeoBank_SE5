
import  React from 'react';
import useState from 'react';
import Card from './Card';
import Reward from './Reward'; 
import './Reward.css';

const CardHome = () => {

    return (
        <div>
            <Card cardCvv={"****"} cardBrand={"VISA"} cardNumber={"4 4 0 2 1 2 3 4 5 5 4 2 1 3 2 1"} 
            cardExpiry={"12/2021"}/> 
            <button className="cvvButton" >Show CVV</button>
            <button className="freezeButton">Freeze</button>
            <button className="setpinButton">Set Pin</button>
            <Reward rewardTitle={"Rewards"} rewardPoints={512} ></Reward>
        </div>
    );
}

export default CardHome;
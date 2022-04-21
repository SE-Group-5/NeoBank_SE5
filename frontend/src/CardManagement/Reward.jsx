
import React from 'react';
import Button from '@material-ui/core/Button';
import './Reward.css';

const Reward = (props) => {
    return (
        <div>
        <div className="textName">✨ Welcome to Card and Rewards Management Portal</div>
        <div className="TitleBox">
            <div className="Title">{props.title}</div>
        </div>
        <div className="RewardBox">
            <div className="RewardTitle">{props.rewardTitle}</div>
            <div className="star"> </div>
            <div className="RewardPoints">{props.rewardPoints} ⭐</div>
            <button className="ButtonRedeem">Redeem</button>
        </div>
        
        </div>
    );
}

export default Reward;

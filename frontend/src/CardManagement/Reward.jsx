
import React from 'react';
import './Reward.css';

const Reward = (props) => {
    return (
        <div>
        <div className="TitleBox">
            <div className="circle"> </div>
            <div className="polygon"> </div>
            <div className="Title">{props.title}</div>
        </div>
        <div className="RewardBox">
            <div className="RewardTitle">{props.rewardTitle}</div>
            <div className="star"> </div>
            <div className="RewardPoints">{props.rewardPoints}</div>
        </div>
        </div>
    );
}

export default Reward;

import React, { useEffect, useState } from "react";
import styles from "./crypto.module.css";

const Crypto = () => {
	const [holdingValue, setHoldingValue] = useState(10000);
	const [investedValue, setInvestedValue] = useState(5000);
	const [availableINR, setAvailableINR] = useState(6600);
	const [myCoins, setMyCoins] = useState([]);
	const [trendingCoins, setTrendingCoins] = useState([]);

	const handleWithdraw = (e) => {
		const withdrawAmount = parseInt(document.getElementById("w").value);
		// console.log(withdrawAmount);
		setHoldingValue(holdingValue - withdrawAmount);
		setAvailableINR(availableINR + withdrawAmount);
		e.preventDefault();
	};

	const handleDeposit = (e) => {
		const depositAmount = parseInt(document.getElementById("d").value);
		// console.log(depositAmount);
		setAvailableINR(availableINR + depositAmount);
		e.preventDefault();
	};

	const handleInvest = (e) => {
		const investAmount = parseInt(document.getElementById("i").value);
		// console.log(investAmount);
		setInvestedValue(investedValue + investAmount);
		setAvailableINR(availableINR - investAmount);
		e.preventDefault();
	};

	return (
		<div className="container crypto-container">
			<h1>Crypto</h1>
			
			<div className={`card ${styles["data-group"]}`}>
				<div className={`card-body`}>

					<div>
						<h5 className={`card-title ${styles.hv}`}>Holding value</h5>
						<h6 className={`${styles.hvMoney}`}>{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(holdingValue)}</h6>
					</div>
				
					<div className="container-fluid">
						<div className="row">
							{/* <div className="col-md-2"> */}
							<div>
								Invested value
								<br />
								{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(investedValue)}
							</div>
							{/* <div className="col-md-2"> */}
							<div>
								Available INR
								<br />
								{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(availableINR)}
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				<input id="w" type="text" placeholder="Enter amount.." />
				<button className={`btn btn-primary ${styles.btn}`} onClick={handleWithdraw}>
					Withdraw INR
				</button>

				<input id="d" type="text" placeholder="Enter amount.." />
				<button className={`btn btn-primary ${styles.btn}`} onClick={handleDeposit}>
					Deposit INR
				</button>

				<input id="i" type="text" placeholder="Enter amount.." />
				<button className={`btn btn-primary ${styles.btn}`} onClick={handleInvest}>
					Invest INR
				</button>
			</div>

			<div className="myCoins">
				{/* display Coins component */}
			</div>
		</div>
	);
};

export default Crypto;

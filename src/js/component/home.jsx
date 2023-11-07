import React from "react";
import PropTypes from "prop-types";
// import Intervalo from "./interval";

const SimpleCounter = (props) => {
	return (
		<div className="container">
			<div className="d-flex justify-content-center my-2" id="bigCounter">
					<div className="clock">
					<svg xmlns="http://www.w3.org/2000/svg" 
						width="50" 
						height="75" 
						fill="currentColor" 
						class="bi bi-clock" 
						viewBox="0 0 16 16"
					>
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
					</svg>
				</div>
				<div className="six">{props.digitSix % 10}</div>
				<div className="five">{props.digitFive % 10}</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number,
};

export default SimpleCounter;

// let counter = 0;
// 	useEffect(()=> {
//         setInterval(() => {
//            const one = Math.floor(counter/1);
// 		   const two = Math.floor(counter/10);
// 		   const three = Math.floor(counter/100);
// 		   const four = Math.floor(counter/10000);
// 		   const five = Math.floor(counter/100000);
// 		   const six = Math.floor(counter/1000000);
// 		   counter++;
//         }, 1000);
//     });

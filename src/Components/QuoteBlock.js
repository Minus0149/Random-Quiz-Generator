import React from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
const QuoteBlock = (props) => {
	return (
		<div className="quote-container">
			<div className="quote-text">
				<FaQuoteLeft />
				<span className="text">{props.quote}</span>
			</div>
			<div className="quote-author">
				<span className="author">- {props.author}</span>
			</div>
			<div className="buttons">
				<a
					className="button"
					title="Tweet this quote!"
					target="_blank"
					href="/"
				>
					<FaTwitter />
				</a>
				<button className="button" id="new-quote">
					New quote
				</button>
			</div>
		</div>
	);
};

export default QuoteBlock;

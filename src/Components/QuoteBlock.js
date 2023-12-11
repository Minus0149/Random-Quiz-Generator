import React from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
const QuoteBlock = (props) => {
	return (
		<div className="quote-container">
			<div className="quote-text">
				<FaQuoteLeft className="quote-icon" />
				<span className="text">
					Few things can help an individual more than to place responsibility on
					him, and to let him know that you trust him.
				</span>
			</div>
			<div className="quote-author">
				<span className="author">- Booker T. Washington</span>
			</div>
			<div className="buttons">
				<a
					className="button"
					id="tweet-quote"
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

import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
const QuoteBlock = () => {
	const [fetchAgain, setFetchAgain] = useState(false);
	const [quotes, setQuotes] = useState([]);
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		fetchQuote();
	}, [fetchAgain]);

	async function fetchQuote() {
		const url =
			"https://famous-quotes4.p.rapidapi.com/random?category=all&count=25";
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
				"X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
			},
		};
		setFetchAgain(false);
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			setQuotes(result);
		} catch (error) {
			console.error(error);
		}
	}

	const handleClick = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuotes(quotes.filter((_, i) => i !== randomIndex));
		setQuote(quotes[randomIndex].text);
		setAuthor(quotes[randomIndex].author);
		console.log(quotes);
		if (quotes.length < 2) {
			setFetchAgain(true);
		}
	};

	return (
		<div className="quote-container" id="quote-box">
			<div className="quote-text">
				<FaQuoteLeft className="quote-icon" />
				<span className="text" id="text">
					{quote}
				</span>
			</div>
			<div className="quote-author">
				<span className="author" id="author">
					- {author}
				</span>
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
				<button className="button" id="new-quote" onClick={handleClick}>
					New quote
				</button>
			</div>
		</div>
	);
};

export default QuoteBlock;

import React, { useEffect, useState } from "react";
import $ from "jquery";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
const QuoteBlock = (props) => {
	const [fetchAgain, setFetchAgain] = useState(false);
	const [quotes, setQuotes] = useState([]);
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const colors = [
		"#16a085",
		"#27ae60",
		"#2c3e50",
		"#f39c12",
		"#e74c3c",
		"#9b59b6",
		"#FB6964",
		"#342224",
		"#472E32",
		"#BDBB99",
		"#77B1A9",
		"#73A857",
	];
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
		const randomIndexQuote = Math.floor(Math.random() * quotes.length);
		const randomIndexColor = Math.floor(Math.random() * colors.length);

		setQuotes(quotes.filter((_, i) => i !== randomIndexQuote));

		props.setColor(colors[randomIndexColor]);
		$(".quote-text").animate({ opacity: 0 }, 500, function () {
			$(this).animate({ opacity: 1 }, 500);
			setQuote(quotes[randomIndexQuote].text);
		});

		$(".quote-author").animate({ opacity: 0 }, 500, function () {
			$(this).animate({ opacity: 1 }, 500);
			setAuthor(quotes[randomIndexQuote].author);
		});
		$("html body").animate(
			{
				backgroundColor: colors[randomIndexColor],
				color: colors[randomIndexColor],
			},
			1000
		);
		$(".button").animate(
			{
				backgroundColor: colors[randomIndexColor],
			},
			1000
		);
		if (quotes.length < 2) {
			setFetchAgain(true);
		}
	};

	return (
		<div className="quote-container" id="quote-box">
			<div className="quote-text" style={{ color: props.color }}>
				<FaQuoteLeft className="quote-icon" style={{ color: props.color }} />
				<span className="text" id="text">
					{quote}
				</span>
			</div>
			<div className="quote-author">
				<span className="author" id="author" style={{ color: props.color }}>
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
					style={{ backgroundColor: props.color }}
				>
					<FaTwitter />
				</a>
				<button
					className="button"
					id="new-quote"
					onClick={handleClick}
					style={{ backgroundColor: props.color }}
				>
					New quote
				</button>
			</div>
		</div>
	);
};

export default QuoteBlock;

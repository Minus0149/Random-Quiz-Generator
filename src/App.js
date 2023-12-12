import { useState } from "react";
import QuoteBlock from "./Components/QuoteBlock";

function App() {
	const [color, setColor] = useState("#000");
	return (
		<div className="App" style={{ backgroundColor: color }}>
			<QuoteBlock color={color} setColor={setColor} />
		</div>
	);
}

export default App;

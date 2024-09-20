import { BrowserRouter, Routes, Route } from "react-router-dom";

// estilo
import "./app.sass";

// Pages
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

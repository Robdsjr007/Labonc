import { BrowserRouter, Routes, Route } from "react-router-dom";

// estilo
import "./app.sass";

// Pages
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Forms from "./pages/Forms/Forms";
import Premium from "./pages/Premium/Premium";
import Result from "./pages/Result/Result";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/form" element={<Forms/>} />
					<Route path="/premium" element={<Premium />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

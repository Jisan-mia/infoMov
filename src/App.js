import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Series from "./Pages/Series";
import Trending from "./Pages/Trending";
import "./Scss/main.scss";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/trending" component={Trending} />
					<Route path="/movies" component={Movies} />
					<Route path="/series" component={Series} />
					<Route path="/search" component={Search} />
				</Switch>
			</Router>
		</>
	);
}

export default App;

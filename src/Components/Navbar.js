import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-wrapper container">
				<div className="brand">
					<Link to="/">InfoMov</Link>
				</div>
				<ul className="nav-list">
					<li>
						<Link to="/trending">Trending</Link>
					</li>
					<li>
						<Link to="/movies">Movies</Link>
					</li>
					<li>
						<Link to="/series">TV Series</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

import React from "react";
import { Link } from "gatsby";

export const Navigation = () => (
	<nav>
		<Link to="/about" activeClassName="active">
			About
		</Link>
		<Link to="/contact" activeClassName="active">
			Contact
		</Link>
	</nav>
);

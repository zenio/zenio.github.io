import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Image from "gatsby-image";

import { Navigation } from "./navigation";

const Header = ({ siteTitle }) => {
	return (
		<header>
			<div className="container">
				<h1 id="logo">
					<Link to="/">{siteTitle}</Link>
				</h1>
				<Navigation />
			</div>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Navigation } from "./navigation";

const Header = ({ siteTitle }) => {
	return (
		<header>
			<div className="container">
				<div>
					<Link to="/">
						<h1 id="logo">{siteTitle}</h1>
					</Link>
					<Navigation />
				</div>
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

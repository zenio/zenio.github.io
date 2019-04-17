import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "./header/header";
import "./normalize.css";
import "./skeleton.css";
import "./layout.css";

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet>
					<title>{data.site.siteMetadata.title}</title>
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} />
				<main>
					<div className="container">
						<div className="row">
							<div className="one-half column">{children}</div>
						</div>
					</div>
				</main>
				<footer className="container">© {new Date().getFullYear()}</footer>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

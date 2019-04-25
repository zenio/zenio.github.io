import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default () => (
	<Layout>
		<h1>About me</h1>
		<p>Nothing yet here...</p>
		<p>
			<Link to="/blog-goals">Description about why and what this blog is.</Link>
		</p>
		<p>
			<Link to="/">Home</Link>
		</p>
	</Layout>
);

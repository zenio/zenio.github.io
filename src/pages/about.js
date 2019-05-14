import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default () => (
	<Layout>
		<h1>About me</h1>
		<p>Nothing yet here...</p>
		<p>
			<Link to="/blog-goals">Why I decided to start writing this blog?</Link>
		</p>
	</Layout>
);

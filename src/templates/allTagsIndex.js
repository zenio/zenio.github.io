import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const AllTagsTemplate = ({ data, pageContext }) => {
	const { tags } = pageContext;
	return (
		<div>
			<ul>
				{tags.map((tag, index) => {
					return (
						<li key={index}>
							<Link to={`tags/${tag}`}>{tag}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default AllTagsTemplate;

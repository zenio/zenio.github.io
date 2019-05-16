import React from "react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data }) => {
	console.log(data.placeholderImage.childImageSharp.fluid);
	return (
		<Layout>
			<SEO title="404: Not found" />
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<Img fluid={data.placeholderImage.childImageSharp.fluid} />
		</Layout>
	);
};

export const query = graphql`
	query {
		placeholderImage: file(relativePath: { eq: "404.png" }) {
			childImageSharp {
				fluid(maxWidth: 960) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default NotFoundPage;

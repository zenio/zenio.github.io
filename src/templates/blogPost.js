import React from "react";
import { graphql, Link } from "gatsby";
import Disqus from "gatsby-plugin-disqus";

import Layout from "../components/layout";

const Template = ({ data, pageContext }) => {
	const {
		frontmatter: { title, date, tags, slug },
		html
	} = data.markdownRemark;
	const { next, prev } = pageContext;

	return (
		<Layout>
			<div className="post">
				<h1>{title}</h1>
				<div className="date">{date}</div>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{tags.length && (
					<ul className="tags">
						{tags.map((tag, index) => {
							return (
								<li key={index}>
									<Link to={`tags/${tag}`}>{tag}</Link>
								</li>
							);
						})}
					</ul>
				)}
				<Disqus identifier={slug} title={title} />
				{prev && (
					<Link to={prev.frontmatter.path}>
						{prev.frontmatter.title}&nbsp;»
					</Link>
				)}
				{next && (
					<Link to={next.frontmatter.path}>
						«&nbsp;{next.frontmatter.title}
					</Link>
				)}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "D MMMM YYYY")
				tags
			}
		}
	}
`;

export default Template;

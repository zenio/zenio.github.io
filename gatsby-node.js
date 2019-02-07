/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

/*exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};*/

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve("src/templates/blogPost.js");

		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								node {
									frontmatter {
										path
									}
								}
							}
						}
					}
				`
			).then(result => {
				const posts = result.data.allMarkdownRemark.edges;

				posts.forEach(({ node }, index) => {
					const path = node.frontmatter.path;
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							pathSlug: path,
							prev: index === 0 ? null : posts[index - 1].node,
							next: index === posts.length - 1 ? null : posts[index + 1].node
						}
					});

					resolve();
				});
			})
		);
	});
};

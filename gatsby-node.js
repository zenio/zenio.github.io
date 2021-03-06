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

createTagPages = (createPage, posts) => {
	const allTagsTemplate = path.resolve("src/templates/allTagsIndex.js");
	const singleTagTemplate = path.resolve("src/templates/singleTagIndex.js");

	const postsByTag = {};

	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				if (!postsByTag[tag]) {
					postsByTag[tag] = [];
				}

				postsByTag[tag].push(node);
			});
		}
	});

	const tags = Object.keys(postsByTag);

	createPage({
		path: "/tags",
		component: allTagsTemplate,
		context: {
			tags: tags.sort()
		}
	});

	tags.forEach(tagName => {
		const posts = postsByTag[tagName];

		createPage({
			path: `/tags/${tagName}`,
			component: singleTagTemplate,
			context: {
				posts,
				tagName
			}
		});
	});
};

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
										title
										tags
									}
								}
							}
						}
					}
				`
			).then(result => {
				const posts = result.data.allMarkdownRemark.edges;

				createTagPages(createPage, posts);

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

module.exports = {
	siteMetadata: {
		title: `About data science`,
		description: `Data scientist blog`,
		author: `@zenio`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 960
						}
					}
				]
			}
		},
		"gatsby-plugin-offline",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages"
			}
		},
		`gatsby-remark-copy-linked-files`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-140164026-1"
			}
		},
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `zenio`
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Layout>
      <h1>Hi! Wellcome!</h1>
      <p>Nice to meet you on my blog.</p>
      {edges.map(edge => {
        const { frontmatter: post } = edge.node;
        return <div key={post.path}>{post.title}</div>;
      })}
      <Link to="/about/">About</Link>
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;

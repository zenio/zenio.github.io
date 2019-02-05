import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <h1>Hi! Wellcome!</h1>
    <p>Nice to meet you on my blog.</p>
    <Link to="/about/">About</Link>
  </Layout>
);

export default IndexPage;

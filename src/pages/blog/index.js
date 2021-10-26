import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

/* takes page qry results as data */
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allMdx?.nodes?.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter?.title}</Link>
          </h2>
          <p>Posted at: {node.frontmatter?.date}</p>
        </article>
      ))}
    </Layout>
  );
};

/* page query != static query components works differently: data from the query 
   gets passed as a data argument, and page query can accept variables. Static query
   also applies to page components, if needed. */
export const qry = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;

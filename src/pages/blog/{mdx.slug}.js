import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/layout";

// page component
const BlogPost = ({ data }) => {
  const image = getImage(data.mdx?.frontmatter?.hero_image);

  /* we can use data.pageContext to grab data from gatsby's filesys API and use to make graphQL queries */
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      Posted at: {data.mdx?.frontmatter?.date}
      <GatsbyImage image={image} alt={data.mdx?.frontmatter?.hero_image_alt} />
      <MDXRenderer>{data.mdx?.body}</MDXRenderer>
    </Layout>
  );
};

// query takes an id --> MUST be exported in order to be automatically used by the page!
// the $id argument is passed automatically by the pageContext (which contains the id from gatsby's filesys api)
export const queryBlogById = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;

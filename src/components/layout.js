import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { container, heading, navLinkItem, navLinks, navLinkText, siteTitle } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  /* fetch data from the data layer using a static query != page query. Static queries, cannot
     accept variables (unlike page queries) but can be used anywhere (building blocks and page components) */
  const data = useStaticQuery(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>
        <p>{data.site.siteMetadata.title}</p>
      </header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

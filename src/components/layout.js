import { Link } from "gatsby"
import React from "react"
import Header from "./Header"
import { container, heading, navLinkItem, navLinks, navLinkText } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <div className={container}>
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
    </>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <h1>Hello reviewer</h1>
    <Link to="/sponsors">Go to /sponsors</Link> <br />
    <Link to="/contact">Go to /contact</Link> <br />
    <Link to="/posts">Go to /posts</Link>
  </div>
)

export default IndexPage

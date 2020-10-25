import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/styles.css"

const Posts = () => {
    const [postData, setPostData] = useState(0)
    useEffect( () => {
        fetch("https://graphqlzero.almansi.me/api", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify({
              query: `
                query (
                  $options: PageQueryOptions
                ) {
                  posts(options: $options) {
                    data {
                      id
                      title
                      body
                    }
                    meta {
                      totalCount
                    }
                  }
                }
                `
            })
          })
          .then(response => response.json()) //parse JSON from request
          .then(resultData => {
              setPostData(resultData.data);
              console.log('resultData.data', resultData.data.posts.data);
          })
    }, [])

    return (
        <div className="container">
            <SEO title="Posts" />
            <h1 className="heading--page-title">Posts</h1>
            {postData.data.posts.data.map((data) => {
                return(
                    <>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    </>
                )
            })}
        </div>
    )
}

export default Posts
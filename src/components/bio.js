import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Avatar, Divider, List } from "antd";

const Bio = () => (
    <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              author
              bio
              authorImage
            }
          }
        }
      `}
        render={data => (
            <>
                <List.Item>
                    <List.Item.Meta
                        avatar={
                        <Avatar 
                            shape="square"
                            size={70}
                            src={data.site.siteMetadata.authorImage} />}
                        title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
                        description={data.site.siteMetadata.bio}
                    />
                </List.Item>

            </>
        )}
    />
)

export default Bio
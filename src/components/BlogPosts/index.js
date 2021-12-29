import { Link } from "gatsby"
import React from "react"
import * as S from "./styled"

const BlogPosts = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <S.BlogPostsWrapper>
      {posts
        .filter(post => post.node.frontmatter.layout === "blog")
        .map(({ node: post }) => {
          return (
            <S.PostCard key={post.id}>
              <Link to={post.frontmatter.path}>
                <S.PostCardActionArea>
                  <S.PostCardMedia component="img" image={post.frontmatter.coverimg} />
                  <S.PostCardContent>
                    <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                    <S.PostDate>{post.frontmatter.date}</S.PostDate>
                    <S.PostDescription>{post.excerpt}</S.PostDescription>
                  </S.PostCardContent>
                </S.PostCardActionArea>
              </Link>
            </S.PostCard>
          )
        })}
    </S.BlogPostsWrapper>
  )
}

export default BlogPosts

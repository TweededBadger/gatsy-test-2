import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (


  <div className="uk-width-1-3@s uk-first-column">

    <div className="uk-panel   ">


      <div className="uk-panel uk-panel-header  ">
        <div className="uk-margin"><Img alt="" fluid={article.heroImage.fluid} /></div>

        <h3 className="uk-panel-title"><Link to={`/blog/${article.slug}`}>{article.title}</Link></h3>

        <p>{article.publishDate} Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean masa.
          Cumciis natoque penatibgnis dis parrient mont.</p>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        {article.tags.map(tag => (
          <p  key={tag}>
            {tag}
          </p>
        ))}

      </div>
    </div>

  </div>

)

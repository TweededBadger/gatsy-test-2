import React from 'react'
import Img from 'gatsby-image'


export default ({ data }) => (
  <div className="uk-cover-container"  style={{height:300}}>
    <img src={data.heroImage.fixed.src} alt="" uk-cover="" className="uk-cover" uk-cover
/>
    <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
      <div className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">{data.name}</h3>
              <p className="uk-text-meta uk-margin-remove-top">
                {data.title}
              </p>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <p>{data.shortBio.shortBio}</p>
        </div>
      </div>
    </div>
    {/*<Img alt={data.name} fluid={data.heroImage.fluid.src} />*/}
    {/*  <div className="">*/}
    {/*    <div>*/}
    {/*    <h1 className="">{data.name}</h1>*/}
    {/*    <p className="">{data.title}</p>*/}
    {/*    <p>{data.shortBio.shortBio}</p>*/}
    {/*    </div>*/}
    {/*  </div>*/}
  </div>

)

 // {/*<div className={styles.hero}>*/}
// {/*  <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />*/}
// {/*  <div className={styles.heroDetails}>*/}
// {/*    <h3 className={styles.heroHeadline}>{data.name}</h3>*/}
// {/*    <h3 className={styles.heroHeadline}>{data.name}</h3>*/}
// {/*    <p className={styles.heroTitle}>{data.title}</p>*/}
// {/*    <p>{data.shortBio.shortBio}</p>*/}
// {/*  </div>*/}
// {/*</div>*/}

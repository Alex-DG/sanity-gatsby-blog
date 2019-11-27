import { format } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl, getLessonUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

//  <Link className={props.isInList ? styles.inList : styles.inGrid} to={getBlogUrl(props.publishedAt, props.slug.current)}>
function BlogPostPreview(props) {
  return (
    <Link className={props.isInList ? styles.inList : styles.inGrid} to={getLessonUrl(props.id)}>
      {/* <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div> */}
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.header.title}</h3>
        {props._rawOverview && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawOverview} />
          </div>
        )}
        <div className={styles.date}>{format(props.createdAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview

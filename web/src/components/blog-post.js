import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost(props) {
  const {
    _rawOverview,
    authors,
    header: { title, level, duration, knowledge, compatibility },
    createdAt,
    objectives,
    keyVocabulary,
    resourcesEquipment,
    readings,
    planActivities,
    challenges,
  } = props

  return (
    <article className={styles.root}>
      {/* {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )} */}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <div>
              <p>{`Education Level: ${level}`}</p>
              <p>{`Lesson Duration: ${duration}`}</p>
            </div>
            <div>
              <p>{`Prerequisite Knowledge: ${knowledge}`}</p>
              <p>{`Device Compatibility: ${compatibility}`}</p>
            </div>
            {_rawOverview && <PortableText blocks={_rawOverview} />}
          </div>
          <aside className={styles.metaContent}>
            {createdAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(createdAt), new Date()) > 3
                  ? distanceInWords(new Date(createdAt), new Date())
                  : format(new Date(createdAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {objectives && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Objectives</h3>
                <ul>
                  {objectives.map(obj => (
                    <li key={obj._id}>{obj.description}</li>
                  ))}
                </ul>
              </div>
            )}

            {keyVocabulary && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Key Vocabulary</h3>
                <ul>
                  {keyVocabulary.map(voc => (
                    <li key={voc._id}>{voc.description}</li>
                  ))}
                </ul>
              </div>
            )}

            {resourcesEquipment && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Resources & Equipment</h3>
                <ul>
                  {resourcesEquipment.map(res => (
                    <li key={res._id}>{res.description}</li>
                  ))}
                </ul>
              </div>
            )}

            {readings && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Additional Reading</h3>
                <ul>
                  {readings.map(r => (
                    <li key={r._id}>{r.description}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost

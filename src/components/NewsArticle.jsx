import React from 'react';
import styles from './NewsArticle.module.css';

const NewsArticle = ({article}) => {
  return (
    <div className={styles.newsArticle}>
          <img src={article.urlToImage} alt={article.title} className={styles.articleImage} />
          <h2 className={styles.articleTitle}>{article.title}</h2>
          <p className={styles.articleDescription}>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener norefeerer" className={styles.readMoreLink}>Read more</a>
    </div>
  )
}

export default NewsArticle

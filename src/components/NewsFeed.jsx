import React from 'react';
import NewsArticle from './NewsArticle';
import './NewsFeed.module.css';

const NewsFeed = ({newsArticles}) => {
  return (
      <div className="newsFeed">
          {newsArticles.length > 0 ?(newsArticles.map((article, index) => (
              <NewsArticle key={index} article={article} />))
          ):(<p>LOADING....</p>)}
    </div>
  )
}

export default NewsFeed;

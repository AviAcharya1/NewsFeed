import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewsFeed from './components/NewsFeed';
import './App.css';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    fetchNewsArticles(selectedCategory, page);
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
  
      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCategory,page]);

  const fetchNewsArticles = async (category,page) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&page=${page}&apiKey=9ec30827116543edb1f1ec942c265272`);
      if (page === 1) {
        setNewsArticles(response.data.articles);
      } else {
        setNewsArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
    setNewsArticles([]);
  };

  return (
    <div className="container">
      <Header onSearch={setSearchTerm} />
      <Navigation selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
      <NewsFeed newsArticles={newsArticles} /> 
    </div>
  );
};

export default App;
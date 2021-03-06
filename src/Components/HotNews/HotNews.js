import React, { useEffect, useState } from 'react';
import News from '../News/News';

const HotNews = () => {
    const [articles, setArticles]=useState([])
    useEffect(()=>{
    const url='http://newsapi.org/v2/everything?q=tesla&from=2021-02-06&sortBy=publishedAt&apiKey=ec8c19aa2b964399a9e77e38cae7e73f'
    fetch(url)
    .then(res=>res .json())
    .then(data=>setArticles(data.articles))
    },[])
    return (
        <div>
            <h2>Top Headlines: {articles.length}</h2>
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
    );
};

export default HotNews;
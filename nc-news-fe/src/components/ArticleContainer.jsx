import { useEffect, useState } from "react"
import axios from 'axios'

import ArticleCard from "./ArticleCard"

const ArticleContainer = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("https://nc-news-a8e3.onrender.com/api/articles")
            .then(({data: {articles}}) => {
                setArticles(articles)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(articles);

    return (
        <>
            {articles.map(article => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
        </>
    )
}

export default ArticleContainer
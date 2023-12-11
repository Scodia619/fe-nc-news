import { useEffect, useState } from "react"
import getAllArticles from '../../api.js'

import ArticleCard from "./ArticleCard"

const ArticleContainer = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then((articles) => {
            setArticles(articles)
            setLoading(false)
        })
    }, []);

    if(loading){
        return <h1>Loading</h1>
    }

    return (
        <>
            {articles.map(article => {
                return <ArticleCard key={article.article_id} article={article} />
            })}
        </>
    )
}

export default ArticleContainer
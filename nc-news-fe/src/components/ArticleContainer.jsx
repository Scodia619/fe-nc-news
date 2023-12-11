import { useEffect, useState } from "react"
import {getAllArticles} from '../../api.js'

import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom"

const ArticleContainer = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then((article) => {
            setArticles(article)
            setLoading(false)
        })
    }, []);

    if(loading){
        return <h1>Loading</h1>
    }

    return (
        <>
            {articles.map(article => {
                return (
                    <Link key={article.article_id} to={`/${article.article_id}/${encodeURIComponent(article.title)}`}>
                        <ArticleCard article={article} />
                    </Link>
                )
            })}
        </>
    )
}

export default ArticleContainer
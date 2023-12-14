import { useEffect, useState } from "react"
import {getAllArticles, getArticlesWithQueries} from '../../api.js'
import {useParams, useSearchParams} from 'react-router-dom'

import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom"
import QueriesAndTopics from "./QueriesAndTopics.jsx"

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useState({params: {}})

    useEffect(() => {
        getArticlesWithQueries(params).then((article) => {
            setArticles(article);
            setLoading(false);
        });
    }, [params]);

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <>
        <QueriesAndTopics setParams={setParams} params={params}/>
            {articles.map((article) => {
                return (
                    <Link key={article.article_id} to={`/${article.topic}/${encodeURIComponent(article.article_id)}`}>
                        <ArticleCard article={article} />
                    </Link>
                );
            })}
        </>
    );
};

export default ArticleContainer
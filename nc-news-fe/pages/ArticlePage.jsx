import { useParams } from 'react-router-dom';
import {getArticleById} from '../api.js'
import { useEffect, useState } from 'react';

import ArticleContent from '../src/components/ArticleContent.jsx';
import ArticleVoting from '../src/components/ArticleVoting.jsx';
import CommentContent from '../src/components/CommentContent.jsx';

const ArticlePage = () => {

    const {article_id} = useParams();

    const [currentArticle, setCurrentArticle] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getArticleById(article_id).then(article => {
            setCurrentArticle(article)
            setLoading(false)
        })
    }, [])

    if(loading) return <h1>Loading</h1>

    return (
    <section className="d-flex flex-column">
        <ArticleContent currentArticle={currentArticle}/>
        <ArticleVoting currentArticle={currentArticle}/>
        <CommentContent/>
    </section>
    )
}

export default ArticlePage
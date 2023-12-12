import { useParams } from 'react-router-dom';
import {getArticleById, getCommentsByArticle} from '../api.js'
import { useEffect, useState } from 'react';

import ArticleContent from '../src/components/ArticleContent.jsx';
import ArticleVoting from '../src/components/ArticleVoting.jsx';
import CommentContent from '../src/components/CommentContent.jsx';

const ArticlePage = () => {

    const {article_id} = useParams();

    const [currentArticle, setCurrentArticle] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getArticleById(article_id).then(article => {
            setCurrentArticle(article)
            setLoading(false)
        })
        getCommentsByArticle(article_id).then(dbComments => {
            setComments(dbComments)
        })
    }, [])

    if(loading) return <h1>Loading</h1>

    return (
    <section className="d-flex flex-column">
        <ArticleContent currentArticle={currentArticle}/>
        <ArticleVoting currentArticle={currentArticle}/>
        <CommentContent comments={comments}/>
    </section>
    )
}

export default ArticlePage
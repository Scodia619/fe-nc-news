import { useParams } from 'react-router-dom';
import {getArticleById} from '../api.js'
import { useEffect, useState } from 'react';

import ArticleContent from '../src/components/ArticleContent.jsx';
import ArticleVoting from '../src/components/ArticleVoting.jsx';
import CommentContent from '../src/components/CommentContent.jsx';

const ArticlePage = () => {

    const {article_id} = useParams();

    const [currentArticle, setCurrentArticle] = useState([])
    console.log(currentArticle)

    useEffect(()=> {
        getArticleById(article_id).then(article => {
            setCurrentArticle(article)
        })
    }, [])

    return (
    <section>
        <ArticleContent currentArticle={currentArticle}/>
        <ArticleVoting currentArticle={currentArticle}/>
        <CommentContent/>
    </section>
    )
}

export default ArticlePage
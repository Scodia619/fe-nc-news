import { useParams } from 'react-router-dom';
import {getArticleById} from '../api.js'
import { useEffect, useState } from 'react';

import ArticleContent from '../src/components/ArticleContent.jsx';

const ArticlePage = () => {

    const {article_id} = useParams();

    const [currentArticle, setCurrentArticle] = useState([])
    console.log(currentArticle)

    useEffect(()=> {
        getArticleById(article_id).then(article => {
            setCurrentArticle(article)
        })
    }, [])

    return (<ArticleContent currentArticle={currentArticle}/>)
}

export default ArticlePage
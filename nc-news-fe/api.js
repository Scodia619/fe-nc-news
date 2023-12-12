import axios from 'axios'

const api = axios.create({
    baseURL: "https://nc-news-a8e3.onrender.com/api"})

export const getAllArticles = () => {
    return api.get("/articles")
        .then(res => res.data.articles)
};

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then(res => res.data.article)
};

export const getCommentsByArticle = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then(res => res.data.comments)
};

export const patchVotesByArticleId = (article_id, inc_votes) => {
    api.patch(`articles/${article_id}`, {inc_votes: inc_votes}).then(res => {
    }).catch(err => {
        alert(err)
    })
}

export const postCommentById = (article_id, comment) => {
    return api.post(`articles/${article_id}/comments`, comment).then(res=>{})
}
import axios from 'axios'

const api = axios.create({
    baseURL: "https://nc-news-a8e3.onrender.com/api"})

export const getAllArticles = () => {
    return api.get("/articles")
        .then(res => res.data.articles)
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error to handle it where the function is called
        });
};

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then(res => res.data.article)
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error to handle it where the function is called
        });
};
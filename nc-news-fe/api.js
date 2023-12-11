import axios from 'axios'

export const getAllArticles = () => {
    return axios.get("https://nc-news-a8e3.onrender.com/api/articles")
        .then(res => res.data.articles)
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error to handle it where the function is called
        });
};

export const getArticleById = (article_id) => {
    return axios.get(`https://nc-news-a8e3.onrender.com/api/articles/${article_id}`)
        .then(res => res.data.article)
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error to handle it where the function is called
        });
};

export default getAllArticles
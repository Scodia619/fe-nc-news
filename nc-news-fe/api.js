import axios from 'axios'

const getAllArticles = () => {
    return axios.get("https://nc-news-a8e3.onrender.com/api/articles")
        .then(res => res.data.articles)
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

export default getAllArticles;
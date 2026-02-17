import axios from "axios";

const url_string = "https://nc-news-backend-b1yp.onrender.com/api";

export function fetchArticles() {
  return axios
    .get(`${url_string}/articles`, { timeout: 5000 })
    .then((response) => {
      return response.data?.articles;
    });
}

export function fetchArticleById(article_id) {
  return axios.get(`${url_string}/articles/${article_id}`).then((response) => {
    const { topic, ...rest } = response.data.article;
    const capitalized = topic.charAt(0).toUpperCase() + topic.slice(1);
    return { topic: capitalized, ...rest };
  });
}

export function fetchTopics() {
  return axios.get(`${url_string}/topics`).then((response) => {
    return response.data?.topics;
  });
}

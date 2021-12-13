import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    Accept: 'application/vnd.github.v3.raw',
    Authorization: `Token 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`,
  },
});

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    Accept: 'application/vnd.github.v3.raw',
    Authorization: `Token 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`,
  },
});

export default api;
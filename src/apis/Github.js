import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    Accept: 'application/vnd.github.v3.raw',
    Authorization: `Token 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`,
  },
});

export default api;
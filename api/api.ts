import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red',
  responseType: 'json',
});

export const blogAPI = {
  getPosts() {
    return instance
      .get('/posts')
      .then((responce) => responce.data)
      .catch((err) => console.log(err));
  },
  deletePost(id: string) {
    return instance.delete(`/posts/${id}`);
  },
  createNewPost(title: string, body: string) {
    return instance.post('/posts', { title, body });
  },
};

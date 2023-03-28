import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
});

export const blogAPI = {
  async getPosts() {
    try {
      const responce = await instance.get('/posts');
      return responce.data;
    } catch (err) {
      return console.log(err);
    }
  },

  deletePost(id: string) {
    return instance.delete(`/posts/${id}`);
  },

  createNewPost(title: string, body: string) {
    return instance.post('/posts', { title, body });
  },
};

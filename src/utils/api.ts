import { Post } from "../types/Post";
import { User } from "../types/User";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// export const getPosts = async (limit: number, start: number): Promise<Post[]> => {
//   const response = await api.get(`/posts?_limit=${limit}&_start=${start}`);
//   return response.data;
// }

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get(`/posts`);
  return response.data;
}

export const getPost = async (id: number): Promise<Post> => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data;
}

export const addPost = async (data: Omit<Post, "id">) => {
  const response = await api.post('/posts', data);
  return response.data;
}
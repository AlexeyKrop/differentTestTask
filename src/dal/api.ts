import axios from "axios";


export const postApi = {
  getPosts(){
    return axios.get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts/')
  },
  createPost(title: string, body: string, userId: number){
    return axios.post<PostType>('https://jsonplaceholder.typicode.com/posts', { title, body, userId})
  },
  updatePost(id: number, title: string, body: string, userId: number){
    return axios.put<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`, {title, body, userId})
  },
  deletePost(id: number){
    return axios.delete<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}

//Type
export type PostType = {
  id: number
  title: string
  body: string
  userId: number
}

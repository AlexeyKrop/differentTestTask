import axios from "axios";


export const postApi = {
  getPosts(){
    return axios.get<ResponseType>('https://jsonplaceholder.typicode.com/posts/')
  },
  createPost(title: string, body: string, userId: number){
    return axios.post<PostType>('https://jsonplaceholder.typicode.com/posts', { title, body, userId})
  },
  updatePost(id: number){
    return axios.put<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  },
  deletePost(id: number){
    return axios.delete<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}

//Type
type PostType = {
  id: number
  title: string
  body: string
  userId: number
}
type ResponseType = {
  posts: Array<PostType>
}
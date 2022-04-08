import axios from 'axios';

const url = 'http://localhost:5000/posts'


export const fetchPosts = () =>{
    axios.get(url).then((response) =>{
        return response.data
    } ) 
} 


export const createPost = (newPost) =>{
    axios.post(url,newPost)
} 

export const updatedPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)


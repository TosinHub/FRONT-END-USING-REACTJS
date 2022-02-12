import axios from 'axios';

const url = 'http://localhost:5000/posts'


export const fetchPosts = () =>{
    axios.get(url).then((response) =>{
        return response.data
    } ) 
} 
fetchPosts()

export const createPost = (newPost) =>{
    axios.post(url,newPost)
} 


//const data =    await axios.get(url)

//console.log(data)
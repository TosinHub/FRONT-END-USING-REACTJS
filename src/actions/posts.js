import * as api from '../api'

import axios from 'axios';

const url = 'http://localhost:5000/posts'


//Action creators

export const getPosts =  () => async(dispatch) => {
    try {
     //   const {data} = await api.fetchPosts ;
    //   console.log(data)


      await axios.get(url).then((response) =>{
         // console.log(response.data)
         dispatch({ type: 'FETCH_ALL', payload: response.data})
    } )
      
    } catch (error) {
        console.log(error.message)
    }
  

   
}

export const createPost =  (post) => async(dispatch) => {
    try {
        const data = await api.createPost(post) ;
          
       dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        
    }
  
}

getPosts();
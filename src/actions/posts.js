//import * as api from '../api'

import axios from 'axios';

const url = 'http://localhost:5000/posts'


//Action creators

export const getPosts =  () => async(dispatch) => {
    try {
     //const {data} = await api.fetchPosts ;
    //   console.log(data)


      await axios.get(url).then((response) =>{
       
         dispatch({ type: 'FETCH_ALL', payload: response.data})
    } )
      
    } catch (error) {
        console.log(error.message)
    }
  

   
}

export const createPost =  (post) => async(dispatch) => {
    try {

       
        const data = await  axios.post(url,post);
          
       dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        
    }
  
}


export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const data = await axios.patch(`${url}/${id}`, post)
        console.log(data)
        dispatch({type : "UPDATE", payload: data})
         
    } catch (error) {
        console.log(error)
    }
}

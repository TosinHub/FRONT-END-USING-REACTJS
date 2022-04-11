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

export const createPost = (post) => async(dispatch) => {
    try {

       
        const {data} = await  axios.post(url,post);
          
       dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        
    }
  
}


export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const {data} = await axios.patch(`${url}/${id}`, post)
      
        dispatch({type : "UPDATE", payload: data})
         
    } catch (error) {
        console.log(error)
    }
}



export const deletePost = (_id) => async (dispatch) =>{
    try {
        await axios.delete(`${url}/${_id}`)
     
        dispatch({type : "DELETE", payload: _id})
         
    } catch (error) {
        console.log(error)
    }
}



export const likePost = (_id) => async (dispatch) =>{
    try {
       const {data} =  await axios.delete(`${url}/${_id}/likePost`)

       dispatch({type : "LIKE", payload: data})
     
         
    } catch (error) {
        console.log(error)
    }
}

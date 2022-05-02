
import API from "./api"




//Action creators

export const getPosts =  () => async (dispatch) => {
    try {
     //const {data} = await api.fetchPosts ;
    //   console.log(data)


      await API.get('/posts').then((response) =>{
       
         dispatch({ type: 'FETCH_ALL', payload: response.data})
    } )
      
    } catch (error) {
        console.log(error.message)
    }
  

   
}

export const createPost = (post) => async(dispatch) => {
    try {

       //console.log(post)
        const {data} = await  API.post('/posts',post);
          
       dispatch({ type: 'CREATE', payload: data})
     
    } catch (error) {
        console.log(error)
    }
  
}


export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const {data} = await API.patch(`posts/${id}`, post)
      
        dispatch({type : "UPDATE", payload: data})
         
    } catch (error) {
        console.log(error)
    }
}



export const deletePost = (_id) => async (dispatch) =>{
    try {
        await API.delete(`posts/${_id}`)
     
        dispatch({type : "DELETE", payload: _id})
         
    } catch (error) {
        console.log(error)
    }
}



export const likePost = (_id) => async (dispatch) =>{
    try {
       const {data} =  await API.delete(`posts/${_id}/likePost`)

       dispatch({type : "LIKE", payload: data})
     
         
    } catch (error) {
        console.log(error)
    }
}

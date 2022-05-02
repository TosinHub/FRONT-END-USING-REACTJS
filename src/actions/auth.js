import API from "./api"




export const signin =(formData,history) => async (dispatch) =>{
    try {   
    const {data} = await API.post('/user/signin', formData)
        console.log(data)
    dispatch({ type: 'AUTH', data})

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


export const signup =(formData,history) => async (dispatch) =>{
    try {
        const {data} = await API.post('user/signup', formData)
        //console.log(data)
        dispatch({ type: 'AUTH', data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
import axios from 'axios';

const url = 'http://localhost:5000/user'

export const signin =(formData,history) => async (dispatch) =>{
    try {   
    const {data} = await axios.post(`${url}/signin`, formData)
        console.log(data)
    dispatch({ type: 'AUTH', data})

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
export const signup =(formData,history) => async (dispatch) =>{
    try {
        const {data} = await axios.post(`${url}/signup`, formData)

        dispatch({ type: 'AUTH', data})
    } catch (error) {
        
    }
}
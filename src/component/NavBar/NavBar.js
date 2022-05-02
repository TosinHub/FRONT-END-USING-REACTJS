import React from "react";
import {Link,useHistory, useLocation} from 'react-router-dom'
import {AppBar, Avatar, Toolbar, Typography,Button} from "@material-ui/core";
import decode from 'jwt-decode'
import Memories from '../../images/img.jpg'
import { useDispatch } from "react-redux";


import useStyle from './style'


const Navbar = () => {

    const classes = useStyle()
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()


    
    React.useEffect(() =>{
        const token = user?.token

        if(token){
            const decodeToken = decode(token)
            if (decodeToken.exp * 1000 < new Date().getTime()) logOut()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


    const logOut = () =>{

        dispatch({type:'LOGOUT'})
        history.push('/')
        window.location.reload();
        setUser(null)
    }
    
    return(
   
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <div  className={classes.brandContainer}>
            <Typography className='classes.heading' variant = "h2" align = "center" component={Link} to="/">Memories</Typography>
              <img  className={classes.img} src={Memories} alt="Memories" height='50px' width='50px'  />
                    </div>
            <Toolbar className={classes.toolbar} ></Toolbar>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="6" >{user.result.name}</Typography>
                        <Button variant="contained" className="classes.logout" color='secondary' onClick={logOut}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
          </AppBar>
  
    )
}

export default Navbar 
import React from "react";
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from "react-redux";

import Memories from './images/img.jpg'

import {getPosts} from './actions/posts'
import Posts from './component/Posts/Posts.js'
import Form from './component/Form/Form.js'
import useStyles from  './styles'



const App = () =>{

    const classes = useStyles();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getPosts())
    }, [dispatch])

    return (
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className='classes.heading'variant = "h2" align = "center">Memories</Typography>
              <img  className={classes.img} src={Memories} alt="Memories" height='50px' width='50px'  />

          </AppBar>
          <Grow in>
              <Grid container justify="space-between" alignItems="stretch" spacing="3">

                  <Grid item xs={12} sm={7}>
                      <Posts />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <Form />
                  </Grid>
              </Grid>
          </Grow>
      </Container>
    )
}


export default App;
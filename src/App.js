import React from "react";
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Memories from './images/img.jpg'

import Posts from './components/Posts/Posts.js'
import Form from './components/Posts/Form.js'


const App = () =>{
    return (
      <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
              <Typography variant = "h2" align = "center">Memories</Typography>
              <img src={Memories} alt="Memories"  />

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
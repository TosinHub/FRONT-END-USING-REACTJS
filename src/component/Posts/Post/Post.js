import React  from "react";

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import {ThumbUpAltIcon} from '@material-ui/icons/ThumbUpAlt'
import useStyles from  './style'

import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'



const Post = ({post}) =>{
  const classes = useStyles();

    return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div>

        </div>

    </Card>
    )
}

export default Post;
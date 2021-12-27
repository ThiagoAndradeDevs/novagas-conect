import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';



const useStyles = makeStyles((theme) => {
  {

  }
})


function PostCard({ post }) {
  const classes = useStyles();

  return (
    <h1>{post.description}</h1>
  )
};
export default PostCard;

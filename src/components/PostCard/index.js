/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';





const useStyles = makeStyles((theme) => {
  root: {
    marginBotton: theme.spacing(2)
  }




})


function PostCard({ post }) {
  const classes = useStyles();


  return (

    <Card className={classes.root}>
      <CardHeader

        title={<Typography variant="h4">{post.title}</Typography>} subheader={
          <Typography variant='caption' title={post.id}>{'Nova Gas Conect'}</Typography>}


      >

      </CardHeader>
      <CardContent>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
};
export default PostCard;

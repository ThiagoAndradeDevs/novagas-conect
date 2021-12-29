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

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: "center"
  }
}))



function PostCard({ post }) {
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <div><h1>{post.description}</h1>
        <CardHeader
          title={<Typography variant="h6">{post.title}</Typography>}

        />
        <CardContent>

        </CardContent>
        <CardActions>

        </CardActions>
      </div>
    </Card>

  )
}

export default PostCard;
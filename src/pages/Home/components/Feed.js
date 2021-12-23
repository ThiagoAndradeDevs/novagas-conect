import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {


  }
}))
const posts = [
  { id: 1, description: ' Peça seu Gas ' },
  { id: 2, description: ' Seja Vip ' },
  { id: 3, description: ' Deposito 24 Horas ' },
  { id: 4, description: ' Entregas de segunda a sabado 7 hs às 19 : 30 Horas ' },
  { id: 5, description: ' Domingos e Feriados até às 13 : 30 Horas  ' }

]

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}
export default Feed;
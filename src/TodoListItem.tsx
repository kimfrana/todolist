import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    }),
  );

  
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button>
      <ListItemText style= {{textDecoration: todo.complete? 'line-through':undefined}}>
        <Checkbox
        color="primary"
        defaultChecked={todo.complete}
        onClick={() => {
          toggleTodo(todo);
        }}
        /> {''} 
        {todo.text}
      </ListItemText>
      </ListItem>
    </List>
  )
};



import React, {useState} from 'react';
import style from './style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconPlus from '@fortawesome/fontawesome-free/svgs/solid/plus.svg'


interface Props {
    addTodo: AddTodo;
}


export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');
 
    return (
        <form noValidate autoComplete="off">
            <TextField
            id="outlined-basic" 
            label="Add nota.." 
            variant="outlined"
            type="text"
            value={text}
            onChange={e => {
                setText(e.target.value);
            }}
            />
            <Button
            css={style.btn}
            variant="contained" 
            color="primary" 
            type="submit"
            onClick={e => {
                e.preventDefault();
                addTodo(text);
                setText('');
            }}
            >
                Add
            </Button>
        </form>
    )
};
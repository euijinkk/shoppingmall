import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IProduct } from '../../types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

interface Props {
  title: string;
  handleChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  form: IProduct;
}

export default function BasicTextFields({ title, handleChange, form }: Props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField id="standard-basic" label="Standard" /> */}
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField
        id="outlined-basic"
        InputLabelProps={{
          shrink: true,
        }}
        name={title}
        type="text"
        label={title}
        variant="outlined"
        onChange={handleChange}
        // defaultValue={title==="title" ? title2 : price2}
        defaultValue={form[title] ? form[title] : ''}
      />
    </form>
  );
}

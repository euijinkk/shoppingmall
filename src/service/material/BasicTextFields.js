import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({title, handleChange, form}) {
  const classes = useStyles();
  // console.log(form);
  // console.log(form.title);
  console.log(form[title]);
  const title2 = form.title;
  const price2 = form.price;
  console.log(title2);
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
        defaultValue={form[title] ? form[title] : ""}
      />
    </form>
  );
}

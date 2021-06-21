import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
  },
}));

export default function MultilineTextFields({handleChange, form}) {
  const classes = useStyles();

  return (
    <Form className={classes.root} noValidate autoComplete="off">
        <TextField2
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          placeholder="내용을 입력하세요."
          variant="outlined"
          name="description"
          onChange={handleChange}
          defaultValue={form.description ? form.description : ""}
        />
    </Form>
  );
}

const Form = styled.form`
    width:700px;
    font-size:16px;
    text-align:center;
`

const TextField2 = styled(TextField)`
`
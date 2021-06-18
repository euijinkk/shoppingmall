import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomizedSelects({handleRegist}) {
  const classes = useStyles();

  const handleChange = (event) => {
    handleRegist(event)
  };

  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          name="category"
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="상의">상의</MenuItem>
          <MenuItem value="하의">하의</MenuItem>
          <MenuItem value="신발">신발</MenuItem>
          <MenuItem value="악세서리">악세서리</MenuItem>
        </Select>
      </FormControl>
  );
}
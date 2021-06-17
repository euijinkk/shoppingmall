import React from 'react';
import styled from 'styled-components';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  
  // Inspired by blueprintjs
  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

const RegisterPage = () => {
  return (
    <RegisterWrapper>
      <div className="input--data">
        <span>
          제목 <input type="text" />
        </span>
        <span>카테고리</span>
        <span>가격 </span>
        <span className="delivery">
          <span className="delivery--text">배송비</span>
          <RadioGroup2
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel2
              value="female"
              control={<StyledRadio />}
              label="Female"
            />
            <FormControlLabel2
              value="male"
              control={<StyledRadio />}
              label="Male"
            />
          </RadioGroup2>
        </span>
      </div>
      <input type="file" />
      <textarea />
    </RegisterWrapper>
  );
};

export default RegisterPage;

const RadioGroup2 = styled(RadioGroup)`
    /* display:grid; */
    /* grid-template-columns: repeat(2,80px); */
`

const FormControlLabel2 = styled(FormControlLabel)`
/* margin:0;
/* .PrivateSwitchBase-input-7 */
/* .MuiButtonBase-root */
/* .MuiIconButton-label */
    width:auto;
    margin:0;
    /* width: 20px;
    margin:0;
    .MuiIconButton-label{
        width:1px;
    }
    .MuiButtonBase-root{
        margin:0;
    } */
`

const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .input--data {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(2, 80px);

    .delivery{
        display:flex;
        align-items: center;
        &--text{
            margin-right:20px;
        }
    }
  }
`;

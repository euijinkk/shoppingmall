import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import BasicTextFields from '../service/material/BasicTextFields';
import CustomizedRadios from '../service/material/CustomizedRadios';
import CustomizedSelects from '../service/material/CustomizedSelects';
import MultilineTextFields from '../service/material/MultilineTextFields';
import { loginMailState, productDataState, registerTempState, userProductDataState } from '../states';

const RegisterPage = () => {
  const history = useHistory();
  const loginMail = useRecoilValue(loginMailState);
  const productData = useRecoilValue(productDataState);
  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState();

  const [form, setForm] = useState({
    id: 0,
    title: '',
    img: '',
    description: '',
    price: '',
    delivery: '',
    category: '',
    review: [],
  });

  useEffect(()=>{
    console.log(previewURL)
  }, [previewURL]
  )

  useEffect(() => {
    setForm({
      ...form, id: productData[loginMail] ? productData[loginMail].product.length : 1
    })
  }, [])

  const handleRegist = (event) => {
    event.preventDefault();
    const name = event.target.name;
    if (name !=="img") {
    setForm({
      ...form, [name]: event.target.value
    })
  } else {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (e) => {
      setPreviewURL(reader.result);
      setForm({...form, img:reader.result})
    };
    if (file) reader.readAsDataURL(file);
  }
  };

  return (
    <RegisterWrapper>
      <div className="input--data">
        <span className="title container">
          <span>제목</span> <BasicTextFields title="title" type="text" handleRegist={handleRegist} />
        </span>
        <span className="category container">
          <span>카테고리</span>
          <CustomizedSelects handleRegist={handleRegist}  />
        </span>
        <span className="price container">
          <span>가격</span> <BasicTextFields title="price" type="number" handleRegist={handleRegist}  />
          <span>원</span>
        </span>
        <span className="delivery container">
          <span className="delivery--text">배송비</span>
          <CustomizedRadios handleRegist={handleRegist} />
        </span>
      </div>
      <input type="file" name="img" onChange={handleRegist} />
      {previewURL && <img src={previewURL} alt="" width="200px" height="200px" />  }
      <MultilineTextFields handleRegist={handleRegist} />
      <div>
        <span className="registBtn" onClick={handleRegist}>
          등록
        </span>
        <span className="cancelBtn" onClick={() => history.goBack()}>
          취소
        </span>
      </div>
    </RegisterWrapper>
  );
};

export default RegisterPage;

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
    .container {
      display: flex;
      align-items: center;
    }
    .price {
    }

    .delivery {
      display: flex;
      align-items: center;
      &--text {
        margin-right: 20px;
      }
    }
  }
  .registBtn {
    margin-right: 10px;
  }

  .registBtn,
  .cancelBtn {
    cursor: pointer;
    font-size: 20px;
    background-color: skyblue;
    color: white;
    border: 1px solid transparent;
    border-radius: 8px;
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
  }
`;

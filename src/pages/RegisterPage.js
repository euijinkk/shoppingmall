import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { createProductData } from '../lib/api/client';
import {
  BasicTextFields,
  CustomizedRadios,
  CustomizedSelects,
  MultilineTextFields,
} from '../service';
import { loginMailState, productDataState } from '../states';

const RegisterPage = () => {
  const history = useHistory();
  const location = useLocation();
  const loginMail = useRecoilValue(loginMailState);
  const [productData, setProductData] = useRecoilState(productDataState);
  const [previewURL, setPreviewURL] = useState();
  const [form, setForm] = useState(
    location.state
      ? location.state.data[0]
      : {
          id: 0,
          title: '',
          img: '',
          description: '',
          price: 0,
          delivery: '무료배송',
          category: '',
          review: [],
        },
  );

  // const [form, setForm] = useState({
  //   id: 0,
  //   title: '',
  //   img: '',
  //   description: '',
  //   price: 0,
  //   delivery: '무료배송',
  //   category: '',
  //   review: [],
  // });

  // console.log(location.state.data);
  // useEffect(() => {
  //   location.state && setForm(location.state.data[0]);
  // }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setForm({
      ...form,
      [name]: event.target.value,
    });
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = (e) => {
      setPreviewURL(reader.result);
      setForm({ ...form, img: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleRegist = async () => {
    let newData;
    let newData2;
    let willGo;
    if (form.id !== 0) {
      newData = productData[loginMail].product.map((item) =>
        item[0].id === form.id ? [form] : item,
      );
      willGo = '/my';
    } else {
      const newOne = {
        ...form,
        id: productData[loginMail]
          ? productData[loginMail].product.length + 1
          : 1,
      };
      setForm(newOne);
      newData = productData[loginMail].product
        ? productData[loginMail].product.concat([[newOne]])
        : [[newOne]];
      willGo = '/';
    }
    newData2 = {
      ...productData,
      [loginMail]: { ...productData[loginMail], product: newData },
    };
    const newData3 = await createProductData(newData2);
    setProductData(newData3);
    history.push(willGo);
  };

  return (
    <RegisterWrapper>
      <div className="input--data">
        <span className="title container">
          <span>제목</span>{' '}
          <BasicTextFields
            title="title"
            handleChange={handleChange}
            form={form}
          />
        </span>
        <span className="category container">
          <span>카테고리</span>
          <CustomizedSelects handleChange={handleChange} form={form} />
        </span>
        <span className="price container">
          <span>가격</span>{' '}
          <BasicTextFields
            title="price"
            handleChange={handleChange}
            form={form}
          />
          <span>원</span>
        </span>
        <span className="delivery container">
          <span className="delivery--text">배송비</span>
          <CustomizedRadios handleChange={handleChange} form={form} />
        </span>
      </div>
      <input type="file" name="img" onChange={handleImageUpload} />
      {form.img ? (
        <img src={form.img} alt="" width="200px" height="200px" />
      ) : (
        previewURL && (
          <img src={previewURL} alt="" width="200px" height="200px" />
        )
      )}
      <MultilineTextFields handleChange={handleChange} form={form} />
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

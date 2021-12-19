import React, { useState, useCallback } from 'react';
import style from './SignIn.scss';
import { signin } from '../../service/api/auth';
import { Link } from 'react-router-dom';

const SignIn = ({history, location}) => {
  const [signinInfo, setSigninInfo] = useState({
    email: '',
    password: '',
  });

  const handleSignInSubmit = useCallback((e, i, name) => {
    if (!signinInfo.email || !signinInfo.password) {
      alert('⛔ 로그인/비밀번호를 입력해주세요.');
      return;
    }

    const signInRequest = {
      email: signinInfo.email,
      password: signinInfo.password,
    };

    signin(signInRequest)
      .then(function (response) {
        alert("로그인 성공!");
        history.push('/');
      })
      .catch(() => {
        alert(
          '⛔ 입력한 아이디와 비밀번호가 일치하지 않습니다. 아이디 또는 비밀번호를 다시 한번 입력해 주세요.',
        );
      });

  });
  return (
    <>
    <div className="signin-container">
      <div className="signin-input">
        <h1>SignIn Page</h1>
        <input
          className="signin-input"
          type="text"
          name="query"
          placeholder="email"
          onChange={(e) =>
            setSigninInfo({
              ...signinInfo,
              email: e.target.value,
            })
          }
        />

        <input
          className="signin-input"
          type="password"
          name="query"
          placeholder="password"
          onChange={(e) =>
            setSigninInfo({
              ...signinInfo,
              password: e.target.value,
            })
          }
        />
        <div className="signin-btn" onClick={handleSignInSubmit}>
          <p>로그인</p>
        </div>
        <Link to="/signup">
          <div className="signin-btn">
            <p>회원가입</p>
          </div>
        </Link>

      </div>

    </div>
    </>
  );
};

export default SignIn;

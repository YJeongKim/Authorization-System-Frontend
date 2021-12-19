import React, { useState, useCallback } from 'react';
import style from './SignUp.scss';
import { signup, emailAuth } from '../../service/api/auth';

const SignUp = ({history, location}) => {
  const [emailAuth, setEmailAuth] = useState({
    success: false
  });

  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    name: '',
    nickname: '',
  });

  const handleEmailAuthSubmit = (e) => {
    if (!verifyEmptyValue(signUpInfo.email, '이메일을 입력해주세요.')) {
      return;
    }
    const emailAuthRequest = {
      email: signUpInfo.email
    };

    const successSignup = () => {
      alert("✅ 입력하신 이메일에 인증 URL을 전송하였습니다.\n전송까지 최대 3분의 시간이 소요될 수 있습니다.)");
      setEmailAuth({
        ...emailAuth,
        success: true,
      })
    }

    const errorSignup = () => {
      alert(
        '⛔ 이메일 인증에 실패하였습니다. 입력하신 정보가 맞는지 확인해주세요.',
      );
    };
    
    emailAuth(emailAuthRequest, successSignup, errorSignup);
  }
  
  const handleSignUpSubmit = (e) => {
    if (!emailAuth.success) {
      alert(
        '⛔ 이메일 인증을 진행해주세요.',
      );
    }
    if (
      !verifyEmptyValue(signUpInfo.email, '이메일을 입력해주세요.') ||
      !verifyEmptyValue(signUpInfo.password, '비밀번호를 입력해주세요.') ||
      !verifyEmptyValue(signUpInfo.name, '이름을 입력해주세요.') ||
      !verifyEmptyValue(signUpInfo.nickname, '닉네임을 입력해주세요.')
    ) {
      return;
    }

    const signUpRequest = {
      email: signUpInfo.email,
      password: signUpInfo.password,
      name: signUpInfo.name,
      nickname: signUpInfo.nickname,
    };

    const successSignup = () => {
      alert("✅ 회원가입에 성공하셨습니다.\n(잠시후 로그인 페이지로 이동합니다.)");
      setTimeout(() => history.push('/signin'), 2000);
    }

    const errorSignup = () => {
      alert(
        '⛔ 회원가입에 실패하였습니다. 입력하신 정보가 맞는지 확인해주세요.',
      );
    };

    signup(signUpRequest, successSignup, errorSignup);
  };

  const verifyEmptyValue = (value, text) => {
    if (value === '' || value === null) {
      alert(`⛔ ${text}`);
      return false;
    }

    return true;
  };

  return (
    <>

    <div className="signup-container">
      <div className="signup-input">
        <h1>SignUp Page</h1>

        <div className="signup-input-title">
          <p>email</p>
        </div>
        <input
          type="text"
          name="query"
          placeholder="email"
          onChange={(e) =>
            setSignUpInfo({
              ...signUpInfo,
              email: e.target.value,
            })
          }
        />
        <div className="signup-email-btn" onClick={handleEmailAuthSubmit}>
          <p>이메일 인증</p>
        </div>

        <div className="signup-input-title">
          <p>password</p>
        </div>
        <input
          type="password"
          name="query"
          placeholder="password"
          onChange={(e) =>
            setSignUpInfo({
              ...signUpInfo,
              password: e.target.value,
            })
          }
        />

        <div className="signup-input-title">
          <p>name</p>
        </div>
        <input
          type="text"
          name="query"
          placeholder="name"
          onChange={(e) =>
            setSignUpInfo({
              ...signUpInfo,
              name: e.target.value,
            })
          }
        />

        <div className="signup-input-title">
          <p>nickname</p>
        </div>
        <input
          type="text"
          name="query"
          placeholder="nickname"
          onChange={(e) =>
            setSignUpInfo({
              ...signUpInfo,
              nickname: e.target.value,
            })
          }
        />

        <div className="signup-btn" onClick={handleSignUpSubmit}>
          <p>회원가입</p>
        </div>

      </div>
      
    </div>

    </>
  )
};

export default SignUp;
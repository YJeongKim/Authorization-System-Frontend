import { client } from './client';

const signin = async (signInRequest) => {
  return await client.post(`auth/token`, signInRequest, {
    headers: {
      'Content-Type': `application/json`,
    },
  });
};

const signup = async (signUpRequest, success, error) => {
  return await client
    .post(`users/signup`, signUpRequest, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
    .then(success)
    .catch(error);
};

const emailAuth = async (emailAuthRequst, success, error) => {
  return await client
    .post(`auth/email`, emailAuthRequst, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
    .then(success)
    .catch(error);
};

export {
  signin,
  signup,
  emailAuth
};
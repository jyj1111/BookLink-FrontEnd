import { axiosJsonInstance } from './config/axios';

// [ 회원가입 ]
export const signUp = async (user) => {
  try {
    const { data } = await axiosJsonInstance.post(`/members/register`, user);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

// [ 이메일 인증 코드 ]
export const emailAuth = async (email) => {
  try {
    const { data } = await axiosJsonInstance.post(`/members/email/email-auth`, {
      email,
      authentication_number: null,
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
// [ 이메일 인증 코드 확인]
export const AuthNumConfirm = async (email, num) => {
  try {
    const { data } = await axiosJsonInstance.post(`/members/email/confirm`, {
      email,
      authentication_number: num,
    });
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

//[ 이메일 중복 체크 ]
export const emailDoubleCheck = async (email) => {
  try {
    const { data } = await axiosJsonInstance.post(
      'members/email/double-check',
      {
        email,
        authentication_number: null,
      }
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

//[ 닉네임 중복 체크 ]
export const nicknameDoubleCheck = async (nickname) => {
  try {
    const { data } = await axiosJsonInstance.post(
      'members/nickname/double-check',
      nickname
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

// [ 로그인 ]
export const login = async (user) => {
  try {
    const response = await axiosJsonInstance.post(`/members/login`, user);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

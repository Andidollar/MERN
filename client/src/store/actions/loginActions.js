import Axios from "axios";
import jwt_decode from "jwt-decode";

export default function loginNow(body) {
    return dispatch => {
        Axios
                .post("http://localhost:5000/login", {
                email: body.email,
                password: body.password
            })
                .then(res => {
                    console.log(res);
                    localStorage.setItem("token", res.data.token);
                    // console.log('res.data.token', res.data.token)
                    const decoded = jwt_decode(res.data.token);
                  
                    // localStorage.getItem("token")
                    dispatch(loginSuccess(res.data, decoded));
                    // localStorage.setItem("token", res.data.token);
                })
                .catch(err => {
                    console.log(err.response.data);
                    dispatch(loginFail(err.response.data))
                });
    }
}

export function loginSuccess(payload, decoded) {
  console.log("here", payload, decoded)
    return {
      type: "LOGIN_SUCCESS",
      success: true,
      isLoggedIn: true,
      isError: false,
      error: false,
      username: decoded.username,
      _id: decoded._id,
      token: payload.token
    };
  }

  // export function socialUser() {
  //   return dispatch => {
  //   Axios
  //     .post("/google/redirect", userData)
  //     .then(res => {
  //       const { token } = res.data;
  //       sessionStorage.setItem("token", token);
  //       const decoded = jwt_decode(token);
  //       dispatch(loginSocial(decoded));
  //     })
  //     .catch(err => console.log(err));
  // }};

  // export function loginSocial(payload, decoded) {
  //   console.log("here Google", payload, decoded)
  //     return {
  //       username: decoded.username
  //     };
  //   }

  export function loginFail(payload) {
    console.log(payload)
    return {
      type: "LOGIN_FAIL",
      isLoggedIn: false,
      message: payload,
      isError: true,
      error: true,
      userEmail: null
    };
  }

  export function logOut() {
    localStorage.removeItem("token");
    // localStorage.removeItem("userEmail");
    return {
      type: "LOG_OUT",
      isLoggedIn: false,
      error: false,
      userEmail: null
    };
  }
  

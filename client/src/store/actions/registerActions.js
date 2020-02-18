import Axios from "axios";

export default function registerNow(body) {
    return dispatch => {
        Axios
                .post("http://localhost:5000/users", {
                    picture: body.picture,
                    username: body.username,
                    email: body.email,
                    password: body.password
            })
                .then(res => {
                    console.log(res);
                    dispatch(registerSuccess(res.data));
                })
                .catch(err => {
                    console.log(err.response);
                    dispatch(registerFail(err.response))
                });
    }
}

export function registerSuccess() {
    return {
      type: "REGISTER_SUCCESS",
      isRegistered: true
    };
  }

  export function registerFail(payload) {
    return {
      type: "REGISTER_FAIL",
      error: payload.data,
      isError: true
    };
  }
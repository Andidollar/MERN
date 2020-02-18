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
                    console.log(err.response.data);
                    dispatch(registerFail(err.response.data))
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
   console.log(payload)
    return {
      type: "REGISTER_FAIL",
      isRegistered: false,
      error: true,
      status: 500,
      message: payload,
      isError: true
    };
  }
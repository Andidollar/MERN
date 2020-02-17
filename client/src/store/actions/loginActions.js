import axios from "axios";

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
                    dispatch(loginSuccess(res.data));
                })
                .catch(err => {
                    console.log(err.response);
                    dispatch(loginFail(err.response))
                });
    }
}

export function loginSuccessful(payload) {
    return {
      type: "LOGIN_SUCCESS",
      isLoggedIn: true,
      error: false,
      userEmail: payload.email,
      userName: payload.username,
    };
  }

  export function loginFail(payload) {
    return {
      type: "LOGIN_FAIL",
      isLoggedIn: false,
      error: true,
      userEmail: null,
      userName: null
    };
  }

  export function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    return {
      type: "LOG_OUT",
      isLoggedIn: false,
      error: false,
      userEmail: null,
      userName: null
    };
  }
  

// export const fetchItineraries = city_id => dispatch => {
// fetch('http://localhost:5000/itineraries/' + city_id)
// .then(res => res.json())
// .then((data) => {
//     // console.log(data)
//     dispatch({
//         type: "FETCH_ITINERARIES",
//         payload: data
//     })
//     // console.log(data)
//     // console.log({itineraries: data})
//     // this.setState({cities: data})
// })
// .catch(console.log)}
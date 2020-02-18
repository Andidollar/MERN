import Axios from "axios";

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

export function loginSuccess(payload) {
    return {
      type: "LOGIN_SUCCESS",
      isLoggedIn: true,
      isError: false,
      error: false,
      userEmail: payload.email
    };
  }

  export function loginFail(payload) {
    return {
      type: "LOGIN_FAIL",
      isLoggedIn: false,
      error: payload.data,
      isError: true,
      userEmail: null
    };
  }

  export function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    return {
      type: "LOG_OUT",
      isLoggedIn: false,
      error: false,
      userEmail: null
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
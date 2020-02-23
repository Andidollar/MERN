export const fetchAll = () => dispatch => {
fetch('http://localhost:5000/cities/all')
.then(res => res.json())
.then((data) => {
    // console.log(data)
    dispatch({
        type: "FETCH_ALL",
        payload: data
    })
    console.log(data)
    console.log({cities: data})
    // localStorage.setItem("token", this.props.login.token)
    // this.setState({cities: data})
})
.catch(console.log)}
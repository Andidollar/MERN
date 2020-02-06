
export const fetchAll= () => dispatch => {
fetch('http://localhost:5000/cities/all')
.then(res => res.json())
.then((data) => {
    dispatch({
        type: "FETCH_CITIES",
        payload: data
    })
    console.log(data)
    this.setState({cities: data})
})
.catch(console.log)}
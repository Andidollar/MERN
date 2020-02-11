export const fetchItineraries = city_id => dispatch => {
fetch('http://localhost:5000/itineraries/' + city_id)
.then(res => res.json())
.then((data) => {
    // console.log(data)
    dispatch({
        type: "FETCH_ITINERARIES",
        payload: data
    })
    console.log(data)
    console.log({itineraries: data})
    // this.setState({cities: data})
})
.catch(console.log)}
export const fetchAll = () => dispatch => {
fetch('http://localhost:5000/cities/all')
.then(res => res.json())
.then((data) => {
    console.log('data', data)
    dispatch({
        type: "FETCH_ALL",
        payload: data
    })
    console.log(data)
    console.log({cities: data})
    //this.setState({cities: data})
})
.catch(console.log)}

// export function fetchAll() {
//     return dispatch => {
//       dispatch(fetchAllBegin());
//       return fetch("http://localhost:5000/cities/all")
//         .then(handleErrors)
//         .then(res => res.json())
//         .then(data => {
//           dispatch(fetchAllSuccess(data));
//           return data;
//         })
//         .catch(error => dispatch(fetchAllFailure(error)));
//     };
//   }

// export function fetchAll () {
//     return (dispatch, getState) => {
//         // contains the current state object
//         const state = getState();

//        // get token
//        const token = state.some.token;

//         dispatch(requestPosts(subreddit));

//         // Perform the API request
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())

//             // Then dispatch the resulting json/data to the reducer
//             .then(json => dispatch(receivePosts(subreddit, json)))
//     }
// }
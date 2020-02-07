import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// const filteredCitie = cities.filter(element => {input})

const Cities = ({cities, input}) => {
    console.log(input)
    console.log('cities', cities)
    const onChangeHandler = (e) => {
        console.log(e)
        console.log(this.state)
        this.setState({input: e.target.value})
        filterCities()

    }
    const filterCities = () => {
        console.log("hi")

        const filteredCities = cities
            .filter(city => {
                return city
                    .name
                    .toLowerCase()
                    .startsWith(this.state.input.toLowerCase())
            })
            console.log('filteredCities', filteredCities)
            this.setState({cities: filteredCities})
    }
    return (

        
           
            <div>

            <input
                    type="text"
                    placeholder="Search by city"
                    onChange={onChangeHandler.bind(this)}
                    value={this.state.input}
                    style={{
                    marginLeft: 15,
                    marginBottom: 15,
                    marginTop: 10
                }}/>
                { cities &&
                    cities.map((city) => (
                    <div key={city._id}>
                        <h2>{city.name}</h2>
                        <p>{city.country}</p>
                        <img
                            src={city.image}
                            alt="pic"
                            style={{
                            width: 400,
                            height: 300,
                            paddingLeft: 15
                        }}/><br/><br/>
                    </div>
                ))}</div>
      
    )
};

export default Cities

// class Cities1 extends Component {
//     constructor() {
//       super()
//       this.state = {
//         cities: [],
//         filteredCities: []
//       }
//     }
  
//     componentWillMount() {
//       this.setState({
//         cities,
//         filteredCities: cities
//       })
//     }
  
//     filterPoets = (cityFilter) => {
//       let filteredCity = this.state.cities
//       filteredCities = filteredCities.filter((city) => {
//         let cityName = city.name.toLowerCase()
//         return cityName.indexOf(
//           cityFilter.toLowerCase()) !== -1
//       })
//       this.setState({
//         filteredCities
//       })
//     }
  
//     render() {
//       return (
//         <Poets poets={this.state.filteredPoets} match={this.props.match} onChange={this.filterPoets} />
//       )
//     }
//   }

//   export default Cities1


// const Cities = ({cities, input}) => {
//     console.log(input)      
//    return this.props.cities.filter(input =>
//     input.name.toLowerCase().includes(this.state.input.toLowerCase())).map(city => {
//       return(
//         <div key={city._id}>
//                         <h2>{city.name}</h2>
//                         <p>{city.country}</p>
//                         <img
//                             src={city.image}
//                             alt="pic"
//                             style={{
//                             width: 400,
//                             height: 300,
//                             paddingLeft: 15
//                         }}/><br/><br/>
//                     </div>
                
//       )
//     })
// };

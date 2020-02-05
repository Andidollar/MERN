import React from "react";
// import ReactDOM from "react-dom";

const People = ({cities}) => {
    return (
                
            <div>
                {cities.map((city) => (
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
function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = People.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search
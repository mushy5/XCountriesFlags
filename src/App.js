import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [countries, setCountries] = useState([]);
   
  const getCountries = async()=>{
    try{
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    }catch(err){
      console.log(err);
    }
}

  useEffect(()=>{getCountries()}, []);

  return (
   
    <div className="allCountries">
      {countries.map((country)=>{
        return (
          <div key={country.cca3} className='countryCard'>
            <img className='countryImg' src={country.flags.png} alt={country.flags.alt} />
          <h2>{country.name.common}</h2>
          </div>
        )
      })}
   
  </div>
  );
}

export default App;

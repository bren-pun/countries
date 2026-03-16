import CountryCard from './CountryCard';
import './Countries.css';

function Countries() {
  // Hardcoded country data
  const countries = [
    {
      id: 1,
      flag: 'https://flagcdn.com/w320/cn.png',
      name: 'China',
      region: 'Asia',
      population: 1439323776,
      capital: 'Beijing'
    },
    {
      id: 2,
      flag: 'https://flagcdn.com/w320/in.png',
      name: 'India',
      region: 'Asia',
      population: 1380004385,
      capital: 'New Delhi'
    },
    {
      id: 3,
      flag: 'https://flagcdn.com/w320/us.png',
      name: 'United States',
      region: 'Americas',
      population: 331002651,
      capital: 'Washington, D.C.'
    },
    {
      id: 4,
      flag: 'https://flagcdn.com/w320/id.png',
      name: 'Indonesia',
      region: 'Asia',
      population: 273523615,
      capital: 'Jakarta'
    },
    {
      id: 5,
      flag: 'https://flagcdn.com/w320/pk.png',
      name: 'Pakistan',
      region: 'Asia',
      population: 220892340,
      capital: 'Islamabad'
    },
    {
      id: 6,
      flag: 'https://flagcdn.com/w320/br.png',
      name: 'Brazil',
      region: 'Americas',
      population: 212559417,
      capital: 'Brasília'
    },
    {
      id: 7,
      flag: 'https://flagcdn.com/w320/ng.png',
      name: 'Nigeria',
      region: 'Africa',
      population: 206139589,
      capital: 'Abuja'
    },
    {
      id: 8,
      flag: 'https://flagcdn.com/w320/bd.png',
      name: 'Bangladesh',
      region: 'Asia',
      population: 164689383,
      capital: 'Dhaka'
    },
    {
      id: 9,
      flag: 'https://flagcdn.com/w320/ru.png',
      name: 'Russia',
      region: 'Europe',
      population: 145934462,
      capital: 'Moscow'
    },
    {
      id: 10,
      flag: 'https://flagcdn.com/w320/mx.png',
      name: 'Mexico',
      region: 'Americas',
      population: 128932753,
      capital: 'Mexico City'
    },
    {
      id: 11,
      flag: 'https://flagcdn.com/w320/jp.png',
      name: 'Japan',
      region: 'Asia',
      population: 126476461,
      capital: 'Tokyo'
    },
    {
      id: 12,
      flag: 'https://flagcdn.com/w320/ph.png',
      name: 'Philippines',
      region: 'Asia',
      population: 109581078,
      capital: 'Manila'
    }
  ];

  return (
    <div className="countries-container">
      <header className="countries-header">
        <h1>Countries of the World</h1>
        <p className="subtitle">Explore diverse nations and their unique characteristics</p>
      </header>
      
      <div className="countries-grid">
        {countries.map((country) => (
          <CountryCard 
            key={country.id}
            flag={country.flag}
            name={country.name}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;

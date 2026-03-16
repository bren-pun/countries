import './CountryCard.css';

function CountryCard({ flag, name, region, population, capital }) {
  // Format population with commas
  const formatPopulation = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="country-card">
      <div className="flag-container">
        <img src={flag} alt={`Flag of ${name}`} className="flag-image" />
      </div>
      
      <div className="card-content">
        <h2 className="country-name">{name}</h2>
        
        <div className="country-details">
          <div className="detail-item">
            <span className="detail-label">Region:</span>
            <span className="detail-value">{region}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Population:</span>
            <span className="detail-value">{formatPopulation(population)}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Capital:</span>
            <span className="detail-value">{capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;

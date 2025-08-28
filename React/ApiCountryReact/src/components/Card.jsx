// card est le composant enfant de Countries, il recoit les données de Countries en tant que props
const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.png}
        alt={" drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop.{country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;

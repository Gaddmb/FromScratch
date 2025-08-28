import { genreFinder } from "../utils/genreFinder";

// petit rappelle toujours faire un destructuring des props pour eviter de faire props.movie et faire directement movie
const Card = ({ movie }) => {
  const dateFormater = (date) => {
    // j'ai utiliser la methode split pour separer les elements de la date et les mettre dans un tableau
    let [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const addStorage = () => {
    // je verifie si le local storage existe sinon je vais le creer et je vais lui donner une valeur de tableau vide
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    //
    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id.toString());

      // je vais stocker le tableau dans le local storage
      window.localStorage.movies = storedData.join(",");
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id !== movie.id.toString());
    window.localStorage.movies = newData.join(",");
  };

  return (
    <div className="card">
      <img
        src={
          // je dis va chercher la propriété poster_path dans l'objet movie  si elle existe je vais concatener l'url de base avec la propriété poster_path sinon je vais afficher une image par defaut
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {/* m'assurer si la date existe je vais faire une ternaire pour afficher la date */}
      {movie.release_date ? (
        <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
      ) : null}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      {/* je ne verifie pas si movie_genre.ids existe car je l'ai deja fait dans le fichier genreFinder */}
      <ul>{genreFinder(movie)}</ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>
      {/* je vais faire une condition pour savoir si le film est deja dans le local storage ou pas  */}
      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de coeur
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </div>
      )}
    </div>
  );
};

export default Card;

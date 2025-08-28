// toujours verifie si un objet existe ( si il n'ets aps null ou undefined ) avant de tenter d'y accéder pour eviter des erreurs

export const genreFinder = (movie) => {
  if (!movie) return null;

  // Si movie.genre_ids existe (cas API), on utilise les ids
  if (movie.genre_ids) {
    const genres = {
      28: "Action",
      12: "Aventure",
      16: "Animation",
      35: "Comédie",
      80: "Crime",
      99: "Documentaire",
      18: "Drame",
      10751: "Familial",
      14: "Fantastique",
      36: "Histoire",
      27: "Horreur",
      10402: "Musique",
      9648: "Mystère",
      10749: "Romance",
      878: "Science-Fiction",
      10770: "Téléfilm",
      53: "Thriller",
      10752: "Guerre",
      37: "Western",
    };
    return movie.genre_ids
      .map((id) => genres[id])
      .filter(Boolean)
      .map((genre) => <li key={genre}>{genre}</li>);
  }

  // Sinon, si movie.genres existe (cas localStorage), on utilise le tableau d'objets
  if (movie.genres) {
    return movie.genres.map((genre) => (
      <li key={genre.id || genre.name}>{genre.name}</li>
    ));
  }

  return null;
};

//!------------------- RAPPEL ---------------------------------

// pour me souvenir
//  En gros, je veux m'assurer qu'une clé existe et contient une valeur utilisable avant de tenter d'y accéder. Cela évite des erreurs
// d'abord je verifie si l'objet existe si l'objet existe ensuite je verifie si une clé existe dans l'objet si la clé existe je verifie si elle a une valeur valable

// exemple si
//  const movie = {
//   title: "Movie Title",
//   genre_ids: [28, 12] // Un tableau des genres
// };

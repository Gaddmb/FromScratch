import { useState, useEffect } from "react";

// ici dans ce composant, je crée un icône d'étoile qui change d'état entre rempli et vide lorsqu'on clique dessus

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  //  j'interroge mon localStorage pour voir si l'icône a été liké ou non = l'etat initial de l'icône
  useEffect(() => {
    const storedList = localStorage.getItem("coinList");
    if (storedList) {
      let favList = storedList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }, [coinId]);

  // modifie l'etat de l'icône en fonction de l'id du coin
  const idChecker = (id) => {
    const storedList = localStorage.getItem("coinList");
    let favList = storedList ? storedList.split(",") : [];

    if (favList.includes(id)) {
      // alors je dis mets l'icône à l'état non liké
      // rappelle !== compare la valeur de l'icône avec l'id du coin donc la velur et le type
      favList = favList.filter((coin) => coin !== id);
      setLike(false);
    } else {
      // par contre si l'icône n'est pas liké, je l'ajoute à la liste des coins likés
      favList.push(id);
      setLike(true);
    }

    // Mise à jour du localStorage
    localStorage.setItem("coinList", favList.join(","));
  };

  // remarque les debuts se ressemblent car ils lisent tous les deux depuis le localStorage une lecture commune mais avec des actions différentes

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;

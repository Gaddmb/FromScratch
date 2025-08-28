import React, { useState } from "react";
import TableLine from "./TableLine";
import ToTop from "./ToTop";
const Table = ({ coinsData }) => {
  console.log(coinsData);

  const [orderBy, setOrderBy] = useState("");
  const [rangeNumber, setRangeNumber] = useState(100);

  //tableaHeader ici me permet de créer les entêtes de mon tableau ou je ferais un map pour les afficher
  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1y",
    "ATH",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
          {/*  les deux input sont connecté car grace a la valeur de rangeNumber */}
          <ToTop />
        </div>
        {/* je parcours le tableau tableHeader pour créer les entêtes de mon
        tableau */}
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              // ici l'id est utilisé pour relier l'input (bouton) et le label
              id={el}
              // je me dis que si el (exemple "Prix") est égal à orderBy
              // ou si el + "reverse" (exemple "Prixreverse") est égal à orderBy alors on coche ce bouton (checked)
              // "reverse" est juste un mot que j'ai choisi dans mon code pour indiquer que le tri est inversé (ex: "Prixreverse")
              checked={el === orderBy || el + "reverse" === orderBy}
              // le onChange permet de changer l'état de orderBy : exemple la valeur el (ex: "Prix") est stockée dans orderBy
              // Si l’utilisateur clique plusieurs fois sur le même bouton, je fais alterner le tri entre ordre normal et ordre inverse.
              onChange={() => {
                if (orderBy === el) {
                  setOrderBy(el + "reverse");
                } else {
                  setOrderBy(el);
                }
              }}
            />
            {/* ne pas oublier que htmlFor correspond à l'id de l'input */}
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .sort((a, b) => {
            switch (orderBy) {
              case "Prix":
                return b.current_price - a.current_price;
              case "Volume":
                return b.total_volume - a.total_volume;
              case "MarketCap":
                return b.market_cap - a.market_cap;
              case "1h":
                return (
                  b.price_change_percentage_1h_in_currency -
                  a.price_change_percentage_1h_in_currency
                );
              case "1j":
                return (
                  b.market_cap_change_percentage_24h -
                  a.market_cap_change_percentage_24h
                );
              case "1s":
                return (
                  b.price_change_percentage_7d_in_currency -
                  a.price_change_percentage_7d_in_currency
                );
              case "1m":
                return (
                  b.price_change_percentage_30d_in_currency -
                  a.price_change_percentage_30d_in_currency
                );
              case "6m":
                return (
                  b.price_change_percentage_200d_in_currency -
                  a.price_change_percentage_200d_in_currency
                );
              case "1a":
                return (
                  b.price_change_percentage_1y_in_currency -
                  a.price_change_percentage_1y_in_currency
                );
              case "ATH":
                return b.ath_change_percentage - a.ath_change_percentage;
              case "#reverse":
                return a.market_cap - b.market_cap;
              case "Prixreverse":
                return a.current_price - b.current_price;
              case "Volumereverse":
                return a.total_volume - b.total_volume;
              case "MarketCapreverse":
                return a.market_cap - b.market_cap;
              case "1hreverse":
                return (
                  a.price_change_percentage_1h_in_currency -
                  b.price_change_percentage_1h_in_currency
                );
              case "1jreverse":
                return (
                  a.market_cap_change_percentage_24h -
                  b.market_cap_change_percentage_24h
                );
              case "1sreverse":
                return (
                  a.price_change_percentage_7d_in_currency -
                  b.price_change_percentage_7d_in_currency
                );
              case "1mreverse":
                return (
                  a.price_change_percentage_30d_in_currency -
                  b.price_change_percentage_30d_in_currency
                );
              case "6mreverse":
                return (
                  a.price_change_percentage_200d_in_currency -
                  b.price_change_percentage_200d_in_currency
                );
              case "1areverse":
                return (
                  a.price_change_percentage_1y_in_currency -
                  b.price_change_percentage_1y_in_currency
                );
              case "ATHreverse":
                return a.ath_change_percentage - b.ath_change_percentage;
              default:
                return 0;
            }
          })
          .map((coin, index) => (
            <TableLine coin={coin} key={coin.id} index={index} />
          ))}
    </div>
  );
};

export default Table;

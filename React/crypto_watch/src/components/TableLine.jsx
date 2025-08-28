import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";
import { useState } from "react";
const TableLine = ({ coin, index }) => {
  // On utilise useState pour gérer l'état de l'affichage du graphique si on le montre ou pas
  const [showChart, setShowChart] = useState(false);
  const priceFormater = (num) => {
    // On transforme le nombre en string pour compter combien de chiffres il a .Si le nombre est petit (moins de 4 chiffres), on applique un joli format avec décimales

    // J'ai utilise la methode Intl.Format car pour gere les nombres décimaux et les séparateurs de milliers de manière cohérente selon la locale.
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return new Intl.NumberFormat("fr-FR").format(num);
    }
  };

  const mktCapFormater = (num) => {
    let newNum = String(num).split("").slice(0, -6);
    return Number(newNum.join(""));
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20 " alt="logo" />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.Id} coinName={coin.name} />}
            </div>
          </div>
          <h4>{coin.name}</h4>
          <span>
            - {coin.symbol.toUpperCase().replace("", "-").replace("", "-")}
          </span>
          <a
            target="_blank"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.id.toLowerCase()
            }
          >
            <img src="./assets/info-icon.svg" alt="ingo-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">{mktCapFormater(coin.market_cap)} Md$</p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.market_cap_change_percentage_24h} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        "ATH !"
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;

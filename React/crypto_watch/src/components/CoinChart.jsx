import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.module.scss";
import axios from "axios";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

// ce composant affiche un graphique de l'évolution du prix d'une crypto-monnaie sur différentes périodes
const CoinChart = ({ coinId, coinName }) => {
  const [coinData, setCoinData] = useState();
  const [duration, setDuration] = useState(30);
  const headerData = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  useEffect(() => {
    let dataArray = [];

    axios
      // dans l'api je demande les prix de la crypto-monnaie pour une durée donnée en jours
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${
          //si la durée est superieur a 32j alors on utilise l'intervalle journalier pour éviter de surcharger le graphique
          duration > 32 ? "&interval=daily" : ""
        }`
      )
      .then((res) => {
        for (let i = 0; i < res.data.prices.length; i++) {
          // je recupere la date et le prix  ( timeStamp et price) de chaque jour
          let price = res.data.prices[i][1];

          dataArray.push({
            date: new Date(res.data.prices[i][0]).toLocaleDateString(),
            // si le prix est superieur a 50 alors je le transforme en entier pour eviter les problemes d'affichage
            // sinon je le laisse en string pour l'affichage
            price: price < "50" ? price : parseInt(price),
          });
        }
        setCoinData(dataArray);
      });
  }, [coinId, duration]);

  // le premier return renvoie celui du composant qui renvoie tout le jsx visible
  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map((radio) => {
          // le deuxieme return renvoie le jsx de chaque bouton radio
          return (
            <div
              htmlFor={"btn" + radio[0]}
              onClick={() => setDuration(radio[0])}
              key={radio[0]}
              className={radio[0] === duration ? "active-btn" : ""}
            >
              {radio[1]}
            </div>
          );
        })}
      </div>
      <AreaChart
        width={680}
        height={250}
        data={coinData}
        margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke={colors.color1}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default CoinChart;

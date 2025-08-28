import React, { useState, useEffect } from "react";
import { Tooltip, Treemap } from "recharts";
import colors from "../styles/_settings.module.scss";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  const colorPicker = (number) => {
    if (number >= 20) {
      return colors.color1;
    } else if (number >= 5) {
      return colors.green2;
    } else if (number >= 0) {
      return colors.green1;
    } else if (number >= -5) {
      return colors.red1;
    } else if (number >= -20) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };

  const excludeCoin = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "mim"
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 10; i++) {
        // avant de push j'exclu les stable coins
        if (excludeCoin(coinsData[i].symbol)) {
          chartData.push({
            name:
              coinsData[i].symbol.toUpperCase() +
              " " +
              coinsData[i].market_cap_change_percentage_24h.toFixed(1) +
              "%",
            size: coinsData[i].market_cap,
            fill: colorPicker(coinsData[i].market_cap_change_percentage_24h),
          });
        }
      }
    }
    // je lui passe le tableau de données qu'on a incrementé et mettre a jour
    setDataArray(chartData);
  }, [coinsData]);

  // au sur vol du composant je veux savoir quel est le coins et le pourcentage d'evolution grace a cetet function
  const TreemapToolTip = ({ active, payload }) => {
    //donc si jamasi je survol avec la souris un rectangle ( playload donc si j'ai des données)
    // si active est vrai et que payload existe et qu'il y a des données
    if (active && payload && payload.length) {
      return (
        <div className="treemap-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="global-chart">
      <Treemap
        //width et height definissent la taille du graphique
        width={730}
        height={180}
        // les données qu'on va lui passer dataArray donc l'etat actuel
        data={dataArray}
        // dataKey determiner la taille de chaque rectangle
        dataKey="size"
        //couleur des rectangles
        stroke="rgb(51,51,51"
        fill="black"
      >
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;

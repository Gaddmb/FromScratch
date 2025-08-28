// ce composant recoit les pourcentage qu'on passera en props
import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.module.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);
  return (
    <p className="percent-change-container" style={{ color }}>
      {/* si percent existe alors on affiche le pourcentage
      la methode toFixe me garde la valeur juste apres la , */}
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;

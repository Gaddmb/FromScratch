const ToTop = () => {
  return (
    <div className="top">
      <img
        src="./assets/arrow-icon.svg"
        alt="arrow"
        onClick={() => window.scrollTo(0, 0)}
        //  en disant window.scrollTo(0, 0) je dis que je veux que la page remonte en haut ou
        // petite remarque pour que le scroll monte doucement j'ai fait unn  scroll-behavior: smooth; remarque faire onClick={() => window.scrollTo(0, document.body.scrollHeight)} si je veux que la page descende en bas
      />
    </div>
  );
};

export default ToTop;

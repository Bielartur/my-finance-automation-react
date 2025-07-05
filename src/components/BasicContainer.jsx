const BasicContainer = ({
  children,
  className = "",
  btn,
  verMais,
  onClick,
}) => {
  return (
    <div
      className={`border-2 border-[var(--secondary)] w-1/2 ${verMais? 'h-88': 'h-53'} rounded-2xl px-6 py-4 ${className} relative transition-all duration-300 overflow-hidden shadow-lg`}
    >
      {children}
      {btn &&
        (verMais ? (
          <button className="ver-mais" onClick={onClick}>
            <img
              src="src/img/seta-para-baixo.svg"
              alt="Seta para cima"
              width="24"
              height="24"
              className="transition-all duration-300 rotate-180"
            />
          </button>
        ) : (
          <button className="ver-mais" onClick={onClick}>
            <img
              src="src/img/seta-para-baixo.svg"
              alt="Seta para baixo"
              width="24"
              height="24"
              className="transition-all duration-300 rotate-0"
            />
          </button>
        ))}
    </div>
  );
};

export default BasicContainer;

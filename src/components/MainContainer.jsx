const MainContainer = ({ children }) => {
  return (
    <div className="border-2 border-[var(--primary)] w-full h-100 rounded-2xl flex justify-center items-center">
      { children }
    </div>
  );
};

export default MainContainer;

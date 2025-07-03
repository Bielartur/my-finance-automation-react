const MainContainer = ({ children, className="" }) => {
  return (
    <div className={`border-2 border-[var(--primary)] w-full min-h-100 rounded-2xl px-6 py-4 ${className}`}>
      { children }
    </div>
  );
};

export default MainContainer;

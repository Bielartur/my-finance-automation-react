const BasicContainer = ({ children, className='' }) => {
  return (
    <div className={`border-2 border-[var(--secondary)] w-1/2 h-1/2 rounded-2xl px-6 py-4 ${className}`}>
      { children }
    </div>
  );
};

export default BasicContainer;

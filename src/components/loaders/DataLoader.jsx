

const DataLoader = ({active}) => {
  return (
    <div className={`data-loader d-flex justify-content-center align-items-center p-0 ${!active && "fade-out"}`}>
      <div className="spinner-border text-light border-4" style={{ width: "4rem", height: "4rem" }} role="status"></div>
    </div>
  );
};

export default DataLoader;
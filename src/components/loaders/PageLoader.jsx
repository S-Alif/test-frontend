import './loader.css'

const PageLoader = ({active}) => {
  return (
    <>
      <div className={`loading-screen d-flex justify-content-center align-items-center ${!active && "fade-out"}`}>
        <div className="spinner-border text-light border-4" style={{ width: "4rem", height: "4rem" }} role="status"></div>
      </div>
    </>
  );
};

export default PageLoader;
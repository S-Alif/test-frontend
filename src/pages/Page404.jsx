
import { NavLink } from 'react-router-dom';
const Page404 = () => {
  return (
    <section className="section text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 fw-bold text-black">404</h1>
      <p className="fs-5">The link you are looking for dont exist</p>
      <NavLink to={"/"} replace={true} className="py-3 px-5 mt-3 badge badge-success fs-6">go to home</NavLink>
    </section>
  );
};

export default Page404;
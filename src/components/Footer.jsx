import { HashLink } from "react-router-hash-link";

const Footer = ({siteData}) => {


  return (
    <footer className="">
      <div className="links py-4 bg-black">
        <div className="container">
          <div className="row">

            <div className="col-12 text-center">
              <div className="footer-box">

                <a href={siteData['fbPage']} rel="noreferrer" className='text-light text-decoration-none mx-1 fs-5' target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a aria-label="Chat on WhatsApp" rel="noreferrer" href={`https://wa.me/${siteData['whatsApp']}`} className='text-light text-decoration-none mx-1 fs-5' target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                <a href={"tel:+" + siteData['contactNumber']} className='text-light text-decoration-none mx-1 fs-5'><i className="fa-solid fa-phone"></i></a>
                <a href={"mailto:" + siteData['contactMail']} className='text-light text-decoration-none mx-1 fs-5'><i className="fa-solid fa-envelope"></i></a>
                <a href={siteData['contactLocation']} className='text-light text-decoration-none mx-1 fs-5' target='__blank'><i className="fa-solid fa-location-dot"></i></a>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright py-2 bg-black border-top">
        <div className="col-12 text-center">
          <div className="copyright-text">
            <p className='m-0 fs-6 text-light'>
              <span className='pe-1'><i className="fa-solid fa-copyright"></i></span>
              <HashLink to="/#home" className="text-decoration-none fw-bolder text-light">Tuhin&apos;s Fashion</HashLink>, 2023
              || All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
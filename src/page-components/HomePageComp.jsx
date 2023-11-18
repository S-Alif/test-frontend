import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { showProductByCategory } from '../helpers/api';
import PageLoader from './../components/loaders/PageLoader';
import ProductCards from '../components/cards/ProductCards';


const HomePageComp = ({siteData}) => {

  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    
    (async () => {
      setLoader(true)
      document.querySelector('title').innerText = "Home | | Tuhin's Fashion"
      let data = await showProductByCategory("All", 10, 1, -1)
      if(data != 0){
        setProduct(data.data)
      }
      setLoader(false)
    })()
    
  }, [0])


  return (
    <>
      <PageLoader active={loader} />

      <section className="home" id="home" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${siteData['mainImg']})` }} >
        <div className="container d-flex flex-column justify-content-center align-items-start">
          <h1 className="title display-2 fw-bold text-light">Tuhin&apos;s Fashion</h1>
          <p className='text-light fs-5'>সব রকমের ডিজাইনের বোরকা আমরা বানিয়ে থাকি</p>
          <HashLink to="/#products" className="btn btn-success btn-md text-light border-3 text-capitalize rounded-1 fs-6">প্রোডাক্ট দেখুন</HashLink>
        </div>
      </section>

      <section className="about bg-body section" id="about">
        <div className="container">
          <div className="image ms-auto me-auto mb-5">
            <img src={siteData.siteLogo} alt="" />
          </div>

          <div className="text-content ms-auto me-auto">
            <p className="text-black fw-semibold fs-5 text-center">{siteData.siteAbout}</p>
          </div>
        </div>
      </section>

      <section className="products bg-opacity-10 bg-secondary section" id='products'>
        <div className="container text-center">
          <h2 className="title fw-bolder text-success pb-3 d-inline-block pe-3 ps-3 border-2 border-bottom border-success mb-5">আমাদের প্রোডাক্ট</h2>
          <div className="row">
            {
              product.length > 0 ? 
              product.map((e, index) => (
                <ProductCards data={e} key={index} />
              )) : (<p>No products found</p>)
            }
          </div>

          <div className="text-center pt-5">
            <a href="/products" className="btn btn-success btn-md text-light border-3 text-capitalize rounded-1 fs-6">আরো দেখুন</a>
          </div>
        </div>
      </section>

      <section className="contact bg-body section" id="contact">
        <div className="container text-center">

          <h2 className="title text-center fw-bolder text-success pb-3 d-inline-block pe-3 ps-3 border-2 border-bottom border-success mb-5">যোগাযোগ</h2>

          <div className="row">

            <div className="col-lg-12 mt-4">
              <div className="contact-box shadow rounded-3 pt-4 pb-4 d-flex justify-content-between align-items-center">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text text-center">
                  <a href={"tel:+" + siteData['contactNumber']} className="text-dark text-decoration-none fw-bold fs-5">+{siteData['contactNumber']}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="contact-box shadow rounded-3 pt-4 pb-4 d-flex justify-content-between align-items-center">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text text-center">
                  <a href={"mailto:" + siteData['contactMail']} className="text-dark text-decoration-none fw-bold fs-6">{siteData['contactMail']}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="contact-box shadow rounded-3 pt-4 pb-4 d-flex justify-content-between align-items-center">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text text-center">
                  <a href={siteData['contactLocation']} className='text-dark text-decoration-none fw-bold fs-5' target='__blank'>{siteData['locationName']}</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
    </>
  );
};

export default HomePageComp;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PageLoader from './../components/loaders/PageLoader';
import ProductSlider from './../components/ProductSlider';
import { showProductById } from "../helpers/api";
import ProductCards from './../components/cards/ProductCards';
import ContactInfo from "../components/modals/ContactInfo";

const SingleProductPageComp = ({ siteData }) => {

  let params = useParams()

  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {

    (async () => {
      setLoader(true)
      let result = await showProductById(params.category, params.id)
      setProduct(result.showProductById)
      setRelatedProduct(result.relatedProducts)
      document.querySelector('title').innerText = result.showProductById['productName']+" | | Tuhin's Fashion"
      setLoader(false)
    })()

  }, [params])

  let newProduct = () => {
    let d1 = new Date(product['createdAt']);
    let d2 = new Date()
    let diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
    return diff
  }



  return (
    <>
      <PageLoader active={loader} />
      <section className="detail-section bg-body-tertiary pt-5">
        <div className=''>
          <div className="container">
            <HashLink to="/#products" className="btn btn-dark btn-lg rounded-2 border-2 mb-5">পেছনে যাই</HashLink>

            <div className="row">
              <div className="col-lg-6 mb-5">
                <div className="image">
                  {
                    product['otherImg'] ? <ProductSlider data={product['otherImg']} /> : <h1>Slider image not found</h1>
                  }
                </div>
              </div>
              <div className="col-lg-6 mb-5">
                <div className="details">
                  <h1 className="fw-bold pb-2 fs-4">{product['productName']} <span className="badge bg-success text-light rounded-2">{newProduct() <= 3 && "new"}</span></h1>
                  <p className="lead fs-5">{product['detail']}</p>

                  <ul className="pt-3 fs-5">
                    <li className="fw-semibold pb-2">Fabric : <span className="fw-normal ms-1">{product['fabric']}</span></li>
                    <li className="fw-semibold">Feel : <span className="fw-normal ms-1">{product['feel']}</span></li>
                  </ul>

                  <p className='mt-4 fs-5 fw-bold mb-0'><span className="text-success pe-1">
                    মূল্য :</span> {product['price']} টাকা
                    <p className='badge badge-secondary text-black ms-2'><span className="me-2"><i className="fa-solid fa-eye"></i></span> {product['views']}</p>
                  </p>
                  
                  

                  <ContactInfo siteData={siteData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products bg-body pt-5 pb-5">
          <div className="container pb-5">
            <h3 className='title fs-3 fw-semibold pb-3'>Related products</h3>

            <div className="row mt-3">
              {
                relatedProduct.length > 0 ? 
                  relatedProduct.map((e, index) => (
                    <ProductCards key={index} data={e} />
                  )) : (<h1>related products not found</h1>)
              }
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4 px-1 px-sm-2 bg-light">
                <a href="/products" className="btn w-100 h-100 bg-success bg-opacity-75 text-light border-3 text-capitalize rounded-1 fs-5 d-flex justify-content-center align-items-center">আরো দেখুন</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPageComp;
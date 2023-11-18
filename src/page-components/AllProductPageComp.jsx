import { useEffect, useState } from "react";
import { showProductByCategory } from "../helpers/api";
import ReactPaginate from 'react-paginate';
import ProductCards from "../components/cards/ProductCards";
import DataLoader from '../components/loaders/DataLoader';
import { successToast } from "../helpers/throw-msg";

const AllProductPageComp = () => {

  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(false)
  const [filterTab, setFilterTab] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [filter, setFilter] = useState({
    category: "All",
    limit: 10,
    views: 0
  })

  let handleData = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    (async () => {
      setLoader(true)
      document.querySelector('title').innerText = filter.category+" products | | Tuhin's Fashion"
      let data = await showProductByCategory(filter.category, filter.limit, 1, filter.views)
      if (data != 0) {
        setPage(0)
        setProduct(data.data)
        setTotal(data.productTotal)
      }
      successToast(filter.category + " products loaded")
      setLoader(false)
    })()

  }, [filter.category, filter.limit, filter.views])

  let changePage = async (e) => {
    setLoader(true)
    document.querySelector('title').innerText = filter.category +" products | | Tuhin's Fashion"
    let data = await showProductByCategory(filter.category, filter.limit, e.selected + 1, filter.views)
    if (data != 0) {
      setPage(e.selected)
      setProduct(data.data)
      setTotal(data.productTotal)
    }
    successToast(filter.category + " products loaded")
    setLoader(false)
  }


  return (
    <section className="all-product-section py-5 position-relative">
      <div className="container">
        
        <div className="text-center">
          <h2 className="title fw-bolder text-success pb-3 d-inline-block pe-3 ps-3 border-2 border-bottom border-success mb-5">আমাদের সকল প্রোডাক্ট</h2>
        </div>

        <button type="button" className="btn btn-secondary btn-lg text-dark fw-bold mb-2" onClick={() => setFilterTab(!filterTab)}>
          Filter
          <span className="ps-2">
            {
              filterTab ? (<i className="fa-solid fa-caret-up"></i>) : (<i className="fa-solid fa-caret-down"></i>)
            }
          </span>
        </button>

        <div className={`row mb-2 ${filterTab ? "" : "d-none"}`}>
          <div className="col-lg-4 col-md-6 mt-2">
            <div className="input-group mb-3">
              <span className="input-group-text bg-success text-light">Category</span>
              <select name="category" id="category" className="form-control form-select" value={filter.category} onChange={handleData}>
                <option value="All">All</option>
                <option value="বোরকা">বোরকা</option>
                <option value="নিকাব">নিকাব</option>
                <option value="হিজাব">হিজাব</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-2">
            <div className="input-group mb-3">
              <span className="input-group-text bg-success text-light">limit</span>
              <select name="limit" id="limit" className="form-control form-select" value={filter.limit} onChange={handleData}>
                <option value="10">10 items</option>
                <option value="20">20 items</option>
                <option value="40">40 items</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mt-2">
            <div className="input-group mb-3">
              <span className="input-group-text bg-success text-light">views</span>
              <select className="form-control form-select" name="views" id="views" value={filter.views} onChange={handleData}>
                <option value="0">All</option>
                <option value="-1">most views</option>
                <option value="1">least views</option>
              </select>
            </div>
          </div>

          <div className="col-12 text-end">
            <button type="button" className="btn btn-dark" onClick={() => setFilter({
              category: "All",
              limit: 10,
              views: 0
            })}>clear filters</button>
          </div>

        </div>

        <DataLoader active={loader} />
        <div className="pb-4">
          <div className="row">
            {
              product.length > 0 ?
                product.map((e, index) => (
                  <ProductCards data={e} key={index} />
                )) : (<p className="text-center fw-bold fs-4 my-5 py-5">No products found</p>)
            }
          </div>
        </div>

        <div className="pt-5">
          {
            product.length > 0 && (<ReactPaginate
              previousLabel={(<i className="fa-solid fa-arrow-left"></i>)}
              nextLabel={(<i className="fa-solid fa-arrow-right"></i>)}
              pageCount={Math.ceil(total / filter.limit)}
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakLabel="..."
              onPageChange={changePage}
              containerClassName='pagination pagination-lg d-flex justify-content-center'
              activeClassName='active'
              forcePage={page}
            />)
          }
        </div>


      </div>
    </section>
  );
};

export default AllProductPageComp;
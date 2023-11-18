
const ProductCards = ({data}) => {
  
  let newProduct = () => {
    let d1 = new Date(data['createdAt']);
    let d2 = new Date()
    let diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24))
    return diff
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4 px-sm-2 bg-light">
      <a href={`/products/${data.category}/${data._id}`} className='text-decoration-none'>
        <div className="product-box p-2 p-sm-3 shadow rounded-2 text-start position-relative">
        <span className="badge bg-success text-light rounded-2">{newProduct() <= 3 && "new"}</span>
          <div className="product-img rounded-2">
            <img src={data.img} alt="" />
          </div>

          <div className="product-info pt-4 text-center">
            <h4 className="text-decoration-none fw-bolder fs-6 text-dark">{data.productName}</h4>
            <p className='pb-0 text-dark fw-bold'><span className="fw-bold text-success pe-1">৳</span> {data.price} টাকা</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCards;
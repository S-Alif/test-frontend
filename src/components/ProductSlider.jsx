import { Sliderify } from "react-sliderify";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

const ProductSlider = ({ data }) => {

  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  let toggling = (toggle) => {
    if (toggle == true) {
      setTimeout(() => {
        setToggler(false)
      }, 200)
    }
    else {
      setToggler(true)
    }
  }

  return (
    <>
      <Sliderify autoPlay={false} dotsPlacement="inside" activeColor="chartreuse">
        {
          data.map((e, index) => (
            <img src={e} id={index} key={index} alt="" onClick={(e) => {
              toggling(toggler)
              setProductIndex(parseInt(e.target.id))
            }} />
          ))
        }
      </Sliderify>

      <FsLightbox
        toggler={toggler}
        sourceIndex={productIndex}
        sources={[...data]}
      />
    </>
  );
};
export default ProductSlider;
import { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { getSiteData } from "../helpers/api";
import SingleProductPageComp from "../page-components/SingleProductPageComp";


const SingleProductPage = () => {

  const [siteData, setSiteData] = useState({})

  useEffect(() => {

    (async () => {
      let site = await getSiteData()
      if (site != 0) {
        setSiteData(site)
      }
    })()

  }, [0])

  return (
    <MasterLayout data={siteData}>
      <SingleProductPageComp siteData={siteData} />
    </MasterLayout>
  );
};

export default SingleProductPage;
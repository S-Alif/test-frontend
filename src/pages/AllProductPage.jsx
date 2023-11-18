import { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { getSiteData } from "../helpers/api";
import AllProductPageComp from "../page-components/AllProductPageComp";
import PageLoader from './../components/loaders/PageLoader';


const AllProductPage = () => {

  const [loader, setLoader] = useState(true)
  const [siteData, setSiteData] = useState({})

  useEffect(() => {

    (async () => {
      let site = await getSiteData()
      if (site != 0) {
        setSiteData(site)
      }
      setTimeout(() => {
        setLoader(false)
      }, 400);
    })()

  }, [0])

  return (
    <>
      <PageLoader active={loader} />
      <MasterLayout data={siteData}>
        <AllProductPageComp />
      </MasterLayout>
    </>
  );
};

export default AllProductPage;
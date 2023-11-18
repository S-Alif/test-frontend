import { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import HomePageComp from "../page-components/HomePageComp";
import { getSiteData } from "../helpers/api";

const HomePage = () => {

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
      <HomePageComp siteData={siteData} />
    </MasterLayout>
  );
};

export default HomePage;
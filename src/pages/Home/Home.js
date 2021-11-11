import React, { useState, useEffect } from "react";
import * as request from '../../request/home/request';

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getDataFromBackend = async () => {
      const {message} = await request.getHomePageDummyData();
      setData(message);
    }
    getDataFromBackend();
  }, [])
  return (
    <div style = {{textAlign: 'center'}}>
      <img
        src="https://www.assetinfinity.com/blog/wp-content/uploads/2019/09/Hospital-Inventory-Management-Software.jpg"
        width="1000"
        height="600"
      />
      <h4>Open Soucre Project</h4>
    </div>
  );
};

export default Home;

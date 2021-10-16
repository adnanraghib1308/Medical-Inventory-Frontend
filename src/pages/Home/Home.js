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
    <div className="container">
      { data }
    </div>
  );
};

export default Home;

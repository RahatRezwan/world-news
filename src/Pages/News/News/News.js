import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
   const newsDetails = useLoaderData();
   return (
      <div>
         <h2>{newsDetails.title}</h2>
      </div>
   );
};

export default News;

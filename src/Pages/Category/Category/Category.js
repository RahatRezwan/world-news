import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
   const allNews = useLoaderData();
   if (allNews.length === 0) {
      return (
         <div className="text-center">
            <h3>No news found for this category</h3>
         </div>
      );
   }
   return (
      <div>
         {allNews.map((news) => (
            <NewsSummaryCard key={news._id} news={news} />
         ))}
      </div>
   );
};

export default Category;

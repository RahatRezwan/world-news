import React from "react";

const NewsSummaryCard = ({ news }) => {
   const { title } = news;
   return <div>{news.title}</div>;
};

export default NewsSummaryCard;

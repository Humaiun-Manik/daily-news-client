import React from "react";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const newsCategories = useLoaderData();

  if (newsCategories.length === 0) {
    return <h1 className="text-center">No news found!</h1>;
  }

  return (
    <>
      {newsCategories.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </>
  );
};

export default Category;

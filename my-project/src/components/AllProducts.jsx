import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { allDatas } from "../redux/getdatasSlice";

function AllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDatas());
  }, [dispatch]);

  const { getData, loading, selectedCategoriesItemss } = useSelector(
    (state) => state.getdatas
  );

  if (loading) return <p>Loading..</p>;

  const productsToDisplay =
    selectedCategoriesItemss.length > 0 ? selectedCategoriesItemss : getData;

  return (
    <div className="grid grid-cols-5 items-center gap-4 my-5">
      {productsToDisplay.map((data, index) => (
        <Product itemValues={data} key={index} />
      ))}
    </div>
  );
}

export default AllProducts;

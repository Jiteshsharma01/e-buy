import React from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import { Link } from "react-router-dom";
import "./CategoryList.scss";
import Avatar from "react-avatar";

const CategoryList = () => {
  const categories = useSelector(getAllCategories);
  return (
    <div className="bg-white category-list flex align-center fs-12 fw-4 font-manrope overflow-x-scroll">
      {categories?.map((category, idx) => (
        <div className="category-item no-wrap" key={category?.slug}>
          <Link
            to={`category/${category?.slug}`}
            className="category-link text-capitalize"
          >
            <div className="flex flex-column align-center">
              <Avatar name={category?.name} size="40" round={true} />
              <p>{category?.name?.replace("-", " ")}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

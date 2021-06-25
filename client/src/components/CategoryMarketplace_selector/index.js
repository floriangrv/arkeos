import React from "react";

const CategoryMarketplace_selector = (props) => {
  return (
    <>
      <select
        className="Select"
        name="category"
        id="category"
        onChange={props.CategoryonChange}
      >
        <option value="">Toutes les catégories</option>
        <option value="Serpents">Serpents</option>
        <option value="Lézards">Lézards</option>
        <option value="Tortues">Tortues</option>
        <option value="Amphibiens">Amphibiens</option>
      </select>
    </>
  );
};

export default CategoryMarketplace_selector;

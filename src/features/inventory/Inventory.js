import React, { useEffect, useMemo } from "react";
import { calculatePrice, getCurrencySymbol } from "../../utilities/utilities.js";
import { addItem } from "../cart/cartSlice.js";
import { loadData } from "./inventorySlice";

export const Inventory = ({ inventory, searchTerm, currencyFilter, dispatch }) => {
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const filteredItems = useMemo(() => {
    return getFilteredItems(inventory, searchTerm);
  }, [inventory, searchTerm]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (filteredItems.length === 0) {
    return <p>Sorry, no products are currently available...</p>;
  }

  return <ul id="inventory-container">{filteredItems.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={""} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }

  function getFilteredItems(items, searchTerm) {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};
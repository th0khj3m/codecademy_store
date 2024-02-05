import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import the hooks

import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrenyFilter.js";
import { Cart } from "../features/cart/Cart.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";

export const App = () => {
  const state = useSelector((state) => state); // Use useSelector to access the Redux state
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  return (
    <div>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      <CurrencyFilter currencyFilter={state.currencyFilter}
        dispatch={dispatch}/>
      <Inventory  inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        searchTerm = {state.searchTerm}
        dispatch={dispatch} />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
import { useState } from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Item from "./components/Item";

import { PRODUCTS } from './data.js'

import "./App.css";

function App() {  
  const [selectedOrder, setSelectedOrder] = useState();

  function orderByHandleClick(orderBy){
    setSelectedOrder(orderBy);
    handledCollectionEffect();
  }

  let SORTED_PRODUCTS = PRODUCTS.slice();

  switch (selectedOrder){
    case 'Top Rating':
      SORTED_PRODUCTS.sort((a,b) => b.stars - a.stars);
      break;      
    case 'New Arrival':
      SORTED_PRODUCTS.sort((a,b) => a.stars - b.stars);
      break;
    case 'Best Seller':
      SORTED_PRODUCTS = PRODUCTS.slice();
      break;
  }

  function handledCollectionEffect() {
    var element = document.getElementById("listing-items");
    console.log(element.className);
    element.classList.add("cs-hidden");
    setTimeout(()=>{
      element.classList.remove("cs-hidden")
    }, 320)
  }
  
  return (
    <>
      <section id="collection-1602">
        <div className="cs-container">
          <div className="cs-content">
            <Header>New Collection</Header>
            <div className="cs-button-group">
              <h3 className="cs-order-by" >Order By</h3>
              <NavBar onClick={() => orderByHandleClick("New Arrival")}>
                New Arrival
              </NavBar>
              <NavBar onClick={() => orderByHandleClick("Top Rating")}>
                Top Rating
              </NavBar>
              <NavBar onClick={() => orderByHandleClick("Best Seller")}>
                Best Seller
              </NavBar>
            </div>
          </div>
          <div className="cs-listing-wrapper">
            <div id="listing-items" className="cs-listing">
              {SORTED_PRODUCTS.map((productItem) => (
                <Item key={productItem.title} {...productItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

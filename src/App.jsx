import Header from "./components/Header";
import NavBar from "./components/NavBar";
import beanieImg from './assets/ecomm-beanie.png';
import basketImg from './assets/ecomm-bag-icon.svg';
import { PRODUCTS } from './data.js'

import "./App.css";

function Item ({image, title, category, price, wasPrice, discount, stars}){
  return (
    <div class="cs-item">
                <a href="" class="cs-link">
                  <div class="cs-picture-group">
                    <img src={image} class="cs-picture"/>
                    <span class="cs-offer">-{discount}%</span>
                  </div>
                  <div class="cs-details">
                    <span class="cs-category">{category}</span>
                    <h3 class="cs-name">{title}</h3>
                    <div class="cs-actions">
                      <div class="cs-flex">
                        <span class="cs-price">${price} </span>
                        <span class="cs-was-price">${wasPrice}</span>
                        <div class="cs-stars">                          
                        </div>
                      </div>
                      <button class="cs-buy">
                        <img src={basketImg} class="cs-basket" />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
  );  
}

function App() {
  return (
    <>
      <section id="collection-1602">
        <div class="cs-container">
          <div class="cs-content">
            <Header>New Collection</Header>
            <div class="cs-button-group">
            <NavBar>New Arrival</NavBar>
            <NavBar>Top Rating</NavBar>
            <NavBar>Best Seller</NavBar>
            </div>
          </div>
          <div class="cs-listing-wrapper">
            <div class="cs-listing" data-category="one">
              <Item 
              image={beanieImg}
              title={PRODUCTS[0].title}
              category={PRODUCTS[0].category}
              price={PRODUCTS[0].price}
              wasPrice={PRODUCTS[0].wasPrice}
              discount={PRODUCTS[0].discount}
              />
            </div>            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

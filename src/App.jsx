import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

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
            </div>            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

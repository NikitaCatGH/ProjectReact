import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import {
  Route, Routes
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');



  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">

            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />

            </Routes>

          </div>
        </div>
      </SearchContext.Provider>

    </div>

  );
}

export default App;

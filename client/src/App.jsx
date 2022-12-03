import "./App.scss";
import Card from "./components/card/Card";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import CardListings from "./components/card-listings/CardListings";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CardListings />
    </>
  );
}

export default App;

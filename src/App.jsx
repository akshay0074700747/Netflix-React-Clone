import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
import {
  action,
  originals,
  comedy,
  documentaries,
  horror,
  romance,
  trending,
} from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Rowpost title="Netflix Originals" url={originals}></Rowpost>
      <Rowpost title="Trending" isSmall={true} url={trending}></Rowpost>
      <Rowpost title="Action" url={action} isSmall={true}></Rowpost>
      <Rowpost title="Romance" url={romance} isSmall={true}></Rowpost>
      <Rowpost title="Horror" url={horror} isSmall={true}></Rowpost>
      <Rowpost title="Comedy" url={comedy} isSmall={true}></Rowpost>
      <Rowpost
        title="Documentaries"
        url={documentaries}
        isSmall={true}
      ></Rowpost>
    </div>
  );
}

export default App;

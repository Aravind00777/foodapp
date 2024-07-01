import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
// gsap.registerPlugin(useGSAP);
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("642582");

  // useGSAP(() => {
  //   gsap.fromTo(".blue", { x: -100 }, { rotation: 360, x: 1000, duration: 2 });
  // }, {});

  return (
    <div className="App">
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          {/* <div className="blue"></div> */}
          {/* {foodData &&} */}
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

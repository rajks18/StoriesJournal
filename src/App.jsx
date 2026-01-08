import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StoriesHeader from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";
import TravelTips from "./components/TravelTips";
import LatestPosts from "./components/LatestPosts";
import CategoryPosts from "./components/CategoryPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container mx-auto space-y-8">
      <StoriesHeader className="mx-auto" />

      <HeroSlider />

      <FeaturedPosts />

      <TravelTips />

      <LatestPosts />

      <CategoryPosts />
    </div>
    <Footer />
    </div>
    
    // <div>
    //    <StoriesBlog/>
    //  </div>
  );
}

export default App;

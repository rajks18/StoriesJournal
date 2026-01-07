import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StoriesHeader from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import FeaturedPosts from "./components/FeaturedPosts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <StoriesHeader  />

      <HeroSlider  />

      <FeaturedPosts  />
    </div>
  );
}

export default App;

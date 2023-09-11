import "./App.css";
import FeaturedMovies from "./components/Sections/FeaturedMovies";
import Landing from "./components/Sections/Landing";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <FeaturedMovies />
      <Footer />
    </div>
  );
}

export default App;

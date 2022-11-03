import Hero from "../components/sections/Hero";
import NewArrivals from "../components/sections/NewArrivals/NewArrivals";
import PopularCategories from "../components/sections/PopularCategories";
import TrendingProducts from "../components/sections/TrendingProducts/TrendingProducts";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
// import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="mt-16">
        <PopularCategories />
      </div>

      <div className="mt-16">
        <NewArrivals />
      </div>

      <div className="my-16">
        <TrendingProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

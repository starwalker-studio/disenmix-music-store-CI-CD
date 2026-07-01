import { useEffect } from "react";
import { Categories } from "./components/categories/Categories";
import { CustomerReviews } from "./components/customer-reviews/CustomerReviews";
import { FeaturedProducts } from "./components/featured-products/FeaturedProducts";
import { Hero } from "./components/hero/Hero";
import { LocationSection } from "./components/location/LocationSection";
import { Payment } from "./components/payment/Payment";
import { WhyWaveStore } from "./components/whywavestore/WhyWaveStore";

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Payment />
      <WhyWaveStore />
      <CustomerReviews />
      <LocationSection />
    </>
  );
};

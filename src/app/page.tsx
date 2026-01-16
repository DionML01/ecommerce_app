"use client";

import BreadCrumb from "../components/shop/BreadCrumb/BreadCrumb";
import Navbar from "@/components/shop/NavBar/NavBar";
import HeroSection from "../components/shop/Hero/HeroSection";
import InternationalBrands from "../components/shop/InternationalBrands/InternationalBrands";
import BrowseByDressStyle from "../components/shop/BrowseByDressStyle/BrowseByDressStyle";
import OurHappyCustomers from "../components/shop/OurHappyCustomers/OurHappyCustomers";
import Footer from "../components/shop/Footer/Footer";
import "./main.css";
import NewArrivals from "../components/shop/NewArrivals/NewArrivals";
import TopSelling from "../components/shop/TopSelling/TopSelling";

export default function HomePage() {
  return (
    // <Box
    //   sx={{
    //     maxWidth: "1920px",
    //     mx: 0,
    //     px: 0,
    //     mb: 4,
    //   }}
    // >
    //   <BreadCrumb />
    //   <Navbar />
    //   <HeroSection />
    //   <InternationalBrands />
    //   <NewArrivals />
    //   <TopSelling />
    //   <BrowseByDressStyle />
    //   <OurHappyCustomers />
    //   <Footer />
    // </Box>
    <div className="main">
      <BreadCrumb />
      <Navbar />
      <HeroSection />
      <InternationalBrands />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <OurHappyCustomers />
      <Footer />
    </div>
  );
}

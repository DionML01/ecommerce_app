"use client";

import CheckoutPage from "@/components/Checkout/CheckoutPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import BreadCrumb from "@/components/shop/BreadCrumb/BreadCrumb";
import Footer from "@/components/shop/Footer/Footer";
import Navbar from "@/components/shop/NavBar/NavBar";
import React from "react";
import "../main.css";

const page = () => {
  return (
    <ProtectedRoute>
      <div className="main">
        <BreadCrumb />
        <Navbar />
        <CheckoutPage />
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default page;

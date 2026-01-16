"use client";

import BreadCrumb from "../../components/shop/BreadCrumb/BreadCrumb";
import Navbar from "../../components/shop/NavBar/NavBar";
import "../main.css";
import CartNavigation from "../../components/CartPage/CartNavigation/CartNavigation";
import CartHeading from "../../components/CartPage/CartHeading/CartHeading";

import Footer from "../../components/shop/Footer/Footer";
import Cart from "@/components/CartPage/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="main">
        <BreadCrumb />
        <Navbar />
        <CartNavigation />
        <CartHeading />
        <Cart />
        <Footer />
        <Toaster />
      </div>
    </ProtectedRoute>
  );
}

"use client";

import BreadCrumb from "@/components/shop/BreadCrumb/BreadCrumb";
import "../../main.css";
import Navbar from "@/components/shop/NavBar/NavBar";
import Footer from "@/components/shop/Footer/Footer";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Loader from "@/components/shop/Shared/Loader";
import CategoriesNavigation from "@/components/CategoryPage/CategoriesNavigation/CategoriesNavigation";
import MainGrid from "@/components/CategoryPage/MainGrid/MainGrid";
import ProtectedRoute from "@/components/ProtectedRoute";

const categories = ["casual", "formal", "party", "gym"];

export default function HomePage() {
  const params = useParams();
  const id = params?.id;
  const [selectedCategory, setSelectedCategory] = useState("casual");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategoryById = useCallback(async (id: number) => {
    if (id >= 0 && id < categories.length) setSelectedCategory(categories[id]);
    else throw new Error("Error while fetching category");
  }, []);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      try {
        if (id) await fetchCategoryById(Number(id));
      } catch (err) {
        console.warn("Failed to fetch category:", err);
      } finally {
        setIsLoading(false);
      }
    };
    run();
  }, [id, fetchCategoryById]);

  if (isLoading || !selectedCategory) {
    return <Loader text="Please wait..." />;
  }

  return (
    <ProtectedRoute>
      <div className="main">
        <BreadCrumb />
        <Navbar />
        <CategoriesNavigation category={selectedCategory} />
        <MainGrid category={selectedCategory} />
        <Footer />
      </div>
    </ProtectedRoute>
  );
}

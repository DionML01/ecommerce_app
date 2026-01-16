"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ useParams instead of next/router
import { useProductStore } from "../../../store/useProductStore";
import ProductDetails from "../../../components/ProductDetailPage/ProductDetails/ProductDetails";
import ProductDetailsMenu from "../../../components/ProductDetailPage/ProductDetailsMenu/ProductDetailsMenu";
import Filters from "../../../components/ProductDetailPage/Filters/Filters";
import Reviews from "../../../components/ProductDetailPage/ReviewsSection/Reviews";
import ReviewDialog from "../../../components/ProductDetailPage/ReviewsSection/ReviewDialog";
import PromotionSection from "../../../components/ProductDetailPage/PromotionSection/PromotionSection";
import BreadCrumb from "../../../components/shop/BreadCrumb/BreadCrumb";
import Footer from "../../../components/shop/Footer/Footer";
import Navbar from "../../../components/shop/NavBar/NavBar";
import Loader from "@/components/shop/Shared/Loader";
import ProtectedRoute from "@/components/ProtectedRoute";

export interface Review {
  id: number;
  rating: number;
  name: string;
  content: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    rating: 4,
    name: "Samantha D.",
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    id: 2,
    rating: 3,
    name: "Alex M.",
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    id: 3,
    rating: 1,
    name: "Taylor S.",
    content:
      "This shirt is amazing! Super comfy and stylish. I’ve already gotten so many compliments on it.",
    date: "August 16, 2023",
  },
  {
    id: 4,
    rating: 2,
    name: "Samantha D.",
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    id: 5,
    rating: 5,
    name: "Alex M.",
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    id: 6,
    rating: 5,
    name: "Taylor S.",
    content:
      "This shirt is amazing! Super comfy and stylish. I’ve already gotten so many compliments on it.",
    date: "August 16, 2023",
  },
];

const ProductDetailPage = () => {
  const params = useParams();
  const id = params?.id; // URL param from [id] folder

  const [reviews, setReviews] = useState(initialReviews);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [filter, setFilter] = useState<"ASC" | "DESC">("ASC");

  const openReviewDialog = () => setIsReviewDialogOpen(true);
  const closeReviewDialog = () => setIsReviewDialogOpen(false);

  const deleteReview = (id: number) => {
    const updatedReviews = reviews.filter((r) => r.id !== id);
    setReviews(updatedReviews);
  };

  const addReview = (review: Review) => {
    try {
      if (!review.name || !review.rating || !review.content) {
        throw new Error("Missing properties: rating name, rating or content.");
      } else {
        const updatedReviews = [...reviews, review];
        setReviews(updatedReviews);
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const { fetchProductById, selectedProduct, isLoading } = useProductStore();

  useEffect(() => {
    if (id) {
      fetchProductById(Number(id));
    }
  }, [id, fetchProductById]);

  if (isLoading || !selectedProduct) {
    return <Loader text="Please wait..." />;
  }

  return (
    <ProtectedRoute>
      <div className="main">
        <BreadCrumb />
        <Navbar />
        <ProductDetails product={selectedProduct} />
        <ProductDetailsMenu />
        <Filters
          onWriteReview={openReviewDialog}
          filter={filter}
          setFilter={setFilter}
        />
        <ReviewDialog
          open={isReviewDialogOpen}
          onClose={closeReviewDialog}
          onAddReview={addReview}
        />
        <Reviews
          reviews={[...reviews].sort((a, b) =>
            filter === "ASC" ? a.rating - b.rating : b.rating - a.rating
          )}
          deleteReview={deleteReview}
          addReview={addReview}
        />
        <PromotionSection />
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default ProductDetailPage;

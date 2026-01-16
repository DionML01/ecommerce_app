import Image, { StaticImageData } from "next/image";
import HalfRating from "./HalfRating";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  id: number;
  img: string | StaticImageData;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  cardWidth?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  img,
  title,
  price,
  oldPrice,
  discount,
}) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push(`/product/${id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: { xs: "300px", md: "270px" },
        margin: "0 auto",
        padding: "10px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "100%",
        }}
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 600px) 300px, (max-width: 900px) 270px, 270px"
          style={{
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "Satoshi Variable",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {title}
        </p>
        <HalfRating />
        <div
          style={{
            fontSize: "24px",
            fontFamily: "Satoshi Variable",
            fontWeight: 700,
            marginTop: "10px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minHeight: "30px",
          }}
        >
          ${price}
          {discount !== 0 && (
            <>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: "18px",
                }}
              >
                ${oldPrice}
              </span>
              <span
                style={{
                  color: "red",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Box>
  );
};

export default ProductCard;

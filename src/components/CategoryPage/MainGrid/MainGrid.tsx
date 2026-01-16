import { Box } from "@mui/material";
import React, { useState } from "react";
import Filters from "./Filters/Filters";
import ProductSection from "./Products/ProductSection";
// import { products } from "./constants";
import MobileDrawer from "./Drawer/MobileDrawer";
import { useProductStore } from "@/store/useProductStore";

const MainGrid = ({ category }: { category: string }) => {
  const { products } = useProductStore();

  // State for filters
  const [closePrice, setClosePrice] = useState(true);
  const toggleClosePrice = () => setClosePrice((prev) => !prev);

  const [closeColors, setCloseColors] = useState(true);
  const toggleCloseColors = () => setCloseColors((prev) => !prev);

  const [closeSize, setCloseSize] = useState(true);
  const toggleCloseSize = () => setCloseSize((prev) => !prev);

  const [closeDressStyle, setCloseDressStyle] = useState(true);
  const toggleCloseDressStyle = () => setCloseDressStyle((prev) => !prev);

  const [color, setColor] = useState("rgba(255, 255, 255, 1)");
  const [active, setActive] = useState(0);
  const [value, setValue] = useState<number[]>([20, 250]);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const handleChange = (
    _event: Event | React.SyntheticEvent,
    newValue: number | number[]
  ) => {
    setValue(newValue as number[]);
  };

  const [appliedFilters, setAppliedFilters] = useState({
    value: [20, 250],
    color: "rgba(255, 255, 255, 1)",
    active: 0,
  });

  const applyFilters = () => {
    setAppliedFilters({ value, color, active });
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= appliedFilters.value[0] &&
      product.price <= appliedFilters.value[1]
    );
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "1fr 3fr", xs: "1fr" },
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "0px" },
        paddingRight: { md: "100px", xs: "0px" },
        paddingTop: { md: "50px", xs: "25px" },
        paddingBottom: { md: "200px", xs: "200px" },
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Filters Section */}
      <Filters
        value={value}
        handleChange={handleChange}
        closePrice={closePrice}
        toggleClosePrice={toggleClosePrice}
        closeColors={closeColors}
        toggleCloseColors={toggleCloseColors}
        closeSize={closeSize}
        toggleCloseSize={toggleCloseSize}
        closeDressStyle={closeDressStyle}
        toggleCloseDressStyle={toggleCloseDressStyle}
        color={color}
        setColor={setColor}
        active={active}
        setActive={setActive}
        onApply={applyFilters}
      />

      {/* Products Section */}
      <ProductSection
        products={filteredProducts}
        toggleDrawer={toggleDrawer}
        category={category}
      />

      {/* Mobile Drawer Section */}
      <MobileDrawer
        openDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
        value={value}
        handleChange={handleChange}
        closePrice={closePrice}
        toggleClosePrice={toggleClosePrice}
        closeColors={closeColors}
        toggleCloseColors={toggleCloseColors}
        closeSize={closeSize}
        toggleCloseSize={toggleCloseSize}
        closeDressStyle={closeDressStyle}
        toggleCloseDressStyle={toggleCloseDressStyle}
        color={color}
        setColor={setColor}
        active={active}
        setActive={setActive}
        onApply={applyFilters}
      />
    </Box>
  );
};

export default MainGrid;

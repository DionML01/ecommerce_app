import { Box, Typography, IconButton, Collapse } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { dressStyles } from "../constants";

type Props = {
  open: boolean;
  toggle: () => void;
};

const DressStyleFilter: React.FC<Props> = ({ open, toggle }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "Satoshi Variable",
          fontWeight: 700,
        }}
      >
        Dress Style
      </Typography>
      <IconButton onClick={toggle}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </IconButton>
    </Box>
    <Collapse in={open} timeout={300}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {dressStyles.map((category) => (
          <Box
            key={category.id}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "16px",
                fontWeight: 400,
                fontFamily: "Satoshi Variable",
              }}
            >
              {category.name}
            </Typography>
            <MdKeyboardArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
          </Box>
        ))}
      </Box>
    </Collapse>
  </Box>
);

export default DressStyleFilter;

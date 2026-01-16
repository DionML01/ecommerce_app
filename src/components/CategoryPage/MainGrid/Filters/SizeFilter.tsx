import { Box, Typography, IconButton, Collapse } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { sizeArray } from "../constants";
import { activeStyle, notActiveStyle } from "../styles";

type Props = {
  active: number;
  setActive: (id: number) => void;
  open: boolean;
  toggle: () => void;
};

const SizeFilter: React.FC<Props> = ({ active, setActive, open, toggle }) => (
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
        Size
      </Typography>
      <IconButton onClick={toggle}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </IconButton>
    </Box>
    <Collapse in={open} timeout={300}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {sizeArray.map((item) => (
          <Box
            key={item.id}
            onClick={() => setActive(item.id)}
            sx={active === item.id ? activeStyle : notActiveStyle}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Collapse>
  </Box>
);

export default SizeFilter;

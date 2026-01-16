import { Box, Typography, IconButton, Collapse } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { colors } from "../constants";

type Props = {
  color: string;
  setColor: (c: string) => void;
  open: boolean;
  toggle: () => void;
};

const ColorFilter: React.FC<Props> = ({ color, setColor, open, toggle }) => (
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
        Colors
      </Typography>
      <IconButton onClick={toggle}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </IconButton>
    </Box>
    <Collapse in={open} timeout={300}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {colors.map((c) => (
          <Box
            key={c}
            onClick={() => setColor(c)}
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: c,
              border: "1px solid rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {color === c && (
              <FaCheck
                size={14}
                color={c === "rgba(255, 255, 255, 1)" ? "black" : "white"}
              />
            )}
          </Box>
        ))}
      </Box>
    </Collapse>
  </Box>
);

export default ColorFilter;

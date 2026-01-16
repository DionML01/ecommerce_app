import { Box, ListItem } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";

const CartNavigation = () => {
  const listItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "Casual" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingBottom: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      {listItems.map((item, index) => (
        <Box
          key={item.id}
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <ListItem sx={{ width: "auto", padding: 0 }}>{item.label}</ListItem>
          {index < listItems.length - 1 && (
            <ListItem>
              <MdKeyboardArrowRight size={20} />
            </ListItem>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CartNavigation;

import { List, ListItem } from "@mui/material";
import React, { useState } from "react";

const defaultStyle = {
  padding: "12px 24px",
  backgroundColor: "rgba(240, 240, 240, 1)",
  borderRadius: "20px",
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Satoshi Variable",
  color: "rgba(0, 0, 0, 0.6)",
  width: "auto", // take only the space of the text
  display: "inline-flex", // ensures it shrinks to fit text
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const activeStyle = {
  padding: "12px 24px",
  backgroundColor: "#000",
  borderRadius: "20px",
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Satoshi Variable",
  color: "#fff",
  width: "auto", // take only the space of the text
  display: "inline-flex", // ensures it shrinks to fit text
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const CustomList = () => {
  type Item = {
    id: number;
    value: string;
    active: boolean;
  };

  const items: Item[] = [
    { id: 1, value: "Small", active: true },
    { id: 2, value: "Medium", active: false },
    { id: 3, value: "Large", active: false },
    { id: 4, value: "X-Large", active: false },
  ];

  const [active, setActive] = useState<number>(0);

  const toggleActive = (id: number) => {
    setActive(id);
  };

  return (
    <List
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {items.map((item) => (
        <ListItem
          key={item.id}
          sx={active === item.id ? activeStyle : defaultStyle}
          onClick={() => toggleActive(item.id)}
        >
          {item.value}
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;

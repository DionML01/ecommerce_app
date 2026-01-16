import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface GridCellProps {
  children: ReactNode;
  gridColumn: { xs?: string; md?: string };
}

const GridCell: React.FC<GridCellProps> = ({ children, gridColumn }) => {
  return (
    <Box
      sx={{
        position: "relative",
        gridColumn,
      }}
    >
      {children}
    </Box>
  );
};

export default GridCell;

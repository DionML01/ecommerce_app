import { Box, List, ListItem, SxProps } from "@mui/material";
import { Theme } from "@emotion/react";
import { headingItemStyles } from "./styles";
import { linkItemStyles } from "./styles";
import Link from "next/link";

interface FooterLinkSectionProps {
  title: string;
  links: string[];
  gridColumn?: React.CSSProperties["gridColumn"];
  gridRow?: React.CSSProperties["gridRow"];
  sx?: SxProps<Theme>; // ✅ allow sx prop
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
  gridColumn,
  gridRow,
  sx,
}) => (
  <Box sx={{ gridColumn, gridRow, ...sx }}>
    <List sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <ListItem sx={headingItemStyles}>{title}</ListItem>
      {links.map((link, i) => (
        // <ListItem key={i} sx={linkItemStyles}>
        //   {link}
        // </ListItem>
        <Link href="#" key={i} style={linkItemStyles}>
          {link}
        </Link>
      ))}
    </List>
  </Box>
);

export default FooterLinkSection;

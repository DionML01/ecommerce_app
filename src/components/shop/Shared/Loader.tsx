import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        gap: "20px",
      }}
    >
      <CircularProgress />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Loader;

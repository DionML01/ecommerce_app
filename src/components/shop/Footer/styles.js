export const footerContainerStyles = {
  height: { md: "589px", xs: "995px" },
  width: "100%",
  position: "relative",
  backgroundColor: "#fff",
  p: 0,
  m: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const footerGridStyles = {
  paddingLeft: { md: "100px", xs: "10px" },
  paddingRight: { md: "100px", xs: "10px" },
  paddingTop: { md: "150px", xs: "200px" },
  paddingBottom: "50px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "grid",
  gridTemplateColumns: { md: "2fr 1fr 1fr 1fr 1fr", xs: "1fr 1fr" },
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
};

export const footerBottomStyles = {
  width: "100%",
  display: "flex",
  flexDirection: { md: "row", xs: "column" },
  justifyContent: "space-between",
  alignItems: "center",
  gap: { md: "auto", xs: "20px" },
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  paddingTop: "50px",
  paddingBottom: "50px",
  paddingRight: { md: "100px", xs: "10px" },
  paddingLeft: { md: "100px", xs: "10px" },
};

export const headingItemStyles = {
  fontFamily: "Satoshi Variable",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "3px",
};

export const linkItemStyles = {
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "Satoshi Variable",
  fontSize: "16px",
  fontWeight: 400,
};

export const descriptionTextStyles = {
  fontFamily: "Satoshi Variable",
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.6)",
  paddingRight: { md: "100px", xs: "0px" },
};

export const copyrightTextStyles = {
  fontFamily: "Satoshi Variable",
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.6)",
  fontWeight: 400,
};

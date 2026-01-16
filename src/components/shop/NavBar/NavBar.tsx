import {
  AppBar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShopCOLogo from "@/Assets/ShopCOLogo";
import CartIcon from "@/Assets/CartIcon";
import ProfileIcon from "@/Assets/ProfileIcon";
import SearchIcon from "@/Assets/SearchIcon";
import { useState } from "react";
import SearchIconPhone from "@/Assets/SearchIconPhone";
import ShopCOLogoPhone from "@/Assets/ShopCOLogoPhone";
import { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CategorySelect from "./CategorySelect";
import { useAuthStore } from "@/store/useAuthStore";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("");
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, user } = useAuthStore();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = {
    fontSize: "16px",
    fontFamily: "Satoshi Variable",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: 400,
  };

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setCategory(value);
    router.push(`/category/${value}`);
  };

  const toggleDrawer = (open: boolean) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          height: { xs: "70px", md: "150px" },
          backgroundColor: "#fff",
          color: "#000",
          px: "0px",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Satoshi Variable",
          }}
        >
          {/* Left side (menu + logo) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ display: { md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <ShopCOLogo />
                </Box>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <ShopCOLogoPhone />
                </Box>
              </Box>
            </Link>
          </Box>

          {/* 👇 Add desktop nav list here */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <CategorySelect />

            <Button
              color="inherit"
              sx={buttonStyle}
              component={Link}
              href="/checkout"
            >
              Payment Details
            </Button>
            <Button
              sx={buttonStyle}
              color="inherit"
              component={Link}
              href="/profile"
            >
              Profile
            </Button>
            <Button
              sx={buttonStyle}
              color="inherit"
              component={Link}
              href="/CartPage"
            >
              Cart
            </Button>
          </Box>

          <TextField
            placeholder="Search for products..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: { xs: "100%", md: "400px" },
              maxWidth: { xs: "160px", sm: "240px", md: "400px" },
              "& .MuiOutlinedInput-root": {
                height: "42px",
                width: "500px",
                borderRadius: "62px",
                backgroundColor: "rgba(240, 240, 240, 1)",
                "& fieldset": { border: "none" },
              },
              display: { xs: "none", md: "block" },
              marginRight: "80px",
            }}
          />
          {/* Right side (search + icons) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, md: 1.5 },
              flexShrink: 0,
            }}
          >
            {/* search + icons here */}
            <IconButton
              color="inherit"
              sx={{ display: { md: "none" }, p: 0.5 }}
            >
              <SearchIconPhone />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton
                color="inherit"
                sx={{ p: 0.5 }}
                component={Link}
                href="/CartPage"
              >
                <CartIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleMenuOpen}
              >
                <ProfileIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                slotProps={{
                  root: { disableScrollLock: true, keepMounted: true },
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    minWidth: 220,
                    py: 0.5,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    "& .MuiMenuItem-root": {
                      fontFamily: "Satoshi Variable",
                      fontSize: 14,
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      "&:hover": { bgcolor: "#f5f5f5" },
                    },
                    "& .MuiButton-root": {
                      color: "rgba(0, 0, 0, 1)",
                      textTransform: "none",
                      fontWeight: 500,
                      justifyContent: "flex-start",
                      px: 0,
                      minWidth: 0,
                    },
                  },
                }}
              >
                {isAuthenticated
                  ? [
                      <MenuItem
                        key="welcome"
                        disabled
                        sx={{
                          cursor: "default",
                          color: "inherit",
                          opacity: 1,
                          "&.Mui-disabled": {
                            color: "rgba(0, 0, 0, 0.87)",
                            opacity: 1,
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Welcome {user?.name}!
                      </MenuItem>,
                      <MenuItem
                        key="logout"
                        sx={{ color: "red", fontWeight: 500 }}
                        onClick={() => router.push("/logout")}
                      >
                        Logout
                      </MenuItem>,
                      <MenuItem
                        key="profile"
                        sx={{ fontWeight: 500 }}
                        onClick={() => router.push("/profile")}
                      >
                        Profile Details
                      </MenuItem>,
                    ]
                  : [
                      <MenuItem
                        key="login"
                        onClick={() => router.push("/login")}
                      >
                        Login
                      </MenuItem>,
                    ]}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/checkout">
                <ListItemText primary="Payment Details" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/profile">
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/CartPage">
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

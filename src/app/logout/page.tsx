"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { signOut } from "next-auth/react";
import LogoutRedirect from "@/components/LogoutRedirect";

const Page = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);

  const logout = async () => {
    try {
      await signOut({ redirect: false });
      setUser(null);
      setIsAuthenticated(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <LogoutRedirect>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "#fff",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "#333",
            }}
          >
            Are you sure you want to log out?
          </Typography>

          <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={logout}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                padding: "10px 0",
              }}
            >
              Yes, log me out
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push("/")}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                padding: "10px 0",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </LogoutRedirect>
  );
};

export default Page;

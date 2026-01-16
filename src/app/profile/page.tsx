import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <div style={{ width: "100%", height: "100%" }}>
        <ProfileDetails />
      </div>
    </ProtectedRoute>
  );
};

export default page;

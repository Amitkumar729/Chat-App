import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../../sections/auth/NewPasswordFrom";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset your password
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your New Password
        </Typography>
      </Stack>
      {/* New password form */}
      <NewPasswordForm/>

      <Link
        component={RouterLink}
        to="/auth/login"
        color={"inherit"}
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "flex" }}
      >
        
        <CaretLeft />
        Return to signin
      </Link>
    </>
  );
};

export default NewPassword;

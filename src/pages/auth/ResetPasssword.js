import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import ResetPassswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPasssword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot your password
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter an Email address associated with your account and we will
          email you a link to reset your password.
        </Typography>
        {/* Reest Password form */}
        <ResetPassswordForm/>

        <Link
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
          variant="subtitle2"
          sx={{ mt: 3, mx: "auto", alignItems: "center", display: "flex" }}
        > <CaretLeft/>
        Return to signin</Link>
      </Stack>
    </>
  );
};

export default ResetPasssword;

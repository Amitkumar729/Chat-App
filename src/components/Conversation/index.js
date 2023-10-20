import { Stack } from "@mui/material";
import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Message } from "./Message";

export const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />

      {/* Chat Message */}
     <Message menu={true} />

      {/* Chat footer */}
      <Footer />
    </Stack>
  );
};

import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { TimeLines } from "../MsgTypes/TimeLines";
import { TextMsg } from "../MsgTypes/TextMsg";
import { MediaMsg } from "../MsgTypes/MediaMsg";
import { ReplyMsg } from "../MsgTypes/ReplyMsg";
import { LinkMsg } from "../MsgTypes/LinkMsg";
import { DocMsg } from "../MsgTypes/DocMsg";
// import { Footer } from "./Footer";

export const Message = ({menu}) => {
  const theme = useTheme();
  return (
    <Box 
      width={"100%"}
      sx={{
        flexGrow: 1,
        height: "100%",
        overflowY: "auto",
        onMouseWheel: "enableScrolling()",
        "&::-webkit-scrollbar": { width: 8 },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          borderRadius: 10,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "light"
              ? "#E5E4E2"
              : "#36454F",
          borderRadius: 10,
        },
      }}
    >
      <Box p={3}>
        <Stack spacing={3}>
          {Chat_History.map((item) => {
            switch (item.type) {
              case "divider":
                /* timeline */
                return <TimeLines item={item} />;

              case "msg":
                switch (item.subtype) {
                  case "img":
                    /* image */
                    return <MediaMsg item={item} menu={menu} />;
                  case "doc":
                    /* Document */
                    return <DocMsg item={item} menu={menu} />;
                  case "link":
                    /* Link */
                    return <LinkMsg item={item} menu={menu} />;
                  case "reply":
                    /* Reply */
                    return <ReplyMsg item={item} menu={menu} />;

                  default:
                    /* text message */
                    return <TextMsg item={item} menu={menu} />;
                }
                 

              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    </Box>
  );
};

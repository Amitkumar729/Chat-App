import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  useTheme,
} from "@mui/material";

import { MagnifyingGlass } from "phosphor-react";

import {
  Search,
  SearchIconWrapper,
  SearchInputbase,
} from "../../components/Search";

import { CallElement } from "../../components/CallElement";
import { MemberList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  const theme = useTheme();
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted={true}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          p: 4,
        }}
      >
        {/* Title */}
        <DialogTitle sx={{ mb: 2 }}>{"Start Call"}</DialogTitle>
        {/* Content */}

        <DialogContent>
          <Stack spacing={2}>
            <Stack mb={4} sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <SearchInputbase placeholder="Search..." />
              </Search>
            </Stack>
            {/* Call List... */}
            {MemberList.map((el) => (
              <CallElement {...el} />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;

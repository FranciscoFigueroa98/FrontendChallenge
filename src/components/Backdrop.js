import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const Loading = ({ open }) => {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loading;

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { NavBar } from "./NavBar";
import { LOGO_WHITE, navMenuList } from "../../../core/constants/storage";

import "./navbars.scss";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#E0BE9C",
    opacity: "0.97",
  },
}));

// eslint-disable-next-line react/jsx-props-no-spreading
// eslint-disable-next-line react/display-name, react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

export function MobileNavBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="burger_menu_wrapper">
      <IconButton aria-label="burger_menu" onClick={handleClickOpen}>
        <MenuIcon />
      </IconButton>
      <BootstrapDialog
        fullScreen
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        TransitionComponent={Transition}
      >
        <IconButton
          sx={{ alignSelf: "end", color: "#FFF" }}
          edge="start"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <NavBar
          navList={navMenuList}
          logo={LOGO_WHITE}
          variant="mobile"
          // onClick={handleClose}
        />
      </BootstrapDialog>
    </div>
  );
}

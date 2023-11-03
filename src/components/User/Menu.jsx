import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getLastname, getMail, getName, logout } from "../Redux/sliceUser";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setCart } from "../Redux/sliceCart";

export default function CustomMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await dispatch(setCart([]));
    dispatch(logout());
    localStorage.removeItem("authToken");
    navigate("/");
    toast.success("Deslogeo correcto");
  };
  const name = useSelector(getName);
  const lastName = useSelector(getLastname);
  const email = useSelector(getMail);
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "#DDA15E",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar(`${name} ${lastName}`)} />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          sx: {
            bgcolor: "#FEFAE0",
            padding: "5px",
          },
        }}
      >
        <p className="bg-primary-300 text-primary-500">
          <MenuItem onClick={handleClose}>{`${name} ${lastName}`}</MenuItem>
        </p>
        <p className="bg-primary-300 text-primary-500">
          <MenuItem onClick={handleClose}>{email}</MenuItem>
        </p>
        <p className="bg-primary-500 text-primary-300">
          <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
        </p>
      </Menu>
    </div>
  );
}

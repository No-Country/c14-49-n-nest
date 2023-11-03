import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { setOrderByPrice, setProductsByCategory } from "../Redux/sliceCart";

export default function Filters({ setImagenSeleccionada }) {
  const dispatch = useDispatch();
  const filterByPrice = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setOrderByPrice(selectedOrder));
  };
  const filterByCategory = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setProductsByCategory(selectedOrder));
    setImagenSeleccionada("prodByCat");
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Precio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Precio"
          onChange={filterByPrice}
        >
          <MenuItem value={"Asc"}>Menor a Mayor</MenuItem>
          <MenuItem value={"Des"}>Mayor a Menor</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Productos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Productos"
          onChange={filterByCategory}
        >
          <MenuItem value={"todos"}>Todos</MenuItem>
          <MenuItem value={"Cafe"}>Cafe</MenuItem>
          <MenuItem value={"Medialuna"}>Panaderia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

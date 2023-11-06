import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import useFilters from "../../hooks/useFilter";

export default function Filters() {
  const { filterByPrice, filterByCategory } = useFilters();
  const productsByPrice = (event) => {
    const selectedOrder = event.target.value;
    filterByPrice(selectedOrder);
  };

  const productsByCategory = (event) => {
    const selectedOrder = event.target.value;
    filterByCategory(selectedOrder);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Precio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Precio"
          onChange={productsByPrice}
        >
          <MenuItem value={"price"}>-</MenuItem>
          <MenuItem value={"Mayor"}>Menor a Mayor</MenuItem>
          <MenuItem value={"Menor"}>Mayor a Menor</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Productos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Productos"
          onChange={productsByCategory}
        >
          <MenuItem value={"todos"}>Todos</MenuItem>
          <MenuItem value={"Cafe"}>Cafe</MenuItem>
          <MenuItem value={"Medialuna"}>Panaderia</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

import { useState } from "react";
import {
  getProductsByCategory,
  setOrderByPrice,
  setProductsByCategory,
} from "../Redux/sliceCart";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../Cards/Card";
import { useDispatch } from "react-redux";
export default function ProductsByCat() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const searchProducts = useSelector(getProductsByCategory);
  const totalProducts = searchProducts.length;
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;
  const filterByPrice = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setOrderByPrice(selectedOrder));
  };
  const filterByCategory = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setProductsByCategory(selectedOrder));
  };
  return (
    <div className="bg-primary-300 my-3 w-10/12 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Productos Por Categoria
          </h2>
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
        </div>
        <div className="flex flex-wrap  justify-around items-center">
          {searchProducts.slice(startIndex, endIndex).map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      </div>
      <Pagination
        validCurrentPage={validCurrentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, setOrderByPrice } from "../Redux/sliceCart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../Cards/Card";

const Carta = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filterByPrice = (event) => {
    const selectedOrder = event.target.value;
    dispatch(setOrderByPrice(selectedOrder));
  };
  const products = useSelector(getAllProducts);
  const totalProducts = products.length;
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  return (
    <div className="bg-primary-300 my-3 w-4/5 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Carta
          </h2>
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
        </div>
        <div className="flex flex-wrap gap-4 justify-around items-center">
          {products.slice(startIndex, endIndex).map((product) => (
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
};

export default Carta;

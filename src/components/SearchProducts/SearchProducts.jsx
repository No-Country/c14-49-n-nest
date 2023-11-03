import { useState } from "react";
import { getSearchProducts } from "../Redux/sliceCart";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../Cards/Card";
import Filters from "../renderFilters/Filters";

export default function SearchProducts({ setImagenSeleccionada }) {
  const [currentPage, setCurrentPage] = useState(1);
  const searchProducts = useSelector(getSearchProducts);
  const totalProducts = searchProducts.length;
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;
  return (
    <div className="bg-primary-300 my-3 w-10/12 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Productos encontrados
          </h2>
          <Filters setImagenSeleccionada={setImagenSeleccionada} />
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

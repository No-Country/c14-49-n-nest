import { useSelector } from "react-redux";
import { getFilteredServices } from "../../components/Redux/sliceCart";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/Cards/Card";
import { useState } from "react";
import Filters from "../../components/renderFilters/Filters";

export default function SearchedProducts() {
  const prodsFiltered = useSelector(getFilteredServices);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = prodsFiltered.length;
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Filters />
      <div className="flex flex-wrap  justify-around items-center">
        {prodsFiltered.slice(startIndex, endIndex).map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}{" "}
      </div>
      <div className="h-[10vh]">
        <Pagination
          validCurrentPage={validCurrentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

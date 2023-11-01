import { useState } from "react";
import { getAllProducts } from "../Redux/sliceCart";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../Cards/Card";
const Merch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector(getAllProducts);
  const totalProducts = products.length;
  const productsPerPage = 6;
  //Math.ceil redondea para arriba y Math.min busca el elemento de menor valor
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * productsPerPage;
  const endIndex = validCurrentPage * productsPerPage;
  return (
    <div className="bg-orange-100 my-3 w-4/5 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Merchandising
        </h2>
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
export default Merch;

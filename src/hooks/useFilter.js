import axios from "axios";
import { useEffect } from "react";
import {
  getAllProducts,
  getRenderProducts,
  setAllProducts,
  setFilteredServices,
  setRenderProducts,
} from "../components/Redux/sliceCart";
import { useDispatch, useSelector } from "react-redux";

const useFilters = () => {
  const dispatch = useDispatch();
  const allProd = useSelector(getAllProducts);
  const renderProducts = useSelector(getRenderProducts);
  const allProducts = () => {
    useEffect(() => {
      axios
        .get(`http://localhost:3001/products`)
        .then((response) => {
          const products = response.data;
          dispatch(setAllProducts(products));
          dispatch(setRenderProducts(products));
        })
        .catch((error) => {
          console.error("Error al obtener los Productos", error);
        });
    }, []);
  };
  const filterByPrice = (price) => {
    if (price === "price") {
      dispatch(setRenderProducts(allProd));
    } else if (price === "Menor") {
      const descendentOrder = [...renderProducts];
      descendentOrder.sort((a, b) => {
        const nameA = a.price;
        const nameB = b.price;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setRenderProducts(descendentOrder));
    } else if (price === "Mayor") {
      const ascendentOrder = [...renderProducts];
      ascendentOrder.sort((a, b) => {
        const nameA = a.price;
        const nameB = b.price;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });
      dispatch(setRenderProducts(ascendentOrder));
    }
  };
  const filterByCategory = (cat) => {
    const filteredProducts = allProd.filter(
      (product) => product.category === cat
    );
    dispatch(setRenderProducts(filteredProducts));
    if (cat == "todos") {
      dispatch(setRenderProducts(allProd));
    }
  };
  console.log(renderProducts);
  const filterByName = async (value) => {
    await axios
      .get(`http://localhost:3001/products/name?name=${value}`)
      .then((response) => {
        const foundProducts = response.data;
        dispatch(setRenderProducts(foundProducts));
        dispatch(setFilteredServices(foundProducts));
      })
      .catch((error) => {
        console.error("Error al obtener los productos", error);
      });
  };
  return {
    allProducts,
    filterByPrice,
    filterByCategory,
    filterByName,
  };
};
export default useFilters;

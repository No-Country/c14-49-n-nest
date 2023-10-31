import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {IoIosAddCircleOutline} from "react-icons/io"
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart, setAllProducts } from "../Redux/sliceCart";

const Carta = () => {
  const products = [
    {
      id: 1,
      name: "Café Espresso",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café espresso",
      price: "$3.50",
      descripcion: "Hecho con granos de café de alta calidad.",
    },
    {
      id: 2,
      name: "Café Latte",
      href: "#",
      imageSrc: "src/assets/caramel.png",
      imageAlt: "Taza de café latte",
      price: "$4.00",
      descripcion: "Mezcla suave de café y leche con un toque de caramelo.",
    },
    {
      id: 3,
      name: "Café Americano",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café americano",
      price: "$3.00",
      descripcion: "Café negro fuerte y puro para los amantes del café.",
    },
    {
      id: 4,
      name: "Café Mocha",
      href: "#",
      imageSrc: "src/assets/caramel.png",
      imageAlt: "Taza de café mocha",
      price: "$4.50",
      descripcion:
        "Mezcla de café con cacao y crema para un sabor chocolatoso.",
    },
    {
      id: 5,
      name: "Café Cappuccino",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 6,
      name: "Café Cappuccino",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 7,
      name: "Café Cappuccino",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 8,
      name: "Café Cappuccino",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
    {
      id: 9,
      name: "Café Cappuccino",
      href: "#",
      imageSrc: "src/assets/expresso.png",
      imageAlt: "Taza de café cappuccino",
      price: "$4.00",
      descripcion: "Café con leche espumosa y un toque de canela.",
    },
  ];
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length
  const productsPerPage = 6;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * productsPerPage;
  const endIndex = validCurrentPage * productsPerPage;
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`px-2 mx-1 rounded-full bg-black text-white ${
          i === validCurrentPage ? "bg-gray-600" : ""
        }`}
      >
        {i}
      </button>
    );
  }
  useEffect(() => {
    dispatch(setAllProducts(products));
  }, []);
  const addCart=(event)=>{
    const add = event.target.value;
    dispatch(setCart(add))
  }
  return (
    <div className="bg-primary-300 my-3 w-11/12 rounded-3xl">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Carta
        </h2>
        <div className="flex flex-wrap gap-3 items-center w-full justify-around">
          {products.slice(startIndex, endIndex).map((product) => (
            <div key={product.id} className="group relative">
              <Card className="mt-6 w-[260px] flex flex-col bg-gray-200 md:h-[490px]">
                <CardHeader className="h-2/3">
                  <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </CardHeader>
                <CardBody className="min-h-[210px] flex flex-col justify-between">
                  <div>
                    <Typography className="font-serif text-lg mb-2">{product.name}</Typography>
                    <Typography className="mb-2 font-inter text-sm">{product.descripcion}</Typography>
                  </div>
                  <div className="pt-0 flex flex-row justify-between">
                    <Button value={product.id} onClick={addCart} className="text-black p-2 bg-slate-400 hover:bg-slate-300 flex justify-center items-center">
                      <IoIosAddCircleOutline />
                      Añadir al carrito 
                    </Button>
                    <Typography>{product.price}</Typography>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p className="px-3">
          Page: {validCurrentPage} of {totalPages}
        </p>
        <div className="m-3">
        {validCurrentPage <= 1 ? (
          <button className="px-1" disabled>Anterior</button>
        ) : (
          <button className="px-1" onClick={() => setCurrentPage(validCurrentPage - 1)}>Anterior</button>
        )}
        {pageButtons}
        {validCurrentPage >= totalPages ? (
          <button className="px-1" disabled>Siguiente</button>
        ) : (
          <button className="px-1" onClick={() => setCurrentPage(validCurrentPage + 1)}>Siguiente</button>
        )}
        </div>
      </div>
    </div>
  );
};
export default Carta;

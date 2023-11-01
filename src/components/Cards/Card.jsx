import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { setCart } from "../Redux/sliceCart";
import { useDispatch } from "react-redux";

export default function ProductCard({ products }) {
  const dispatch = useDispatch();
  const addCart = (event) => {
    const add = event.target.value;
    dispatch(setCart(add));
  };
  return (
    <div key={products.id} className="group relative">
      <Card className="mt-6 w-[260px] flex flex-col bg-gray-200 md:h-[490px] md:mx-3 xl:mx-3">
        <CardHeader className="h-2/3">
          <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={products.imageUrl}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </CardHeader>
        <CardBody className="min-h-[210px] flex flex-col justify-between">
          <div>
            <Typography className="font-serif text-lg mb-2">
              {products.name}
            </Typography>
            <Typography className="mb-2 font-inter text-sm">
              {products.description}
            </Typography>
          </div>
          <div className="pt-0 flex flex-row justify-between">
            <Button
              value={products.id}
              onClick={addCart}
              className="text-black p-2 bg-slate-400 hover:bg-slate-300 flex justify-center items-center"
            >
              <IoIosAddCircleOutline />
              Añadir al carrito
            </Button>
            <Typography>${products.price}</Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

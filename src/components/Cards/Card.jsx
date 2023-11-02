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
    <div key={products.id} className="group mx-4">
      <Card className="mt-6 w-[280px] flex flex-col bg-primary-100 md:h-[490px] md:mx-3 xl:mx-3">
        <CardHeader className="h-2/3 mt-4">
          <div className="w-full h-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75">
            <img
              src={products.imageUrl}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </CardHeader>
        <CardBody className="min-h-[200px] flex flex-col justify-between">
          <div>
            <Typography className="font-serif text-lg mb-2 text-primary-300">
              {products.name}
            </Typography>
            <Typography className="mb-1 font-inter text-sm text-primary-300">
              {products.description}
            </Typography>
          </div>
          <div className="flex flex-row justify-between">
            <Button
              value={products.id}
              onClick={addCart}
              className="p-2 bg-primary-200 text-primary-300 hover:bg-primary-300 hover:text-primary-200 flex justify-center items-center"
            >
              <IoIosAddCircleOutline />
              Añadir al carrito
            </Button>
            <Typography className="text-primary-300">
              ${products.price}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

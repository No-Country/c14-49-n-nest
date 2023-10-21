import { useForm } from "react-hook-form";

const Frases = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div className="w-4/5  flex flex-col items-center justify-center my-2">
      <div className="w-full h-full bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Comparte tus Frases</h2>
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Inspira a muchos !</h3>
        <p className="text-xl font-bold text-gray-800 my-4 w-3/4 ">Comparte las frases Diarias de Aliento con los demas y gana fabulosos descuentos sobre nuestros productos Podras ser parte de Nuestra Marca y Inspirar a otros a Seguir Adelante. </p>
        <form className="flex flex-wrap w-3/4 justify-center items-center mt-10" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
            placeholder="Full Name" {...register("name")}
          />
          <input
            type="email"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
            placeholder="Email" {...register("email")}
          />
          <textarea
            name="message"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
            placeholder="Message"
            {...register("message")}
          ></textarea>
          <button type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-2 px-4 rounded-md mt-4 hover:bg-orange-600 hover:to-red-600 hover:text-white transition ease-in-out duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Frases;

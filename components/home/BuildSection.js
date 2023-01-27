import { motion, AnimatePresence } from "framer-motion";

const BuildSection = () => {
  return (
    <motion.div viewport={{ once: false }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ type: "easeIn", duration: 5, delay: 1 * .15 }} className="text-left sm:text-center sm:px-40 border-b border-gray-800 py-12">
      <h1 className="text-2xl sm:text-4xl  font-extrabold pl-2">
        Build whatever you want, seriously.
      </h1>
      <p className="text-lg font-medium text-gray-300   pt-2 pl-2 sm:text-center leading-7 mt-2">
        Because we provide an array of services, from design to frontend to
        database to creating api, you can then take that acquired knowledge and
        build any kind of cool shit you want.
      </p>
      <button
        type="submit"
        className="bg-indigo-800 px-4 py-2 rounded-md shadow-md mt-5 sm:w-2/4 lg:w-1/3 w-full hover:bg-indigo-900 transition ease-in-out"
      >
        Start Now
      </button>
    </motion.div>
  );
};
export default BuildSection;

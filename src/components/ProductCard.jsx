import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full" // Añade flex y h-full
    >
      {/* Imagen del producto */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Detalles del producto */}
      <div className="p-4 flex flex-col flex-1"> {/* Añade flex y flex-1 */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-md font-bold text-blue-600">${product.price}</span>
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-2 text-gray-500">({product.rating})</span>
        </div>

        {/* Botón para añadir al carrito */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addToCart}
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Añadir al Carrito
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
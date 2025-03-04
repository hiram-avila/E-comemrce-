import { motion } from "framer-motion";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = ({ cartItems, openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-3xl font-bold text-gray-800 flex items-center space-x-2"
          >
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">Tech</span>
            <span>Shop</span>
          </motion.div>

          {/* Menú de navegación (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#inicio"
              className="text-gray-600 hover:text-blue-600"
            >
              Inicio
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#productos"
              className="text-gray-600 hover:text-blue-600"
            >
              Productos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#ofertas"
              className="text-gray-600 hover:text-blue-600"
            >
              Ofertas
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contacto"
              className="text-gray-600 hover:text-blue-600"
            >
              Contacto
            </motion.a>
          </div>

          {/* Carrito y Menú Hamburguesa (Mobile) */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <div className="relative">
                <ShoppingCartIcon className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </div>
            </motion.button>

            {/* Ícono de hamburguesa (Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú desplegable (Mobile) */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#inicio"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
            >
              Inicio
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#productos"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
            >
              Productos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#ofertas"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
            >
              Ofertas
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contacto"
              className="block px-4 py-2 text-gray-600 hover:text-blue-600"
            >
              Contacto
            </motion.a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
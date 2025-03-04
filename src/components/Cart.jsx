import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";

const Cart = ({ isOpen, closeCart, cartItems, updateQuantity, removeItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      {/* Sidebar del carrito */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-2xl font-bold">Carrito de Compras</h3>
            <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence>
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-500 py-20"
                >
                  Tu carrito está vacío
                </motion.div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center space-x-4 mb-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-500">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Resumen de la compra */}
          <div className="p-6 border-t">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${calculateTotal()}</span>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={cartItems.length === 0}
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
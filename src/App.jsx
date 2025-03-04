import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TruckIcon, ShieldCheckIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products"; // Importa los productos

const features = [
  {
    icon: TruckIcon,
    title: "Envío Gratis",
    description: "En compras mayores a $300",
  },
  {
    icon: ShieldCheckIcon,
    title: "Garantía",
    description: "Protección de 2 años",
  },
  {
    icon: CreditCardIcon,
    title: "Pago Seguro",
    description: "Transacciones 100% seguras",
  },
];

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Añadir un producto al carrito
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Eliminar un producto del carrito
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar cartItems={cartItems} openCart={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[600px] flex items-center justify-center bg-gray-900"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative text-center text-white space-y-6 px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Tecnología del Futuro
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Descubre los últimos gadgets y dispositivos tecnológicos
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
          >
            Explorar Colección
          </motion.button>
        </div>
      </motion.section>

      {/* Sección de Características */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border border-transparent hover:border-gray-200"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Carrito */}
      <Cart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default App;
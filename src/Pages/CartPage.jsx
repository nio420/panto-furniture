import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { getImgUrl } from "../Utils/getImgUrl";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
import cartImgBg from "../assets/banner.png";
import { Link } from "react-router-dom";

const CartShopPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedPayment, setSelectedPayment] = useState("card");

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <section className="min-h-screen overflow-x-hidden">
      {/* banner image */}
      <div
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${cartImgBg})` }}
      >
        <h1 className="text-white font-bold tracking-[3px]
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center drop-shadow-lg">
          Your Shop Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center font-semibold text-xl text-primary mt-8 px-4">
          Your cart is empty.{" "}
          <span className="hover:text-primary hover:underline text-black/80">
            <Link to="/shop"> Add to cart </Link>
          </span>
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 px-4 lg:px-10 mt-8 mb-10">
          
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-center justify-between 
                bg-white p-4 rounded-lg shadow gap-4 sm:gap-0"
              >
                <img
                  src={getImgUrl(item.imageUrl)}
                  alt={item.name}
                  className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded"
                />

                <div className="flex flex-col sm:flex-1 sm:mx-4 text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500 mt-1">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer text-xl sm:text-base"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Payment & Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <p className="text-gray-600 mb-4 flex justify-between">
              Total Items: 
              <span className="font-semibold">{cartItems.length}</span>
            </p>

            <p className="text-gray-600 mb-6 flex justify-between">
              Total Price:
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Select Payment Method
            </h3>

            <div className="flex flex-col gap-2 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="card"
                  checked={selectedPayment === "card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                PayPal
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition cursor-pointer">
              Pay Now
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </section>
  );
};

export default CartShopPage;

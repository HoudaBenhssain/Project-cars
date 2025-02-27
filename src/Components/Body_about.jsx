import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import React from "react";
import nissan from "../../public/nissan-offer.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[200px] md:h-[300px] bg-[#1a237e]"
      >
        <div className="absolute inset-0 bg-[url('https://images.frandroid.com/wp-content/uploads/2023/11/luxeed-s7-00003.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            About Us
          </h1>
        </div>
      </motion.div>

      <div className="container mt-[20px] px-4 sm:px-6 lg:px-8 py-12 md:py-20 ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="flex-1 space-y-6 md:space-y-8 w-full"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#FFA726] text-lg md:text-xl font-medium inline-block"
              >
                About Us
              </motion.span>
              <h2 className="text-[#1a237e] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Welcome to Houda cars Service
              </h2>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              totam tenetur porro quasi earum, fugiat cum et explicabo fuga odit
              voluptates optio, maxime ducimus quae. Velit repellat totam
              delectus nemo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                "Premium Car Selection",
                "Flexible Rental Terms",
                "24/7 Customer Support",
                "Competitive Pricing",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <BsCheckCircle className="text-[#FFA726] text-xl flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
          >
            <div className="w-[65%] overflow-hidden m-auto ">
              <img
                src={nissan}
                alt="Red BMW Car"
                className="w-full h-auto rounded-lg  shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-48 h-48 md:w-72 md:h-72 bg-[#FFA726]/5 rounded-full -z-0 animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-48 h-48 md:w-72 md:h-72 bg-[#1a237e]/5 rounded-full -z-0 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

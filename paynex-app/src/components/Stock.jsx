import React from 'react';
import { motion } from 'framer-motion';

const StockInvestment = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-8 sm:p-16 min-h-screen">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center leading-tight">
                Stock Investments
            </h2>
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl mb-12">
                Maximize your portfolio with investments in leading stocks. Start building your wealth today!
            </p>
            {/* Investment Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
                {/* Investment Card 1: Apple */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">Apple Inc. (AAPL)</h3>
                    <p className="text-gray-400">Join the innovation with one of the world's most valuable companies.</p>
                </motion.div>

                {/* Investment Card 2: Amazon */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">Amazon.com Inc. (AMZN)</h3>
                    <p className="text-gray-400">Invest in the leader of e-commerce and cloud computing.</p>
                </motion.div>

                {/* Investment Card 3: Microsoft */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">Microsoft Corporation (MSFT)</h3>
                    <p className="text-gray-400">Be part of the future with a leader in software and technology solutions.</p>
                </motion.div>

                {/* Investment Card 4: Tesla */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">Tesla Inc. (TSLA)</h3>
                    <p className="text-gray-400">Invest in the forefront of electric vehicles and sustainable energy.</p>
                </motion.div>

                {/* Investment Card 5: Alphabet (Google) */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">Alphabet Inc. (GOOGL)</h3>
                    <p className="text-gray-400">Join the leader in online advertising and search engine technology.</p>
                </motion.div>

                {/* Investment Card 6: NVIDIA */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 transition-transform duration-300"
                >
                    <h3 className="text-xl font-bold mb-4">NVIDIA Corporation (NVDA)</h3>
                    <p className="text-gray-400">Invest in a leader in graphics processing and AI technology.</p>
                </motion.div>
            </div>

            {/* Invest Now Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00df9a] text-black font-bold py-4 px-8 rounded-full hover:bg-green-400 transition-all duration-300"
            >
                Invest Now
            </motion.button>
        </div>
    );
};

export default StockInvestment;

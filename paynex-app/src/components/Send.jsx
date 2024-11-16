import React from 'react';
import { motion } from 'framer-motion';

const MoneyTransferGlobe = () => {
    return (
        <div className="relative flex flex-col items-center justify-center bg-black text-white p-8 sm:p-16 min-h-screen overflow-hidden">
            {/* Main Title and Description */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center leading-tight">
                Simplify Global Money Transfer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mb-12">
                With our platform, sending and receiving money across the globe has never been easier. Join millions of users worldwide and take control of your finances with ease.
            </p>

            {/* Feature Cards Section */}
            <div className="mt-16 w-full flex flex-col md:flex-row justify-center gap-8">
                {['Secure Transactions', 'Fast Transfers', 'Global Reach'].map((feature) => (
                    <motion.div
                        key={feature}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 p-8 rounded-lg text-center shadow-lg max-w-xs border border-gray-600 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold mb-4">{feature}</h3>
                        <p className="text-gray-400">Description for {feature.toLowerCase()}.</p>
                    </motion.div>
                ))}
            </div>

            {/* Globe Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] flex justify-center items-center mb-16">
                <svg className="absolute" width="100%" height="100%" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="dotted-line" patternUnits="userSpaceOnUse" width="5" height="5">
                            <circle cx="2.5" cy="2.5" r="1.5" fill="#00df9a" />
                        </pattern>
                    </defs>
                    <line x1="25" y1="10" x2="75" y2="70" stroke="url(#dotted-line)" strokeWidth="2" strokeDasharray="5, 5" />
                </svg>

                <motion.div
                    className="w-72 h-72 rounded-full overflow-hidden relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, loop: Infinity, ease: 'linear' }}
                >
                    <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2024/08/globe-earth-continents-03-900x506.jpg" alt="Earth" className="absolute inset-0 w-full h-full object-cover" />
                </motion.div>

                <div className="absolute top-10 left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                    <p className="font-bold">You Sent</p>
                    <p className="text-lg">₹1200</p>
                </div>

                <div className="absolute bottom-10 right-6 bg-[#00df9a] text-black p-4 rounded-lg shadow-lg">
                    <p className="font-bold">Recipient</p>
                    <p className="text-lg">₹1200</p>
                </div>
            </div>

            {/* Call-to-Action Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00df9a] text-black font-bold py-4 px-8 rounded-full hover:bg-green-400 transition-all duration-300"
            >
                Try Out Now
            </motion.button>

            {/* Credit Card Section */}
            <div className="mt-24 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Check Out That Card</h2>
                <p className="text-base sm:text-lg text-gray-400 mb-8">Get the one that matches your vibe.</p>

                {/* Credit Cards Carousel */}
                <div className="overflow-hidden w-full max-w-full">
                    <motion.div
                        className="flex gap-8 mt-8"
                        drag="x"
                        dragConstraints={{ left: -1200, right: 0 }} // Adjust based on the number of cards
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-4 shadow-lg w-72 h-48 flex flex-col justify-between border border-gray-600 flex-shrink-0 ${card.bgColor}`}
                            >
                                <div className="text-right">
                                    <img src="https://www.kindpng.com/picc/m/603-6039982_sim-card-chip-png-transparent-png.png" alt="Chip" className="w-8" />
                                </div>
                                <div>
                                    <p className="text-white">{card.name}</p>
                                    <p className="text-white font-bold">{card.type}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const cardData = [
    { name: "Abhishek", type: "Mastercard", bgColor: "bg-black" },
    { name: "Abhishek", type: "Mastercard", bgColor: "bg-[#00df9a]" },
    { name: "Abhishek", type: "Mastercard", bgColor: "bg-gray-700" },
    { name: "Abhishek", type: "Mastercard", bgColor: "bg-[url('https://cbx-prod.b-cdn.net/COLOURBOX40708763.jpg?width=800&height=800&quality=70')]" },
    { name: "John Doe", type: "Visa", bgColor: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Jane Doe", type: "American Express", bgColor: "bg-[url('https://images.unsplash.com/photo-1589571894960-20bbe2828df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdhdGVyfGVufDB8fHx8MTYzMTczMDczMg&ixlib=rb-1.2.1&q=80&w=1080')]" },
];

export default MoneyTransferGlobe;

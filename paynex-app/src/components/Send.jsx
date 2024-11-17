import React from "react";

const MoneyTransferGlobe = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center px-6 py-16 sm:px-16 sm:py-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center leading-tight">
          Simplify Global Money Transfer
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mb-8 sm:mb-12">
          With our platform, sending and receiving money across the globe has never been easier. Join millions of users worldwide and take control of your finances with ease.
        </p>

        {/* Feature Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
          {["Secure Transactions", "Fast Transfers", "Global Reach"].map(
            (feature) => (
              <div
                key={feature}
                className="bg-gray-800 p-6 sm:p-8 rounded-lg text-center shadow-lg border border-gray-600"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4">{feature}</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Description for {feature.toLowerCase()}.
                </p>
              </div>
            )
          )}
        </div>

        {/* Globe Section */}
        <div className="relative w-full h-64 sm:h-96 flex justify-center items-center my-12 sm:my-16">
          <div className="w-52 sm:w-72 h-52 sm:h-72 rounded-full overflow-hidden relative">
            <img
              src="https://www.giantfreakinrobot.com/wp-content/uploads/2024/08/globe-earth-continents-03-900x506.jpg"
              alt="Earth"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Sent and Recipient Cards */}
          <div className="absolute top-4 left-4 bg-white text-black p-2 sm:p-4 rounded-lg shadow-lg text-sm sm:text-base">
            <p className="font-bold">You Sent</p>
            <p className="text-sm sm:text-lg">₹1200</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-[#00df9a] text-black p-2 sm:p-4 rounded-lg shadow-lg text-sm sm:text-base">
            <p className="font-bold">Recipient</p>
            <p className="text-sm sm:text-lg">₹1200</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <button className="bg-[#00df9a] text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-green-400 transition-all duration-300">
          Try Out Now
        </button>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get Your Virtual Cards with Ease
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 mb-6 sm:mb-8">
            Get your virtual card in just a few clicks. No bank account or credit card required—just the freedom to spend globally!
          </p>
        </div>

        {/* Radial Card Arrangement */}
        <div className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`absolute w-36 h-24 sm:w-48 sm:h-28 rounded-lg p-4 shadow-lg border border-gray-600 ${card.bgColor}`}
              style={{
                transform: `rotate(${index * (360 / cardData.length)}deg) translate(0, -140px) rotate(-${index * (360 / cardData.length)}deg)`,
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="text-right">
                  <img
                    src="https://www.kindpng.com/picc/m/603-6039982_sim-card-chip-png-transparent-png.png"
                    alt="Chip"
                    className="w-6 sm:w-8 inline-block"
                  />
                </div>
                <div>
                  <p className="text-white text-sm">{card.name}</p>
                  <p className="text-white font-bold text-sm">{card.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 sm:w-12 h-10 sm:h-12 mx-auto"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  { name: "Abhishek", type: "Mastercard", bgColor: "bg-black" },
  { name: "Abhishek", type: "Mastercard", bgColor: "bg-[#00df9a]" },
  { name: "Abhishek", type: "Mastercard", bgColor: "bg-gray-700" },
  {
    name: "Abhishek",
    type: "Mastercard",
    bgColor:
      "bg-[url('https://cbx-prod.b-cdn.net/COLOURBOX40708763.jpg?width=800&height=800&quality=70')]",
  },
  { name: "John Doe", type: "Visa", bgColor: "bg-gradient-to-r from-purple-500 to-pink-500" },
  {
    name: "Jane Doe",
    type: "American Express",
    bgColor:
      "bg-[url('https://images.unsplash.com/photo-1589571894960-20bbe2828df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdhdGVyfGVufDB8fHx8MTYzMTczMDczMg&ixlib=rb-1.2.1&q=80&w=1080')]",
  },
];

const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
    title: "Instant Transfers",
    description: "Send money to anyone, anywhere in seconds.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/833/833524.png",
    title: "Global Support",
    description: "We're here for you, 24/7, wherever you are.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2784/2784793.png",
    title: "Low Fees",
    description: "Enjoy competitive rates and no hidden charges.",
  },
];

export default MoneyTransferGlobe;

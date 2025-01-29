import React from 'react';

const PricingCard = ({ title, price, features, buttonText }: {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}) => (
  <div className="p-6 bg-white shadow-md rounded-lg max-w-sm w-full">
    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-3xl font-semibold text-purple-600">{price}</p>
    <ul className="mt-4 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="mt-6 w-full px-4 py-2 bg-purple-500 text-white rounded-full transition duration-300 hover:bg-purple-600">
      {buttonText}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">Pricing</h2>
        <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
          Choose a plan that suits your skincare needs. Start with our free plan or unlock more features with our basic plan.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
          <PricingCard
            title="Free Plan"
            price="$0/month"
            features={[
              "Basic skin analysis",
              "Limited product recommendations",
              "Community access"
            ]}
            buttonText="Get Started"
          />
          <PricingCard
            title="Basic Plan"
            price="$9.99/month"
            features={[
              "Advanced skin analysis",
              "Personalized product recommendations",
              "Progress tracking",
              "Priority support"
            ]}
            buttonText="Subscribe"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;

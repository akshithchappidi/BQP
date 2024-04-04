// pages/newsroom.tsx
import NewsCard from "../Components/NewsCard";

const news = [
  {
    title: "New Product Launch",
    description: "We are excited to announce the launch of our new product...",
    image: "/news1.webp",
    link: "https://medium.com/@marketing_26310/when-rubber-meets-the-road-improved-tyre-performance-through-advanced-simulations-c337ec5f4dc6",
  },
  {
    title: "Company Expansion",
    description: "Our company is expanding its operations to...",
    image: "/news2.webp",
    link: "https://medium.com/@marketing_26310/enabling-complex-simulations-with-quantum-algorithms-on-high-performance-computing-dec999d8fe41",
  },
  // Add more news items here
//   {
//     title: "Company Expansion",
//     description: "Our company is expanding its operations to...",
//     image: "/news3.webp",
//     link: "https://medium.com/@marketing_26310/engineering-simulations-the-formula-to-a-faster-exciting-future-in-motorsports-fc45d1c4dfba",
//   },
  
  {
    title: "Company Expansion",
    description: "Our company is expanding its operations to...",
    image: "/news4.webp",
    link: "https://medium.com/@marketing_26310/topology-optimization-powered-by-quantum-for-smarter-faster-engineering-simulations-9435b669b8af",
  },

  {
    title: "Company Expansion",
    description: "Our company is expanding its operations to...",
    image: "/news5.gif",
    link: "https://medium.com/@marketing_26310/topology-optimization-of-airfoil-structures-using-quantum-inspired-design-optimization-technique-f38dba038d95",
  },
  {
    title: "Company Expansion",
    description: "Our company is expanding its operations to...",
    image: "/news6.webp",
    link: "https://medium.com/@marketing_26310/charging-2w-3w-ev-performance-with-simulations-powered-by-quantum-b47fd98d9b0a",
  },
  {
    title: "Company Expansion",
    description: "Our company is expanding its operations to...",
    image: "/news7.webp",
    link: "https://medium.com/@marketing_26310/quantum-inspired-evolutionary-algorithms-revolutionizing-optimization-in-engineering-ed164b69f186",
  },
];

export default function NewsRoom() {
  return (
    <div className="p-16">
      <h1 className="text-3xl font-bold mb-4">News Room</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

// components/NewsCard.tsx
import Link from "next/link";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const NewsCard = ({ title, description, image, link }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
          <Link legacyBehavior className="text-blue-500 hover:text-blue-700" href = {link}>Read More</Link>
        
      </div>
    </div>
  );
};

export default NewsCard;
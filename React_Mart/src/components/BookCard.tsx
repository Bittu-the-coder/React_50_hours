import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating?: number;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  image,
  price,
  rating,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link to={`/product/${id}`} className="block p-4">
        <div className="relative pb-[100%] mb-4 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h2 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-blue-600">
            {formatter.format(price)}
          </p>
          {rating && (
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" />
              <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BookCard;

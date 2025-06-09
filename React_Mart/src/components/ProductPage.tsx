import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaArrowLeft } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  rating?: number;
  description?: string;
  images?: string[];
  brand?: string;
  stock?: number;
  category?: string;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setSelectedImage(response.data.thumbnail);
        })
        .catch((error) => {
          setError("Failed to load product details");
          console.error("Error fetching product:", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (!id)
    return (
      <div className="p-8 text-center text-red-600">Product ID is missing.</div>
    );
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (isLoading)
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-96 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-12">
            <img
              src={selectedImage}
              alt={product?.title}
              className="object-cover rounded-lg shadow-lg w-full h-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product?.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border-2 rounded-md overflow-hidden ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {product?.category}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {product?.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Brand: {product?.brand}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-blue-600">
                {formatter.format(product?.price || 0)}
              </p>
              {product?.stock && (
                <p
                  className={`text-sm ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </p>
              )}
            </div>

            {product?.rating && (
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          <div className="prose prose-sm max-w-none">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <p className="text-gray-600">{product?.description}</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

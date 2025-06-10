import React from "react";
import {
  useAddNewProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../app/service/dummyData";

type Product = {
  id: number;
  title: string;
  description: string;
};

type ProductsResponse = {
  products: Product[];
};

const DummyProduct = () => {
  const { data, error, isLoading } = useGetProductsQuery<ProductsResponse>();
  const { data: productById, isLoading: isLoadingById } =
    useGetProductByIdQuery<Product>(2);
  const [addNewProduct, { isLoading: isAdding }] = useAddNewProductMutation();

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading || isLoadingById || isAdding) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData: Product = {
        id: Math.floor(Math.random() * 10000), // Unique id for demo
        title: "Amazing T-Shirt",
        description:
          "This is one of the best and amazing t-shirt in the market",
      };

      await addNewProduct(newProductData).unwrap();
      // Optionally, refetch products here if needed
    } catch (err) {
      console.error("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.products?.[0]?.id ?? "No Product"}</h1>
      <h1>{data?.products?.[0]?.title ?? "No Title"}</h1>
      <h1>{data?.products?.[0]?.description ?? "No Description"}</h1>
      <button onClick={handleAddProduct}>Add New Product</button>
      <button onClick={() => console.log("Update Product")}>
        Update Product
      </button>
      <button onClick={() => console.log("Delete Product")}>
        Delete Product
      </button>
      <h1>Specific Product</h1>
      {productById && (
        <div>
          <h2>{productById.title}</h2>
          <p>{productById.description}</p>
        </div>
      )}
      <h1>DummyProduct</h1>
      {data?.products?.length ? (
        data.products.map((product) => <p key={product.id}>{product.title}</p>)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default DummyProduct;

// import productsData from "@/data/products.json";

// /**
//  * Get all products
//  */
// export const getAllProducts = () => {
//   return productsData;
// };

// /**
//  * Get single product by id
//  */
// export const getProductById = (id) => {
//   return productsData.find((product) => product.id === id);
// };

import productsData from "@/data/products.json";

/**
 * Get all products
 */
export const getAllProducts = () => {
  return productsData;
};

/**
 * Get single product by id
 */
export const getProductById = (id) => {
  if (!id) return null; // <--- important
  return productsData.find(
    (product) => String(product.id) === String(id)
  );
};

import { api } from "../../../config/axiosInstance";

export const getAllProducts = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : "/products";

    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("err in all products data ->", error);
  }
};

export const getAllProductsCategories = async () => {
  try {
    const res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("err in all products data ->", error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const res = await api.get(`/products/category/${category}`);
    console.log("categoy data", res)
    return res.data;
  } catch (error) {
    console.log("err from category", error);
  }
};

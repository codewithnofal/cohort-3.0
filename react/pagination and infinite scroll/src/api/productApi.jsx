import axios from "axios";

export const getProductsData = async (limit, page) => {
  let res = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`,
  );
  return res.data;
};

import { Tproduct } from "../types/product";
import instance from "./instance";

const getAll = () => {
  return instance.get("/products");
};

const getOne = (id: number | string) => {
  return instance.get(`/products/` + id);
};

const create = (newProduct: Tproduct) => {
  return instance.post(`/product/add`, newProduct);
};

const deleteProduct = (id: number) => {
  return instance.delete(`/product/` + id);
};

const updateProduct = (product: Tproduct) => {
  return instance.put(`/product/${product._id}`, product);
};

export { getAll, getOne, create, deleteProduct, updateProduct };

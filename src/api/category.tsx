import { Tcategory } from "../types/category";
import instance from "./instance";

const getAllCategory = () => {
  return instance.get("/categorys");
};

const getOneCategory = (id: number | string) => {
  return instance.get("/categorys/" + id);
};

const createCategory = (newCategory : Tcategory) => {
  return instance.post(`/category/add`, newCategory)
}

const deleteCategory = (id: number | string) => {
  return instance.delete("/category/" + id)
}

const updateCategory = (category : Tcategory) => {
  return instance.put("/category/" + category._id, category)
}


export { getAllCategory, getOneCategory, createCategory, deleteCategory, updateCategory}
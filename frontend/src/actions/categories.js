import { GET_CATEGORIES } from "./types";
import * as api from "../utils/api";

export const getCategoriesAction = categories => {
  return {
    type: GET_CATEGORIES,
    categories
  };
};

export const fetchCategories = () => dispatch => {
  return api
    .getCategories()
    .then(categories => dispatch(getCategoriesAction(categories)));
};

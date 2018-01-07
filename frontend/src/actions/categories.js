import * as api from "../utils/api";

export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategoriesAction = categories => {
    return {
        type: GET_CATEGORIES,
        categories
    };
};

export const fetchCategories = () => dispatch => {
    return api.getCategories()
        .then((categories) => dispatch(getCategoriesAction(categories)));
};
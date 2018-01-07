import {
    GET_CATEGORIES
} from '../actions/categories'


function categories(state = [], action) {
    const {categories} = action;
    
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories
            };
        default:
            return state;
    }
};

export default categories;
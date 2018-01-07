import {
    GET_ALL_POSTS,
    GET_POSTS_BY_CATEGORY
} from './types';
import * as api from "../utils/api";

export const getAllPosts = (posts) => {
    return {
        type: GET_ALL_POSTS,
        posts
    };
};

export const getPostsByCategory = (posts, category) => {
    return {
        type: GET_POSTS_BY_CATEGORY,
        posts,
        category
    }
}

export const fetchAllPosts = () => (dispatch) => {
    return api.getAllPosts()
        .then(posts => dispatch(getAllPosts(posts)));
}


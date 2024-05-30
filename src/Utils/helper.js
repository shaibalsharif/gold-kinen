import axios from "axios";
const BASE_URL = `https://jsonplaceholder.typicode.com`

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data.sort((item_1, item_2) => item_2.id - item_1.id);

    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const fetchComments = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};
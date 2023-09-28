import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:1594/api";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const userToken = Cookies.get("userToken");

const handleError = (error) => {
    throw error.response.data;
};

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`/auth/signup`, userData);
        if (response.data.token) {
            token.set(response.data.token);
        }
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`/auth/login`, credentials);

        if (response && response.data && response.data.token) {
            token.set(response.data.token);
        }
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const logoutUser = async () => {
    try {
        const response = await axios.get(`/auth/profile/logout`, {});
        token.unset();
        Cookies.remove("userToken");
        window.location.reload();
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const deleteUser = async (workerId) => {
    try {
        const response = await axios.delete(`/auth/users/${workerId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getCurrentUser = async (userToken) => {
    try {
        token.set(userToken);
        const response = await axios.get(`/auth/profile`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getAnotherUser = async (workerId) => {
    try {
        const response = await axios.get(`/auth/users/${workerId}`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(`/auth/users`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const updateUserPassword = async (workerId, newPassword) => {
    try {
        const response = await axios.patch(`/auth/users/${workerId}/password`, {
            password: newPassword,
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const updateAnotherUserPassword = async (workerId, newPassword) => {
    try {
        const response = await axios.patch(
            `/auth/users/${workerId}/password/update`,
            { password: newPassword }
        );
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const updateUserFinanceInfo = async (financeData) => {
    try {
        const response = await axios.put(`/auth/profile/update`, financeData);
        token.set(userToken);

        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const patchWorkerData = async (workerId, updatedData) => {
    try {
        const response = await axios.patch(
            `/staff/updatePatch/${workerId}`,
            updatedData
        );
        token.set(userToken);

        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getWorkerData = async () => {
    try {
        const response = await axios.get(`/staff/`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const ApiRequests = {
    token,
    registerUser,
    loginUser,
    logoutUser,
    deleteUser,
    getCurrentUser,
    getAnotherUser,
    getAllUsers,
    updateUserPassword,
    updateAnotherUserPassword,
    updateUserFinanceInfo,
    patchWorkerData,
    getWorkerData,
};

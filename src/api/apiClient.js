import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:1594/api";

const token = {
    set() {
        axios.defaults.headers.common.Authorization = `Bearer ${Cookies.get(
            "userToken"
        )}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization =
            Cookies.remove("userToken");
    },
};

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
        window.location.reload();
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const deleteUser = async (workerId) => {
    try {
        const response = await axios.delete(
            `/auth/profiles/delete/${workerId}`
        );
        token.set();
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const getCurrentUser = async () => {
    try {
        token.set();
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
        const response = await axios.get(`/auth/profiles`);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const updateUserPassword = async (newPassword) => {
    try {
        const response = await axios.put(`/auth/profile/update/password`, {
            password: newPassword,
        });
        token.set();
        token.unset();
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
        token.set();

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
        token.set();

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

const getUserByUsername = async (username) => {
    try {
        const response = await axios.get(`/auth/profiles/username/${username}`);
        token.set();

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
    getUserByUsername,
};

import axios from "axios";

const BASE_URL = "http://localhost:4000/api";
const SECURITY_API = `${BASE_URL}/auth`;

const api = axios.create({
    withCredentials: true,
    timeout: 1000
});

export const signup = async (email, username, password) => {
    try {
        const request_url = `${SECURITY_API}/signup`
        const response = await api.post(request_url, {email, username, password})
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        throw e;
    }
}

export const login = async (email, password) => {
    try {
        const request_url = `${SECURITY_API}/login`
        const response = await api.post(request_url, {email, password})
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        throw e;
    }
}

export const logout = async () => {
    try {
        const request_url = `${SECURITY_API}/logout`
        const response = await api.post(request_url)
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {
        throw e;
    }
}

export const profile = async () => {
    try {
        const request_url = `${SECURITY_API}/profile`
        const response = await api.post(request_url)
        if (response.status === 200) {
            return response.data;
        } else {
            return [];
        }
    } catch (e) {

    }
}

export const update = async (user) => {
    try {
        const request_url = `${SECURITY_API}/profile`
        const response = await api.put(request_url, user)
        if (response.status === 200) {
            return response.data;
        }
    } catch (e) {

    }
}
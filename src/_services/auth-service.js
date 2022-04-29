import axios from "axios";
const BASE_URL = "http://localhost:4000/api";
const SECURITY_API = `${BASE_URL}/auth`;

const api = axios.create({
    withCredentials: true
});

export const signup = async (email, username, password) =>
    api.post(`${SECURITY_API}/signup`,
        {email, username, password}).then(response => response.data);

export const login = async (email, password) =>
    api.post(`${SECURITY_API}/login`,
        {email, password}).then(response => response.data);

export const logout = async () =>
    api.post(`${SECURITY_API}/logout`)
        .then(response => response.data);

export const profile = async () =>
    api.post(`${SECURITY_API}/profile`)
        .then(response => response.data);

export const update = async (user) => {
    api.put(`${SECURITY_API}/profile`, user)
        .then(response => response.data)
}
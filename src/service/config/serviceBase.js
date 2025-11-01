import axios from 'axios'
import Cookies from "js-cookie";

export default class ServiceBase {
    constructor(mainPath) {
        this.api = axios.create({
            baseURL: `http://localhost:8080${mainPath}`
        });
    }

    getTokenClient() {
        let logged = Cookies.get('user-logged-client');
        if (logged) {
            let cookie = JSON.parse(logged);
            return cookie.token;
        } else {
            return '';
        }
    }

    async get(path) {
        try {
            let response = await this.api.get(path);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async post(path, body) {
        try {
            let response = await this.api.post(path, body);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async postImage(path, body) {
        try {
            let response = await this.api.post(path, body, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async put(path, body) {
        try {
            let response = await this.api.put(path, body);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async patch(path) {
        try {
            let response = await this.api.patch(path);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async patchImage(path) {
        try {
            let response = await this.api.patch(path, {}, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    async delete(path) {
        try {
            let response = await this.api.delete(path);
            return this.handleResponse(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    handleResponse(response) {
        return {
            status: response.status,
            data: response.data
        };
    }

    handleError(error) {
        return error.message;
    }

}
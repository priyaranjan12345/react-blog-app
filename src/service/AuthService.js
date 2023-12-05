import { request, setAuthToken, removeAuthToken, getAuthToken } from '../helper/axios_helper';

export class AuthService {
    registerUser(formData) {
        removeAuthToken()
        request(
            "POST",
            "register",
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }
        );
    }

    login({ email, password }) {
        removeAuthToken()
        return request(
            "POST",
            "auth/login",
            {
                email: email,
                password: password
            }
        );
    }

    getToken() {
        return getAuthToken();
    }

    saveToken(token) {
        setAuthToken(token);
    }

    getCurrentUser() {
        const token = getAuthToken();
        if (token != '' && token != null && token != 'undefined') {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.sub;
        }

        return '';
    }

    logout() {
        removeAuthToken();
    }
}

const authService = new AuthService()

export default authService
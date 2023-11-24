import { request, setAuthToken, removeAuthToken } from '../helper/axios_helper';

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
        console.log(email +"  "+password);
        return request(
            "POST",
            "login",
            {
                email: email,
                password: password
            }
        );
    }

    saveToken(token) {
        setAuthToken(token)
    }

    logout() {
        removeAuthToken()
    }
}

const authService = new AuthService()

export default authService
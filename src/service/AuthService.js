import { request, setAuthToken, removeAuthToken } from '../helper/axios_helper';

export class AuthService {
    registerUser(formData) {
        request(
            "POST",
            "register",
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            }
        )
            .then((response) => {
                setAuthToken(response.data.token)
            })
            .catch((error) => {
                console.log("login error: " + error);
            });
    }

    login({ email, password }) {
        request(
            "POST",
            "auth/authenticate",
            {
                email: email,
                password: password
            }
        )
    }

    logout() {
        removeAuthToken()
    }
}

const authService = new AuthService()

export default authService
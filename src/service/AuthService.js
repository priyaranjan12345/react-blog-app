import { request, setAuthToken, removeAuthToken, getAuthToken } from '../helper/axios_helper';

export class AuthService {
    registerUser({ ...data }) {
        

        let payload = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "password": data.password,
            "userImage":data.profileImage.split(",")[1],
            "addressDto": {
                "country": data.country,
                "state": data.state,
                "city": data.city,
                "locality": data.locality,
                "pinCode": data.pinCode,
                "localAddress": data.localAddress
            }
        }

        console.log(payload);
        removeAuthToken()
        return request(
            "POST",
            "auth/register",
            payload,
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

    getUsername() {
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
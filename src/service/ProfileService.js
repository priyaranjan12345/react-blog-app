import { request } from "../helper/axios_helper";

export class ProfileService {
    getMyProfile() {
        return request(
            "GET",
            "profile/profile-details"
        );
    }
}

const profileService = new ProfileService();
export default profileService;
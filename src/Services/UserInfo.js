import userAuth from "./UserAuth";
// const API_BASE_URL = "http://localhost:5000/api/v1/";
const API_BASE_URL = "https://crm-admin-panel-backend.onrender.com/api/v1/";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ await userAuth.getUserToken()}`
    // You can add more headers if needed
};


const getUserById = "get-user-by-id";
// const getAllUsers = "get-all-users";
const myNetwork = "mynetwork";
const UserInfo = {
    getUserById: async () =>{
        try {
            const response = await fetch(API_BASE_URL + getUserById, {
                method: 'POST',
                headers: headers,
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
        
    },
    getMyNetwork: async (page, perPage) =>{
        try {
            const response = await fetch(API_BASE_URL + myNetwork, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    page: page,
                    perPage: perPage
                })
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserInfo;
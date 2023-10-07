// const API_BASE_URL = "http://localhost:5000/api/v1/";
const API_BASE_URL = "https://crm-admin-panel-backend.onrender.com/api/v1/";
const Register = "register";
const Login = "login";
const headers = {
    'Content-Type': 'application/json',
    // You can add more headers if needed
};

const userAuth = {
    doRegister: async (data) => {
        try {
            const response = await fetch(API_BASE_URL + "/" + Register, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data), // Convert the data to JSON format
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.log("error==>", error)
        }
    },
    doLogin: async (data) => {
        try {
            const response = await fetch(API_BASE_URL + Login, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data), // Convert the data to JSON format
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error)
        }
    },
    doLogOut: async () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    getUserToken: async () => {
        try {
            const crm_user = localStorage.getItem('crm_user');
            let token = null;
            if(crm_user!=null){
                token = JSON.parse(crm_user)?.token;
                const parts = token.split(' ');
                token = parts[1];
            }
            return token;
        }
        catch (error) {
            console.log(error);
            return  null;
        }
    }
}
export default userAuth;
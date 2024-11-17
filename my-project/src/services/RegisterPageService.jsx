import axios from "../config/AxiosConfig";

class RegisterPageService {
  register(newUser) {
    return axios.post("/users", newUser);
  }

  async login({ email, password }) {
    try {
      const response = await axios.get(
        `/users?email=${email}&password=${password}`
      );
      return response.data.length > 0; // Kullanıcı varsa true, yoksa false döner
    } catch (error) {
      throw new Error("Doğrulama sırasında hata oluştu.");
    }
  }
}

export default RegisterPageService;

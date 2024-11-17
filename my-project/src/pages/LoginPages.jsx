import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPageService from "../services/RegisterPageService"; // Kullanıcı doğrulama için servis

function LoginPages() {
  const navigate = useNavigate();
  const registerService = new RegisterPageService();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await registerService.login({ email, password });

      if (response) {
        toast.success("You have successfully logged in!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Hatalı e-posta veya şifre.");
      }
    } catch (error) {
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-30rem border border-lastgrey py-12 px-7 rounded-lg shadow-transparent"
        onSubmit={handleLogin}
      >
        <ToastContainer />
        <div
          className="flex items-center gap-2 mb-11 border border-lastgrey p-3 rounded-3xl shadow-transparent w-28 cursor-pointer hover:bg-lastbackgroundHover"
          onClick={() => navigate("/register")}
        >
          <ion-icon
            name="chevron-back-outline"
            style={{ fontSize: "1.2rem" }}
            className="block"
          />
          <p className="text-sm font-medium">Register</p>
        </div>

        <h2 className="font-gemunu text-5xl font-semibold mb-4">dimo</h2>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-base font-medium ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5 focus:outline-lastmaincolor"
            placeholder="name@dimo.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-base font-medium "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-lastmaincolor block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-lastmaincolor "
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-lastmaincolor hover:bg-lastmaincolorHover focus:outline-lastmaincolor font-medium rounded-lg text-base px-5 py-2.5 text-center w-full"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginPages;

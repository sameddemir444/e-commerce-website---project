import React from "react";
import { useFormik } from "formik";
import { registerPageSchema } from "../schemas/RegisterPageSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterPageService from "../services/RegisterPageService";
import { useNavigate } from "react-router-dom";

function RegisterPages() {
  const navigate = useNavigate();
  const registerService = new RegisterPageService();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      terms: false,
    },
    onSubmit: (values) => {
      registerService
        .register({
          email: values.email,
          password: values.password,
        })
        .then(() => {
          toast.success("You have successfully registered!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          toast.error(
            "An error occurred during registration: " + error.message
          );
        });
    },
    validationSchema: registerPageSchema,
  });

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-30rem border border-lastgrey py-12 px-7 rounded-lg shadow-transparent"
      >
        <ToastContainer />
        <div
          className="flex items-center gap-2 mb-11 border border-lastgrey p-3 rounded-3xl shadow-transparent w-24 cursor-pointer hover:bg-lastbackgroundHover"
          onClick={() => navigate("/login")}
        >
          <ion-icon
            name="chevron-back-outline"
            style={{ fontSize: "1.2rem" }}
            className="block"
          />
          <p className="text-sm font-medium">Login</p>
        </div>

        <h2 className="font-gemunu text-5xl font-semibold mb-4">dimo</h2>
        <span className="text-gray-500 mb-8 block text-base">
          To avoid missing out on opportunities, create an account and enjoy.
        </span>

        {/* Email Input */}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-base font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5 focus:outline-lastmaincolor"
            placeholder="name@dimo.com"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-base font-medium"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-lastmaincolor block w-full p-2.5"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Repeat Password Input */}
        <div className="mb-5">
          <label
            htmlFor="repeatPassword"
            className="block mb-2 text-base font-medium"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-lastmaincolor block w-full p-2.5"
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword && (
            <p className="text-red-600 text-sm mt-1">
              {formik.errors.repeatPassword}
            </p>
          )}
        </div>

        {/* Checkbox Input */}
        <div className="flex items-start mb-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-lastmaincolor"
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            I agree with the{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>
        {formik.touched.terms && formik.errors.terms && (
          <p className="text-red-600 text-sm mt-1">{formik.errors.terms}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-lastmaincolor hover:bg-lastmaincolorHover focus:outline-lastmaincolor font-medium rounded-lg text-base px-5 py-2.5 text-center w-full mt-4"
        >
          Register new account
        </button>
      </form>
    </div>
  );
}

export default RegisterPages;

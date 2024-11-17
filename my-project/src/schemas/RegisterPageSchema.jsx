// schemas/RegisterPageSchema.js
import * as yup from "yup";

export const registerPageSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  terms: yup.boolean().oneOf([true], "Please tick the contract"),
});

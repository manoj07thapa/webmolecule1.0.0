import { object, string } from "yup";

export const forgotPasswordSchema = object({
  username: string().required(),
});

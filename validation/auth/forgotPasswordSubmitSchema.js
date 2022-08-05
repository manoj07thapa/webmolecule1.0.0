import { object, string, number } from "yup";

export const forgotPasswordSubmitSchema = object({
  username: string().required(),
  code: number().required(),
  newPassword: string().required().min(8),
});

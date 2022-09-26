import { withSSRContext } from "aws-amplify";

export const checkUser = async (req) => {
  const SSR = withSSRContext({ req });

  try {
    const user = await SSR.Auth.currentAuthenticatedUser();

    if (!user) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    if ((error = "The user is not authenticated")) {
      return {
        notFound: true,
      };
    }
  }
};

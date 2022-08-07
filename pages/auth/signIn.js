import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Login from "../../components/auth/Login";

function SignIn() {
  const router = useRouter();

  useEffect(() => {
    async function onAppLoad() {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        router.push("/");
      }
    }
    onAppLoad();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[url('/architect.svg')]  ">
      <Login />
    </div>
  );
}

export default SignIn;

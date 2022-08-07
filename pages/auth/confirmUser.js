import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import UserConfirmation from "../../components/auth/UserConfirmation";

function ConfirmUser() {
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
      <UserConfirmation />
    </div>
  );
}

export default ConfirmUser;

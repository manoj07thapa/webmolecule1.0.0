import { Fragment, useCallback, useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import toast from "../components/toast/Toast";
import { API } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import FramerMotion from "../components/sharedLayouts/FramerMotion";

const Contact = () => {
  //
  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = useCallback(() => {
    toast.dismiss();
  }, []);

  return (
    <FramerMotion>
      <div className=" px-4 sm:px-6  grid place-content-center mt-40 space-y-2 sm:space-y-7 text-center">
        <h1 className=" text-gray-300 font-extrabold text-3xl sm:text-8xl sm:tracking-widest">
          WebMolecule
        </h1>
        <h3 className=" text-gray-500 font-extrabold text-2xl tracking-widest text-center">
          Gatthaghar-3 , Bhaktapur, Nepal
        </h3>
        <div className="text-center text-gray-600 text-xl tracking-wide border-b border-pink-600 pb-24">
          <p>Email: support@webmolecule.com</p>
          <p>Phonenumber: 016631641, 9863715907</p>
        </div>
      </div>
      <Footer />
    </FramerMotion>
  );
};
export default Contact;

import { Fragment, useCallback } from "react";
import Footer from "../components/footer/Footer";
import toast from "../components/toast/Toast";

const Contact = () => {
  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const dismiss = useCallback(() => {
    toast.dismiss();
  }, []);

  return (
    <Fragment>
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
      <div>
        <div onClick={() => notify("success", "Success!")} className="message">
          <p>Success Message</p>
        </div>
        <div onClick={() => notify("error", "Error!")} className="message">
          <p>Error Message</p>
        </div>
        <div onClick={() => notify("info", "Info!")} className="message">
          <p>Info Message</p>
        </div>
        <div onClick={() => notify("warning", "Warning!")} className="message">
          <p>Warning Message</p>
        </div>
        <div onClick={dismiss} className="message">
          <p>Dissmiss All Messages</p>
        </div>
        <style jsx>{`
          .message {
            cursor: pointer;
            font: 15px Helvetica, Arial, sans-serif;
            background: #eee;
            padding: 20px;
            text-align: center;
            transition: 100ms ease-in background;
            margin: 10px;
          }
          .message:hover {
            background: #ccc;
          }
        `}</style>
      </div>

      <Footer />
    </Fragment>
  );
};
export default Contact;
